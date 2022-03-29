FROM node:latest

RUN apt-get update
RUN apt-get upgrade -y

WORKDIR /frontend

RUN npm install

# nginx서버 실행 명령어 exec 방식 명령어
# 명령어 인수 지정
# docker container run 명령 실행 시에 덮어 쓸 수 있다.
CMD ["nginx", "-g", "daemon off;"]