const db = require('./database');

const verifyLogin = (login, password, cb) => {
    var query = 'SELECT * FROM "user" WHERE "email" = $1 and "password" = $2';
    var params = [login, password];
    db.executeQuery(query, params, cb);
}

const createUser = (name, email, password, cb) => {
    var query = 'INSERT INTO "user" ("name", "email", "password") VALUES ($1, $2, $3)';
    var params = [name, email, password, cb];
    db.executeQuery(query, params, cb);
}

const updateUser = (name, email, password, id, cb) => {
    var query = 'UPDATE "user" SET "name" = $1, "email" = $2, "password" = $3 WHERE "id" = $4';
    var params = [name, email, password, id];
    db.executeQuery(query, params, cb);
}

module.exports = {
    createUser,
    updateUser,
    verifyLogin,
} 