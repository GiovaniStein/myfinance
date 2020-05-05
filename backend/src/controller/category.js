const categoryDAO = require('../dao/categoryDAO');

const getCategoriesByUser = (request, response) => {
    const id = parseInt(request.params.userId);
    try {
        let results = categoryDAO.getCategoriesByUser([id]);
        if (!!results) {
            response.status(200).json(results.rows);
        }
    } catch (error) {
        throw new Error(error);
    }
}

const createCategory = (request, response) => {
    const { category_name, category_icon, category_enable } = request.body;
    try {
        categoryDAO.createCategory([category_name, category_icon, category_enable]);
        response.status(201).send(`Category added`);
    } catch (error) {
        throw new Error(error);
    }
}

const updateCategory = (request, response) => {
    const id = parseInt(request.params.id);
    const { category_name, category_icon, category_enable } = request.body;
    try {
        categoryDAO.updateCategory([category_name, category_icon, category_enable, id]);
        response.status(200).send(`Category modified with ID: ${id}`);
    } catch (error) {
        throw new Error(error);
    }
}

const deleteCategory = (request, response) => {
    const id = parseInt(request.params.id);
    try {
        categoryDAO.deleteCategory([id]);
        response.status(200).send(`Category modified with ID: ${id}`);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getCategoriesByUser,
    createCategory,
    updateCategory,
    deleteCategory
}