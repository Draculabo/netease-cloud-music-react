# 拉取node:14作为构建工具
FROM node:lts-alpine as builder
RUN mkdir -p /app
# 工作目录为 app
WORKDIR /app
# 将以package结尾的json文件拷贝
COPY package*.json ./
# 执行 安装依赖
RUN pnpm install
COPY . .
# 将 ts配置文件拷贝过去
COPY tsconfig.json ./
# # 将public目录拷贝过去
# COPY public public/
# # 将src目录拷贝过去
# COPY src src/
# 执行构建脚本
RUN pnpm run build

# 拉取nginx
FROM nginx:alpine
# 将构建好的文件夹拷贝到nginx中
COPY --from=builder /app/build/ /usr/share/nginx/html

# 暴露端口9567
EXPOSE 9567
# 运行nginx
CMD ["nginx", "-g", "daemon off;"]