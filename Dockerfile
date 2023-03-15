FROM node:16
RUN mkdir -p /home/myblog
WORKDIR /home/myblog
COPY . /home/myblog
# 执行npm环境安装

RUN export PUPPETEER_SKIP_DOWNLOAD=true && npm config set registry https://registry.npm.taobao.org && npm install  && npm run build
# 与run.sh 同步，使用9526端口
EXPOSE 9526
## 将容器内的端口导出给主机，便于访问，保持与服务启动端口及app.js中的端口一致

# CMD npm install -g pnpm && pnpm install && npm run serve
# CMD npm run serve
# CMD ["npm run serve"]
CMD ["/bin/sh", "run.sh"]
## 如果想运行多条指令可以这样：
## CMD git pull && npm install && npm start