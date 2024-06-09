FROM node:18.0-alpine
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY . .
RUN yarn install
CMD ["yarn", "start","--host=0.0.0.0","--port=8070"]
