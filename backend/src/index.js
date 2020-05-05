const express = require('express');
const app = express();
const routes = require('./routes');
const DBMigrate = require('db-migrate');
const Config = require('./config/config');


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
var dbStartConfig = dbConfig;
dbStartConfig.dev.database = Config.DB_START_NAME;
var dbStart = DBMigrate.getInstance(true, { env: 'dev', config: dbStartConfig });


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());
app.use(routes);


dbStart.createDatabase("myfinance")
.then(function() {
  console.log('foi 1');
  dbMyFinance.up().then(function() {
    app.listen(Config.PORT);
  });
})
.catch(function(e) {
  dbMyFinance.up().then(function() {
    console.log('foi 2');
    app.listen(Config.PORT);
  });
});


