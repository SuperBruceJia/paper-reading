# -*- coding: utf-8 -*-
import pymysql
import redis
import json

def createRedisConnection():
    host = '39.97.120.102'
    port = '6379'
    password = '000000'
    redis_obj = redis.Redis(host=host, port=port, password=password)
    return redis_obj


def createMysqlConnect():
    conn = pymysql.connect(
        host='39.97.120.102',
        user='root', password='123456',
        database='recommend_article_portrait',
        port=3308,
        charset='utf8'
    )
    cursor = conn.cursor()
    return cursor


if __name__ == '__main__':
    sql = '''select * from article_portrait'''
    cursor = createMysqlConnect()
    redis_obj = createRedisConnection()

    cursor.execute(sql)
    sql_res = cursor.fetchall()

    pipline = redis_obj.pipeline()
    cnt = 0

    for single_sql_res in sql_res:
        key = single_sql_res[1]  # 自己根据mysql的数据结构编造
        value = {
            'doccate': single_sql_res[2],
            'dockeyword': single_sql_res[3]
        }
        pipline.set(key, json.dumps(value, ensure_ascii=False))
        cnt += 1
        if cnt % 10000 == 0:
            cnt %= 10000  # 每积累一万条指令对redisserver进行一次请求
            pipline.execute()
    pipline.execute()
    redis_get = redis_obj.get('9999')
    redis_get = json.loads(redis_get, encoding='utf-8')
    print(redis_get)