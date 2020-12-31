# -*- coding: utf-8 -*-
import json
from util import *

host = '39.97.120.102'
port = '6379'
password = '000000'
redis_obj = redis.Redis(host=host, port=port, password=password)


def redis_get(name):
    item = redis_obj.get(name)
    return item


def read_from_redis(keys):
    try:
        redis_res = redis_get(keys)
        # user_portrait = zlib.decompress(user_portrait)
        # user_portrait = json.loads(user_portrait, encoding='utf-8')
        redis_res = json.loads(redis_res, encoding='utf-8')
        return redis_res
    except Exception as error:
        main_logger.error('读取redis数据错误：{} '.format(error))


def read_portrait_from_redis(user_id, portrait_type, user_portrait_dic):
    try:
        user_portrait = redis_get('{}_{}'.format(user_id, portrait_type))
        # user_portrait = zlib.decompress(user_portrait)
        # user_portrait = json.loads(user_portrait, encoding='utf-8')
        user_portrait_dic[portrait_type] = json.loads(user_portrait, encoding='utf-8')
        return user_portrait_dic
    except Exception as error:
        main_logger.error('读取redis数据错误：{} '.format(error))


def get_user_portrait(user_id):
    user_portrait_dic = {}
    read_portrait_from_redis(user_id, 'short', user_portrait_dic)
    read_portrait_from_redis(user_id, 'middle', user_portrait_dic)
    read_portrait_from_redis(user_id, 'long', user_portrait_dic)
    return user_portrait_dic