FROM node:12.16.1

COPY ./package* ./

RUN npm ci

COPY . .

ENV NODE_ENV=production

RUN npm run build

EXPOSE 3000

ENV APP_ENV=production

CMD ["node", "./dist/interfaces/http/server.js"]
