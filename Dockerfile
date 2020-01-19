FROM node:lts-alpine

LABEL maintainer="Flavien PERIER <perier@flavien.cc>"
LABEL version="1.0"
LABEL description="Flavien website"

WORKDIR /app
COPY . .

RUN apk add python2 make gcc g++

RUN rm -Rf node_modules
RUN npm install
RUN npm run build
RUN npm run clean-css
RUN rm -Rf node_modules
RUN npm install --production

RUN apk del python2 make gcc g++

EXPOSE 80

CMD npm start
