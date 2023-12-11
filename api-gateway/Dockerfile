FROM node:16

WORKDIR /var/www/Api/Service_1

COPY package.json .
RUN npm i

COPY dist/api-gateway .

CMD npm run start-prod-gateway