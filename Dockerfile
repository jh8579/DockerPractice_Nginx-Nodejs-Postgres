# Dockerfile
FROM node
MAINTAINER ho1234c 

RUN mkdir /app
ADD . /app
WORKDIR /app

COPY package*.json ./
RUN npm install

CMD ["npm", "start"]