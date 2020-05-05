const exec = require('./genericDAO');

const getCategoriesByUser = (params) => {
    let query = 'SELECT * FROM adm_category WHERE category_id = $1 ORDER BY user_id ASC';
    return exec.executeQuery(query, params)
}

const getCategoryById = (params) => {
    let query = 'SELECT * FROM adm_category WHERE category_id = $1';
    return exec.executeQuery(query, params)
}

const createCategory = (params) => {
    let query = 'INSERT INTO adm_category (user_id, category_name, category_icon, category_enable) VALUES ($1, $2, $3, $4)';
    return exec.executeQuery(query, params)
}

const updateCategory = (params) => {
    let query = 'UPDATE adm_category SET category_name = $1, category_icon = $2, category_enable = $3 WHERE category_id = $3';
    return exec.executeQuery(query, params)
}

const deleteCategory = (params) => {
    let query = 'DELETE FROM adm_category WHERE category_id = $1';
    return exec.executeQuery(query, params)
}

module.exports = {
    getCategoriesByUser,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
}