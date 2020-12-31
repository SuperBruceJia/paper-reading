# -*- coding: utf-8 -*-
import logging
import os
import pymysql
import redis
from flask import request
import re
from logging.handlers import TimedRotatingFileHandler

portrait_type_lis = ['short', 'middle', 'long']


db_name = 'user_portrait_recall'            # 数据库名
db_user = 'root'                                  # 用户名
db_pass = '123456'                                # 登录密码
db_ip = '39.97.120.102'                           # 服务器ip
db_port = 3308                                    # 端口
host = '39.97.120.102'
port = '6379'
password = '000000'
redis_obj = redis.Redis(host=host, port=port, password=password)
pipline = redis_obj.pipeline()


def connectDb():
    try:
        conn = pymysql.connect(database=db_name, user=db_user, password=db_pass, host=db_ip, port=int(db_port),
                               charset="utf8")
        cursor = conn.cursor()
        return conn, cursor
    except Exception as e:
        print(e)
        logging.error('数据库连接失败: {} '.format(e))


# 写入数据到数据库中
def writeDb(conn, cursor, sql, db_data=()):
    try:
        cursor.execute(sql, db_data)
        conn.commit()
    except Exception as e:
        conn.rollback()
        logging.error('数据写入失败: {} '.format(e))
        return False


def closeDb(conn, cursor):
    cursor.close()
    conn.close()


class Logger(object):
    def __init__(self, file_name, rec_type, log_dir='../main'):
        self.fmt = rec_type + ' %(asctime)s %(levelname)s: %(message)s'
        self.logger = logging.getLogger(file_name)
        format_str = logging.Formatter(self.fmt)  # 设置日志格式
        self.logger.setLevel(level=logging.INFO)  # 设置日志级别
        stream_handler = logging.StreamHandler()  # 往屏幕上输出
        stream_handler.setFormatter(format_str)

        file_name = os.fspath(file_name)
        if not os.path.exists(log_dir):
            os.mkdir(log_dir)
        self.baseFilename = os.path.join(log_dir, file_name)
        self.log_file_handler = TimedRotatingFileHandler(
            filename=self.baseFilename,
            when="D",
            interval=1,
            backupCount=7,
            encoding='utf-8'
        )
        self.log_file_handler.suffix = "%Y_%m_%d-%H_%M.log"
        self.log_file_handler.extMatch = re.compile(r"^\d{4}_\d{2}_\d{2}-\d{2}_\d{2}.log$")
        self.log_file_handler.setFormatter(format_str)
        self.logger.addHandler(stream_handler)
        self.logger.addHandler(self.log_file_handler)
        # file_handler = PathFileHandler(path=log_dir, filename=file_name, mode='a')
        # file_handler.setFormatter(format_str)
        # self.logger.addHandler(file_handler)

    def log(self, message):
        self.logger.info(message)

    def error(self, message):
        self.logger.error(message, exc_info=True)


main_logger = Logger('main.log', 'recall', './log_file')


def load_config():
    data = request.form if request.method == 'POST' else request.args
    uid = data.get('uid')
    if uid:
        return {'user_id': uid}
    else:
        main_logger.error('未获取到用户id ')
        return {}
