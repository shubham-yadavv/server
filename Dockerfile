FROM node:lts-alpine

WORKDIR /app

COPY package.json /app/package.json

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . /app

ENV PORT 3000

EXPOSE $PORT

CMD ["npm", "start"]


