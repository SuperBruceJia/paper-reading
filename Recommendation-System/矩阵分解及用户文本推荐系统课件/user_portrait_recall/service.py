# -*- coding: utf-8 -*-
from gevent import monkey

monkey.patch_all()
from flask import Flask, Response
from flask_executor import Executor
from gevent.pywsgi import WSGIServer
import sys

sys.path.append("..")
from read_user_portrait import *
from recommend import recommend_user_interest

app = Flask(__name__)
app.config['EXECUTOR_TYPE'] = 'thread'  # 指定开启多线程服务
app.config['EXECUTOR_MAX_WORKERS'] = 20  # 多线程最大worker数
executor = Executor(app, name='custom')


@app.route('/user_portrait_recall', methods=['GET', 'POST'])  # 如果没有methods参数，默认只支持get,必须大写
def user_portrait_recall():
    user_info = load_config()
    try:
        if user_info:
            user_portrait_dic = get_user_portrait(user_info['user_id'])
            res = recommend_user_interest(user_portrait_dic)
            recommend_result = {'status': 1, 'data': res}
            return Response(json.dumps(recommend_result, ensure_ascii=False), mimetype='application/json')
        else:
            return Response(json.dumps({'status': 0, 'data': [], 'error': 'no uid'}), mimetype='application/json')
    except Exception as e:
        main_logger.error('程序错误 rec error: {} {}'.format(e, user_info['user_id']))
        return Response(json.dumps({'status': 0, 'data': [], 'error': str(e)}), mimetype='application/json')


http_server = WSGIServer(('0.0.0.0', 80), app, log=None)
http_server.serve_forever()
