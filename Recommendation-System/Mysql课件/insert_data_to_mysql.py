# -*- coding: UTF-8 -*-
import pymysql
import logging
logging.basicConfig(level=logging.INFO)

db_name = 'recommend_article_portrait'            # 数据库名
db_user = 'root'                                  # 用户名
db_pass = '123456'                                # 登录密码
db_ip = '39.97.120.102'                           # 服务器ip
db_port = 3308                                    # 端口


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


sql = """ INSERT INTO article_portrait(docid,doccate,dockeyword) VALUES(%s,%s,%s) """   # article_portrait为表名
conn, cursor = connectDb()
with open('article_portrait.txt', encoding='utf-8') as f:
    for line in f:
        lines = line.strip().split('\t')
        logging.info('插入数据： {} '.format(lines))
        writeDb(conn, cursor, sql, lines)
    closeDb(conn, cursor)