const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testenode',
  password: 'postgres',
  port: 5432,
})

pool.connect();


module.exports = {
  pool
}