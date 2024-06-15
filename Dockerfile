FROM node:18.12-alpine
# USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY . .
# Sometimes node_modules folder is not created in the docker
# and the fetched modules dont get saved
RUN rm -rf node_modules && mkdir node_modules
RUN yarn install
CMD ["yarn", "start","--host=0.0.0.0","--port=8070"]

# CMD tail -f /dev/null
