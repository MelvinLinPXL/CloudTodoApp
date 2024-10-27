FROM node:16-alpine AS build
WORKDIR /usr/src/app

ENV APIURL="http://34.222.136.233:80"

COPY . .

RUN echo "export const environment = {production: true, apiurl: '${APIURL}'};" > /usr/src/app/src/environments/environment.ts
RUN echo "export const environment = {production: true, apiurl: '${APIURL}'};" > /usr/src/app/src/environments/environment.prod.ts

RUN npm install
RUN npm run build --configuration=production

FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/frontend/ /usr/share/nginx/html
