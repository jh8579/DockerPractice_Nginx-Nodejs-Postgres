# Dockerfile
FROM node
MAINTAINER ho1234c 

RUN mkdir /app
ADD . /app
WORKDIR /app

CMD ["node", "index.js"]