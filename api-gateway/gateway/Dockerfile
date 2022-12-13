FROM node:16

WORKDIR /var/www/Api/Service_1

COPY . .

COPY ../../package.json /var/www/Api/Service_1/

RUN npm i

RUN npx tsc

CMD npm run start-prod-gateway