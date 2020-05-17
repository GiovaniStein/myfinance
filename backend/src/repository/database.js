const Pool = require('pg').Pool
const Config = require('../config/config')
const pool = new Pool({
  user: Config.DB_USER,
  host: Config.DB_HOST,
  database: Config.DB_NAME,
  password: Config.DB_PASSWORD,
  port: Config.DB_PORT,
})


const executeQuery = (query, params, cb) => {
  console.info('[QUERY]: ', JSON.stringify(query));
  pool.query(query, params, (error, results) => {
    if (error) {
      throw error
    }
    cb(results.rows);
  })
};

module.exports = {
  executeQuery,
}