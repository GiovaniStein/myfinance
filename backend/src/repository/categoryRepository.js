const db = require('./database');

const getCategories = (userID, offset, limit, search, cb) => {
    var query = 'SELECT id, name, icon, enable FROM "category" WHERE "user_id" = $1 ORDER BY "id" ASC OFFSET $2 LIMIT $3';
    var params = [userID, offset, limit];
    if (!!search) {
        query = 'SELECT id, name, icon, enable FROM "category" WHERE "user_id" = $1 AND "name" LIKE $2 ORDER BY "id" ASC OFFSET $3 LIMIT $4';
        params = [userID, '%' + search + '%', offset, limit];
    }
    db.executeQuery(query, params, cb);
}

const getCategoriesCombo = (userID, cb) => {
    var query = 'SELECT id, name, icon FROM "category" WHERE "user_id" = $1 AND enable = True';
    var params = [userID];
    db.executeQuery(query, params, cb);
}

const countValues = (userID, search, cb) => {
    var query = 'SELECT count(*) FROM "category" WHERE "user_id" = $1';
    var params = [userID];
    if (!!search) {
        query = 'SELECT count(*) FROM "category" WHERE "user_id" = $1 AND "name" LIKE $2'
        params = [userID, '%' + search + '%'];
    }
    db.executeQuery(query, params, cb);
}

const createCategory = (name, icon, enable, userId, cb) => {
    var query = 'INSERT INTO "category" ("name", "icon", "enable", "user_id") VALUES ($1, $2, $3, $4)';
    var params = [name, icon, enable, userId];
    db.executeQuery(query, params, cb);
}

const updateCategory = (name, icon, enable, id, cb) => {
    var query = 'UPDATE "category" SET "name" = $1, "icon" = $2, "enable" = $3 WHERE "id" = $4';
    var params = [name, icon, enable, id];
    db.executeQuery(query, params, cb);
}

const deleteCategory = (id, cb) => {
    var query = 'DELETE FROM "category" WHERE "id" = $1';
    var params = [id]
    db.executeQuery(query, params, cb);
}


module.exports = {
    getCategories,
    countValues,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoriesCombo,
} 