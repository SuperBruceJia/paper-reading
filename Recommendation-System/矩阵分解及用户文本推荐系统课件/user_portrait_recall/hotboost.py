# -*- coding: utf-8 -*-
import numpy as np


def sigmoid(x):
    return 1 / (1 + np.exp(-x))


def calc_hotboost_grade(pv, ev, alpha, beta, shareNum, commentNum, storeNum, upvoteNum, durationScore, readRateScore):
    """
    :param pv:                  文章点击量
    :param ev:                  文章曝光量
    :param alpha:               ctr平滑超参
    :param beta:                ctr平滑超参
    :param ctrScore:            ctr得分(威尔逊置信CTR等)
    :param actScore:            文章行为得分,分享，评论，收藏，点赞
    :param readScore:           文章阅读时长得分,平均阅读时长
    :param negativeScore:       文章负反馈得分,负面评论
    :return:
    
    # 补充：CTR，用户的行为(评论，收藏，分享，评论，点赞)，时间衰减，文章阅读时长，负反馈
    """
    ctrScore = (pv + alpha) / (ev + alpha + beta)
    actScore = np.log(1 + (pv + shareNum + commentNum + storeNum + upvoteNum))
    readScore = (durationScore + readRateScore) / 2
    negativeScore = 0
    totalScore = ctrScore + actScore + readScore + negativeScore
    newhotboost = sigmoid(totalScore)
    return newhotboost


