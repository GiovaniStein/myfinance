const db = require('./dataBaseConf');

const getCategoriesByUser = (request, response) => {
    //const userID = parseInt(request.params.userId);
    const userID = 1;
    const offset = parseInt(request.query.offset);
    const limit = parseInt(request.query.limit);
    const search = request.query.search;
    var query = 'SELECT id, name, icon, enable FROM "category" WHERE "user_id" = $1 ORDER BY "id" ASC OFFSET $2 LIMIT $3';
    var params = [userID, offset, limit];
    if (!!search) {
        query = 'SELECT id, name, icon, enable FROM "category" WHERE "user_id" = $1 AND "name" LIKE $2 ORDER BY "id" ASC OFFSET $3 LIMIT $4';
        params = [userID, '%' + search + '%', offset, limit];
    }
    db.pool.query(query, params, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const countCategories = (request, response) => {
    //const userID = parseInt(request.params.userId);
    const userID = 1;
    const search = request.query.search;
    var query = 'SELECT count(*) FROM "category" WHERE "user_id" = $1';
    var params = [userID];
    if (!!search) {
        query = 'SELECT count(*) FROM "category" WHERE "user_id" = $1 AND "name" LIKE $2'
        params = [userID, '%' + search + '%'];
    }
    db.pool.query(query, params, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCategoryById = (request, response) => {
    const id = parseInt(request.params.id)
    db.pool.query('SELECT * FROM "category" WHERE "id" = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCategory = (request, response) => {
    const { name, icon, enable } = request.body;
    //const userID = parseInt(request.params.userId);
    const userId = 1;
    db.pool.query('INSERT INTO "category" ("name", "icon", "enable", "user_id") VALUES ($1, $2, $3, $4)', [name, icon, enable, userId], (error, results) => {
        if (error) {
            response.status(500).send(false);
            throw error
        }
        response.status(201).send(true);
    })
}

const updateCategory = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, icon, enable } = request.body;
    db.pool.query('UPDATE "category" SET "name" = $1, "icon" = $2, "enable" = $3 WHERE "id" = $4', [name, icon, enable, id], (error, results) => {
            if (error) {
                response.status(500).send(false);
                throw error
            }
            response.status(200).send(true);
        }
    )
}

const deleteCategory = (request, response) => {
    const id = parseInt(request.params.id)
    db.pool.query('DELETE FROM "category" WHERE "id" = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Category deleted with ID: ${id}`)
    })
}

module.exports = {
    getCategoriesByUser,
    countCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} 