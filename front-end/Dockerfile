FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /vue3-node-app

COPY ./vue-app/package*.json .

RUN npm i

COPY ./vue-app/ .

# RUN npm run dev -- --port 8080

EXPOSE 8080

CMD [ "npm", "run", "dev", "--", "--port", "8080" ]