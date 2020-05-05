const db = require('../dao/databaseConf');

const executeQuery = (query, params) => {
    db.pool.query(query, params, (error, results) => {
      if (error) {
        throw error
      }
      return results
    })
};

module.exports = {
    executeQuery,
}