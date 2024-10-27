# PXL 3 tier web application sample app
This repo contains 3 branches. The `main` branch has the app running on a mongoDB database. The branch `dynamo-db` uses AWS dynamoDB as a database. The branch `sequelize` has the app running on a MySQL database.

## frontend
Angular 12

## API url
The API url is defined in the file `/frontend/environments/environment.prod.ts`. This value gets set by the `APIURL` argument in the `docker-compose.yml` file. The multistage dockerfile uses this value before the build process.

## Backend
NodeJS + express + sequelize

there is a `/health` endpoint for a healthcheck

image carrousel urls are located in `/backend/data/carrousel.json`

### Database
MySQL with a database named `todo` present before launch.

Note: Sequelize also supports other DBMS such as mariaDB, postgres, mssql, sqlite. See: https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database

## Setup
* Make sure the DBMS has a `todo` database (or use the docker container. The `init.sql` file creates this database)
* make sure the `APIURL` property in `docker-compose.yml` is correctly set to point to your API.
* make sure the `DBURL`, `DBUSER`, `DBPASSWORD`, `DBDATABASE` and `DBPORT` variables in `docker-compose.yml` are correctly set to point to your MySQL instance.
* run `docker-compose build && docker-compose up` to boot
# CloudTodoApp
