const express = require('express');
const routes = require('./routes');
const DBMigrate = require('db-migrate');
const Config = require('./config/config');
const cookieParser = require('cookie-parser')
const app = express();

var dbConfig = {
  dev: {
    user: Config.DB_USER,
    host: Config.HOST,
    database: Config.DB_NAME,
    password: Config.DB_PASSWORD,
    port: Config.DB_PORT,
    driver: 'pg'
  }
};

var dbMyFinance = DBMigrate.getInstance(true, { env: 'dev', config: dbConfig });

app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(routes);

dbMyFinance.up().then(function () {
  app.listen(Config.PORT);
});

