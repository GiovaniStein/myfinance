const Pool = require('pg').Pool
const Config = require('../config/config')
const pool = new Pool({
  user: Config.DB_USER,
  host: Config.DB_HOST,
  database: Config.DB_NAME,
  password: Config.DB_PASSWORD,
  port: Config.DB_PORT,
})

pool.connect();

module.exports = {
  pool
}