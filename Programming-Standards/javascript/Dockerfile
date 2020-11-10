FROM node:10-alpine

WORKDIR /eslint/

COPY . .

RUN npm install --registry=http://r.tnpm.oa.com --no-package-lock

RUN npm run build

RUN npm prune --production

# 上下两步拆开用 docker 缓存加快编译
# 这里将本项目依赖安装完成后将本项目 link 到 @tencent/eslint-config-tencent 名字上
# 然后因为 NODE_PATH 输出为当前目录的 node_modules (具体用法请参阅: https://blog.csdn.net/Ouchieve_111/article/details/70878090)
# 所以在当前项目中再 link 自己一次 (只是用了它建立软链的能力) 即可以在所有其他的 node 项目中 require 到 @tencent/eslint-config-tencent
# (无论对应项目有没有安装, 但会被对应项目自己安装的 @tencent/eslint-config-tencent 覆盖)
RUN npm link && \
    npm link @tencent/eslint-config-tencent && \
    npm install eslint -g --registry=http://r.tnpm.oa.com --no-package-lock && \
    echo "finish"

ENV NODE_PATH=/eslint/node_modules

ENTRYPOINT [ "/eslint/entrypoint" ]
