# 이미지 : 태그 생략시 latest
FROM node

# RUN : 쉘에서 사용하는 커맨드
RUN apt-get update
RUN apt-get upgrade -y

# WORKDIR : cd처럼 디랙토리 이동시 사용
WORKDIR /backend

RUN npm install

# ENTRYPOINT : 실행하고자 하는 명령어 자체 지정
# shell 방식 명령어
ENTRYPOINT npm run start