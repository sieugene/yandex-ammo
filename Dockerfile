
FROM node:16.15.1-alpine3.16 as builder   

WORKDIR /var

COPY package.json yarn.lock ./ 

RUN yarn    

COPY . .
RUN yarn ammo

FROM direvius/yandex-tank:latest

WORKDIR /var/loadtest

COPY --from=builder /var/loadtest /var/loadtest







