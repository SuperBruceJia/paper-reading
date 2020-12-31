import time
import jieba
import jieba.analyse
import jieba.posseg as pseg
import numpy as np

# jieba.load_userdict('词表.txt')
stop_word = [word.strip() for word in open('stopwords.txt', 'r', encoding='utf8').readlines()]
# dict_vec_res = {line.strip().split('\t')[0]: line.strip().split('\t')[1].split(' ') for line in
#        open('word.txt', 'r', encoding='utf8').readlines()}


def cos_similarity(vec1, vec2):
    mod1 = np.sqrt(np.sum(np.square(vec1)))
    mod2 = np.sqrt(np.sum(np.square(vec2)))
    return (np.dot(vec1, vec2)) / (mod1 * mod2)


class TextRank(object):

    def __init__(self, title, sentence, window, alpha, iternum):
        self.sentence = sentence
        self.window = window
        self.alpha = alpha
        self.edge_dict = {}  # 记录节点的边连接字典
        self.iternum = iternum  # 迭代次数
        self.title = title  # 迭代次数

    def titles(self):
        own_list = list(jieba.cut(self.title))
        own_list = [word for word in own_list if word not in stop_word]
        res = [word for word in own_list if len(word) > 1 and word in self.sentence]
        ress = list(set(res))
        ress.sort(key=res.index)
        lis_1 = {}
        self.lis_2 = []
        for word1 in ress:
            for word2 in ress:
                if word1 in word2:
                    lis_1[len(word2)] = word2
            zz = lis_1[max(lis_1)]
            if zz not in self.lis_2:
                self.lis_2.append(zz)
            lis_1 = {}

    # 对句子进行分词
    def cutSentence(self):
        time1 = time.time()
        tag_filter = ['nr', 'ns', 'n', 'nt', 'v', 'x']
        seg_result = pseg.cut(self.sentence)
        self.word_list = [s.word for s in seg_result if
                          s.flag in tag_filter and s.word not in stop_word and len(s.word) > 1]
        time2 = time.time()
        # print('textrank词汇+词性',self.word_list1)

    # 根据窗口，构建每个节点的相邻节点,返回边的集合
    def createNodes(self):
        tmp_list = []
        word_list_len = len(self.word_list)
        for index, word in enumerate(self.word_list):
            if word not in self.edge_dict.keys():
                tmp_list.append(word)
                tmp_set = set()
                left = index - self.window + 1  # 窗口左边界
                right = index + self.window  # 窗口右边界
                if left < 0:
                    left = 0
                if right >= word_list_len:
                    right = word_list_len
                for i in range(left, right):
                    if i == index:
                        continue
                    tmp_set.add(self.word_list[i])
                self.edge_dict[word] = tmp_set

    # 根据边的相连关系，构建矩阵
    def createMatrix(self):
        keys_list = self.edge_dict.keys()
        self.matrix = np.zeros([len(set(self.word_list)), len(set(self.word_list))])
        self.word_index = {}  # 记录词的index
        self.index_dict = {}  # 记录节点index对应的词
        for i, v in enumerate(set(self.word_list)):
            self.word_index[v] = i
            self.index_dict[i] = v
        for key in keys_list:
            for w in self.edge_dict[key]:
                # 按照词读取词向量计算计算边的权重替代初始值1
                # if key in dict_vec_res:
                #     word_vec_str1 = dict_vec_res[key]
                # else:
                #     word_vec_str1 = ''
                # if w in dict_vec_res:
                #     word_vec_str2 = dict_vec_res[w]
                # else:
                #     word_vec_str2 = ''
                # if word_vec_str1 and word_vec_str2:
                #     word_vec_str1 = [float(i) for i in word_vec_str1]
                #     word_vec_str2 = [float(i) for i in word_vec_str2]
                #     res = cos_similarity(word_vec_str1, word_vec_str2)
                #     self.matrix[self.word_index[key]][self.word_index[w]] = res
                #     self.matrix[self.word_index[w]][self.word_index[key]] = res
                # else:
                self.matrix[self.word_index[key]][self.word_index[w]] = 1
                self.matrix[self.word_index[w]][self.word_index[key]] = 1
        # 归一化
        for j in range(self.matrix.shape[1]):
            sum = 0
            for i in range(self.matrix.shape[0]):
                sum += self.matrix[i][j]
            for i in range(self.matrix.shape[0]):
                self.matrix[i][j] /= sum

    # 根据textrank公式计算权重
    def calPR(self):
        self.PR = np.ones([len(set(self.word_list)), 1])
        for i in range(self.iternum):
            self.PR = (1 - self.alpha) + self.alpha * np.dot(self.matrix, self.PR)

    # 输出词和相应的权重
    def printResult(self):
        word_pr = {}
        for i in range(len(self.PR)):
            word_pr[self.index_dict[i]] = self.PR[i][0]
        sort_keyword = sorted(word_pr.items(), key=lambda x: float(x[1]), reverse=True)[:10]
        print('权重排序结果前十 ', sort_keyword)
        res = [word[0] for word in sort_keyword]
        print('关键词排序前十 ', res)
        return res


if __name__ == '__main__':
    title = '大白天的就想睡觉，通常是4个原因害的！很多人属于第一个'
    s = '在生活中，睡眠是很常见的事情。睡觉是我们每天都要经历的事情，但是很多人即使睡了觉，也会经常出现困倦的情况。' \
        '夜晚睡觉是正常现象，如果白天也是睡，对于身体是有一定程度危害的。那么，白天嗜睡是哪些原因造成的？' \
        '1、夜间睡眠时间短，睡眠质量差导致的嗜睡很多年轻人都是典型的夜猫子，经常玩手机电脑到半夜或夜生活比较丰富，' \
        '但是第二天早上还必须早起去上班，这样就容易导致他们睡眠的时间不足7个小时，有的年轻人甚至睡眠时间还不到5个小时，' \
        '严重的睡眠不足，导致第二天自然是昏昏欲睡。还有一部分年轻人睡眠质量非常的差，这也会导致第二天早上起床以后，' \
        '会感到身心疲惫，部分人还会出现头晕目眩的症状，如果不注重调整，很容易导致神经衰弱的现象出现。2、营养缺乏导致的' \
        '嗜睡长期营养不良或者是挑食，也容易导致嗜睡或者困倦的情况出现。这个时候，一定要在平时的饮食当中注意调整，多摄入' \
        '一些蛋白质含量比较丰富的食物，这样可以很好的缓解嗜睡情况进一步恶化。3、发作性睡病导致嗜睡发作性嗜睡，一般在青' \
        '春期以后比较频繁出现，患者白天会昏昏欲睡，无论何时、何地、何场合，任何时候都可能是昏昏欲睡，这种嗜睡症也要引' \
        '起重视，必要时寻求专科医生的建议与指导。4、抑郁症导致的嗜睡有抑郁症情况的朋友，也容易出现嗜睡或者睡不醒的情况，' \
        '大部分郁症患者都看上去非常的没有精神，容易疲惫。其次，随着年龄的增长，老年人也会变得昏昏欲睡，这与年龄、身体、' \
        '药物等因素有很大关系。除此之外体重超标的人群，也容易出现嗜睡的症状。那么，白天嗜睡怎么办？如果要是出现嗜睡的' \
        '情况，就一定要严格控制好自己的作息时间。养成良好的作息习惯是非常关键的，年轻人千万不要经常熬夜，通宵打游戏，' \
        '早睡早起才能缓解嗜睡的情况。其次，想要摆脱嗜睡的情况，还应该多参加一些户外运动。尤其是那些经常坐在电脑前的白' \
        '领一族，做一些运动，可以有效地改善他们的生理功能，加快体内循环，缓解困倦。例如，早上散步、做运动、慢跑都有助' \
        '于使自己恢复精神。'
    tr = TextRank(title, s, 3, 0.85, 1000)
    tr.titles()
    tr.cutSentence()
    tr.createNodes()
    tr.createMatrix()
    tr.calPR()
    res = tr.printResult()
