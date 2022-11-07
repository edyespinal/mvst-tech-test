# Coffee and Tee List - MVST challenge Backend

## Installation

```bash
$ npm install
```

## Running the database with docker

```bash
# development
$ npm run start:dev:db

$ npm run start:dev
```

## Running the database configuring it by yourself.

If you don't want to use docker, you can configure this by yourself.
You need to have postgres installed and create a database with the following configuration:

```
host: 'localhost'
port: 5432
username: 'postgres'
password: '1234'
database: 'mvst-coffee-tea-challenge-db'
```

## Running the project

npm run start

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
