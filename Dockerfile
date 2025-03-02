FROM node:20.18

WORKDIR /src/app
COPY package*.json ./

RUN yarn

COPY . .
CMD ["sh", "-c", "yarn db:deploy && yarn db:add_content && yarn dev"]
