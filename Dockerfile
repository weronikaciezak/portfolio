FROM node:latest

WORKDIR /portfolio

COPY package.json package-lock.json* /portfolio/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev","--","--host"]