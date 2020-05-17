const db = require('./database');

const getLocationsByUser = (userID, offset, limit, search, cb) => {
    var query = 'SELECT l.id, l.name, l.lat, l.long, l.category_id, ca.name as category_name FROM "location" l INNER JOIN "category" ca ON l.category_id = ca.id WHERE l.user_id = $1 ORDER BY l.id ASC OFFSET $2 LIMIT $3';
    var params = [userID, offset, limit];
    if (!!search) {
        query = 'SELECT l.id, l.name, l.lat, l.long, l.category_id, ca.name as category_name FROM "location" l INNER JOIN "category" ca ON l.category_id = ca.id WHERE l.user_id = $1 AND l.name LIKE $2 ORDER BY l.id ASC OFFSET $3 LIMIT $4';
        params = [userID, '%' + search + '%', offset, limit];
    }
    db.executeQuery(query, params, cb);
}

const countValues = (userID, search, cb) => {
    var query = 'SELECT count(*) FROM "location" WHERE "user_id" = $1';
    var params = [userID];
    if (!!search) {
        query = 'SELECT count(*) FROM "location" WHERE "user_id" = $1 AND "name" LIKE $2'
        params = [userID, '%' + search + '%'];
    }
    db.executeQuery(query, params, cb);
}

const createLocation = (userID, categoryId, name, lat, long, cb) => {
    var query = 'INSERT INTO "location" ("user_id", "category_id", "name", "lat", "long") VALUES ($1, $2, $3, $4, $5)';
    var params = [userID, categoryId, name, lat, long];
    db.executeQuery(query, params, cb);
}

const updateLocation = (id, categoryId, name, lat, long, cb) => {
    var query = 'UPDATE "location" SET "categoryId" = $1, "name" = $2, "lat" = $3, "long" = $4 WHERE "id" = $5';
    var params = [categoryId, name, lat, long, id];
    db.executeQuery(query, params, cb);
}

const deleteLocation = (id, cb) => {
    var query = 'DELETE FROM "location" WHERE "id" = $1';
    var params = [id]
    db.executeQuery(query, params, cb);
}

module.exports = {
    getLocationsByUser,
    countValues,
    createLocation,
    updateLocation,
    deleteLocation,
} 