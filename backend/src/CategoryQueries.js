const db = require('../DBConfig');

const getCategoriesByUser = (request, response) => {
    const id = parseInt(request.params.userId)
    db.pool.query('SELECT * FROM adm_category WHERE category_id = $1 ORDER BY user_id ASC', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCategoryById = (request, response) => {
    const id = parseInt(request.params.id)
    db.pool.query('SELECT * FROM adm_category WHERE category_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCategory = (request, response) => {
    const { category_name, category_icon, category_enable } = request.body
    const userId = //
        db.pool.query('INSERT INTO adm_category (user_id, category_name, category_icon, category_enable) VALUES ($1, $2, $3, $4)', [userId, category_name, category_icon, category_enable], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`User added`);
        })
}

const updateCategory = (request, response) => {
    const id = parseInt(request.params.id)
    const { category_name, category_icon, category_enable } = request.body
    db.pool.query(
        'UPDATE adm_category SET category_name = $1, category_icon = $2, category_enable = $3 WHERE category_id = $3',
        [category_name, category_icon, category_enable, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteCategory = (request, response) => {
    const id = parseInt(request.params.id)
    db.pool.query('DELETE FROM adm_category WHERE category_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Category deleted with ID: ${id}`)
    })
}

module.exports = {
    getCategoriesByUser,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}