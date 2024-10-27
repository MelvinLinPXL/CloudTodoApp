FROM node:16
WORKDIR /usr/src/app

COPY . .
RUN npm install

#ENV DBURL="database-1.chrpjpfiez1r.us-east-1.rds.amazonaws.com" hier moet de databaseurl staan
ENV PORT=8090

EXPOSE 8090

CMD ["npm","start"]
