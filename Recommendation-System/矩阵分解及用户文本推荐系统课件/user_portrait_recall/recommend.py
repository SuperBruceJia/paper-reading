# -*- coding: utf-8 -*-
from read_user_portrait import *

short_cate_recall_count = 2  # 短期画像召回数量
middle_cate_recall_count = 1  # 中期画像召回数量
long_cate_recall_count = 1  # 长期画像召回数量
short_dcokeyword_recall_count = 3  # 短期关键词召回数量
middle_dcokeyword_recall_count = 2  # 中期关键词召回数量
long_dcokeyword_recall_count = 1  # 长期关键词召回数量


def recommend_user_interest(user_portrait_dic):
    res = []
    print('user_portrait_dic ', user_portrait_dic)
    for portrait_type, profile_data in user_portrait_dic.items():
        if portrait_type == 'short':
            res += extract_user_interest(profile_data, 'interest_cate', short_cate_recall_count)
            res += extract_user_interest(profile_data, 'interest_dockeyword', short_dcokeyword_recall_count)
        elif portrait_type == 'middle':
            res += extract_user_interest(profile_data, 'interest_cate', middle_cate_recall_count)
            res += extract_user_interest(profile_data, 'interest_dockeyword', middle_dcokeyword_recall_count)
        elif portrait_type == 'long':
            res += extract_user_interest(profile_data, 'interest_cate', long_cate_recall_count)
            res += extract_user_interest(profile_data, 'interest_dockeyword', long_dcokeyword_recall_count)
    return res


def extract_user_interest(profile_data, bucket_type, recall_count):
    tag_list = [cate.split('_')[0] for cate in profile_data[bucket_type].split(',')][:recall_count]
    interest_res = []
    for tag in tag_list:
        # 根据选取的tag，到redis取对应的tag下的文章倒排结果
        redis_res = read_from_redis(tag)
        # 返回文章id列表
        redis_res = [res.split('_')[0] for res in redis_res.split(',')][0]
        interest_res.append(redis_res)
    return interest_res
