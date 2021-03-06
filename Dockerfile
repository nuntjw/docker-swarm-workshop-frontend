FROM node:alpine

COPY . /usr/src/app/

ARG APP_ENV

EXPOSE 3000

WORKDIR /usr/src/app/

RUN yarn install --production=true -q && \
    yarn run build

CMD ["yarn", "run", "start"]