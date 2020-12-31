# -*- coding: utf-8 -*-
import random
import json

from util import *


def sample_interest(cate_lis, interest_count_lis):
    sample_count = random.sample(interest_count_lis, 1)[0]
    if len(cate_lis) <= sample_count:
        return cate_lis
    else:
        return random.sample(cate_lis, sample_count)


def random_weight_and_sort_list(interest_lis, maxs):
    # 对选中的tag，生成权重
    interest_weight_lis = [(interests, str(round(random.uniform(0, maxs), 4))) for interests in interest_lis]
    # 倒排
    sort_interest_weight_lis = sorted(interest_weight_lis, key=lambda x: float(x[1]), reverse=True)
    return ['_'.join(interest_tupple) for interest_tupple in sort_interest_weight_lis]


def create_user_portrait():
    """
    用户画像召回，文本数据，1w条数据，10个分类
    docid,cate,关键词_tfidf(10)

    用户画像构建
    1w条文本随机生成感兴趣的分类和关键词，每个分类或关键词的数量就是差不多 2-4 个，这个可以根据实际情况调整

    用户画像：长，中，短，每个下面依次有感兴趣的分类和关键词(2-4)，关键词是在感兴趣的分类下的关键词

    cate_to_article：每个分类下的分值的文章倒排结果（top10篇）hotboost
    dockeyword_to_article：每个关键词下带tfidf分值的文章倒排结果（top10篇）
    user_portrait：每个用户短中长期画像分类与关键词的倒排结果
    """
    conn, cursor = connectDb()
    cate_lis = ['体育', '财经', '房产', '家居', '教育', '科技', '时尚', '时政', '游戏', '娱乐']
    user_portrait_type = ['short', 'middle', 'long']
    # 随机选择tag数量
    interest_count_list = [2, 3, 4]
    # 分类对应关键词 Top10
    cate_to_dockeyword_dic = {cate: set() for cate in cate_lis}
    # 关键词下所有文章倒排
    dockeyword_to_article_dic = {}
    # 分类下文章的倒排
    cate_to_article_dic = {cate: [] for cate in cate_lis}
    with open('article_portrait_with_weight.txt', encoding='utf-8') as f:
        for line in f:
            line_list = line.strip().split('\t')
            doc_id = line_list[0]
            doccate = line_list[1]
            keyword_str = line_list[2]
            if len(line_list) > 2:
                # 分类:[docid1, docid2, ... docidn]
                cate_to_article_dic[doccate].append(doc_id)
                # 关键词权重
                keywords_weight_lis = keyword_str.split(',')
                for keyword_weight in keywords_weight_lis:
                    keyword_weight_list = keyword_weight.split('_')
                    keyword = keyword_weight_list[0]
                    keyword_weight = keyword_weight_list[1]
                    # 分类: [keyword1, keyword2, ...]
                    # 用户计算用户画像结果
                    cate_to_dockeyword_dic[doccate].add(keyword)

                    if keyword not in dockeyword_to_article_dic:
                        dockeyword_to_article_dic[keyword] = set()
                    # keyword: [docid1_tfidf1, docid1_tfidf2, ...]
                    dockeyword_to_article_dic[keyword].add(doc_id + '_' + str(keyword_weight))

    dockeyword_to_article(dockeyword_to_article_dic, conn, cursor)  # 文章关键词对应的文章集合，关键词-文章id_关键词权重
    #  1 | 球队       | 104_2.0018,678_1.9043,295_1.6845,753_1.4388,508_1.3924,296_1.3762,752_1.3367,703_1.2737,576_1.2159,531_1.2159
    cate_to_article(cate_to_article_dic, conn, cursor)  #
    #  1 | 体育   | 775_0.8634,41_0.8217,485_0.7834,327_0.7453,126_0.7211,340_0.6737,578_0.421,546_0.2119,174_0.1868,6_0.0054
    insert_user_portrait_to_sql(cate_lis, cate_to_dockeyword_dic, interest_count_list, user_portrait_type, conn, cursor)  #  用户短中长期画像对应的分类与关键词关注度
    #  1 | 0_short        | 时政_0.3273,科技_0.211                                  | 医嘱_0.5597,电网_0.4718,魔术_0.3862,长焦机_0.2351,政府办_0.1306
    closeDb(conn, cursor)


# 将分类对应的倒排文章权重集合导入mysql与redis
def cate_to_article(cate_to_article_dic, conn, cursor):
    for cate, articles in cate_to_article_dic.items():
        articles_weight_lis = random_weight_and_sort_list(articles, 1)
        sql = """ INSERT INTO cate_to_article(cate,article_with_score) 
                  VALUES(%s,%s) """
        writeDb(conn, cursor, sql, [cate, ','.join(articles_weight_lis)])
        pipline.set(cate, json.dumps(','.join(articles_weight_lis), ensure_ascii=False))
    pipline.execute()


# 生成用户画像导入mysql与redis
def insert_user_portrait_to_sql(cate_lis, cate_to_dockeyword_dic, interest_count_lis, user_portrait_type, conn, cursor):
    # 100个用户
    for user_id in range(100):
        # ['short', 'middle', 'long']
        for types in user_portrait_type:
            # 随机选感兴趣的分类数量
            interest_cate_lis = sample_interest(cate_lis, interest_count_lis)
            # 分类下选感兴趣的关键词
            interest_cate_weight_lis = random_weight_and_sort_list(interest_cate_lis, 0.6)
            # 分类下感兴趣的关键词
            interest_dockeyword_lis = []
            for cate in interest_cate_lis:
                # 选取感兴趣的关键词
                interest_dockeyword_lis += sample_interest(cate_to_dockeyword_dic[cate], interest_count_lis)
            interest_dockeyword_weight_lis = random_weight_and_sort_list(interest_dockeyword_lis, 0.6)
            sql_data = [str(user_id) + '_' + types, ','.join(interest_cate_weight_lis),
                        ','.join(interest_dockeyword_weight_lis)]
            sql = """ INSERT INTO user_portrait(portrait_types,interest_cate,interest_dockeyword) 
                      VALUES(%s,%s,%s) """
            writeDb(conn, cursor, sql, sql_data)
            redis_values = {
                'interest_cate': ','.join(interest_cate_weight_lis),
                'interest_dockeyword': ','.join(interest_dockeyword_weight_lis)
            }
            pipline.set(str(user_id) + '_' + types, json.dumps(redis_values, ensure_ascii=False))
    pipline.execute()


# 将关键词对应的倒排文章权重集合导入mysql与redis
def dockeyword_to_article(dockeyword_to_article_dic, conn, cursor):
    cnt = 0
    for dockeyword, articles in dockeyword_to_article_dic.items():
        cnt += 1
        sort_articles_lis = sorted(articles, key=lambda x: float(x.split('_')[1]), reverse=True)
        sql = """ INSERT INTO dockeyword_to_article(dockeyword,article) VALUES(%s,%s) """
        writeDb(conn, cursor, sql, [dockeyword, ','.join(sort_articles_lis[:10])])
        pipline.set('dockeyword_' + dockeyword, json.dumps(','.join(sort_articles_lis[:10]), ensure_ascii=False))
        if cnt % 10000 == 0:
            cnt %= 10000
            pipline.execute()
    pipline.execute()


# 将文本信息导入redis
def save_data_into_redis():
    with open('article_portrait_with_weight.txt', encoding='utf-8') as f:
        for line in f:
            line_list = line.strip().split('\t')
            doc_id = line_list[0]
            doccate = line_list[1]
            keyword_str = line_list[2]
            if len(line_list) > 2:
                value = {
                    'doccate': doccate,
                    'dockeyword': keyword_str
                }
                pipline.set(doc_id, json.dumps(value, ensure_ascii=False))

    pipline.execute()


create_user_portrait()