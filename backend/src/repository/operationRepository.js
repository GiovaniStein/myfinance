const db = require('./database');

const getOperationsByUser = (userID, offset, limit, search, cb) => {
    var query = 'SELECT op.id, op.location_id, op.description, op.date, op.value, l.name FROM "operation" op INNER JOIN "location" l ON l.id = op.location_id WHERE op.user_id = $1 ORDER BY op.id ASC OFFSET $2 LIMIT $3';
    var params = [userID, offset, limit];
    if (!!search) {
        query = 'SELECT op.id, op.location_id, op.description, op.date, op.value, l.name FROM "operation" op INNER JOIN "location" l ON l.id = op.location_id WHERE op.user_id = $1 AND op.desciption LIKE $2 ORDER BY op.id ASC OFFSET $3 LIMIT $4';
        params = [userID, '%' + search + '%', offset, limit];
    }
    db.executeQuery(query, params, cb);
}

const countValues = (userID, search, cb) => {
    var query = 'SELECT count(*) FROM "operation" WHERE "user_id" = $1';
    var params = [userID];
    if (!!search) {
        query = 'SELECT count(*) FROM "operation" WHERE "user_id" = $1 AND "name" LIKE $2'
        params = [userID, '%' + search + '%'];
    }
    db.executeQuery(query, params, cb);
}

const createOperation = (userID, location_id, description, date, value, cb) => {
    var query = 'INSERT INTO "operation" ("user_id", "location_id", "description", "date", "value") VALUES ($1, $2, $3, $4, $5)';
    var params = [userID, location_id, description, date, value];
    db.executeQuery(query, params, cb);
}

const updateOperation = (id, location_id, description, date, value, cb) => {
    var query = 'UPDATE "operation" SET "location_id" = $1, "description" = $2, "date" = $3, "value" = $4 WHERE "id" = $5';
    var params = [location_id, description, date, value, id];
    db.executeQuery(query, params, cb);
}

const deleteOperation = (id, cb) => {
    var query = 'DELETE FROM "operation" WHERE "id" = $1';
    var params = [id];
    db.executeQuery(query, params, cb);
}

module.exports = {
    getOperationsByUser,
    countValues,
    createOperation,
    updateOperation,
    deleteOperation,
} 