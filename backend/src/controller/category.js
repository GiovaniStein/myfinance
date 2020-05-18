const cr = require('../repository/categoryRepository');

const getCategoriesByUser = (request, response) => {
    //const userID = parseInt(request.params.userId);
    const userID = 1;
    const offset = parseInt(request.query.offset);
    const limit = parseInt(request.query.limit);
    const search = request.query.search;
    try {
        cr.getCategories(userID, offset, limit, search, (values) => {
            var categories = {
                data: values,
                count: 0,
            }
            cr.countValues(userID, search, (countValues) => {
                categories.count = parseInt(countValues[0].count);
                response.status(200).json(categories);
            })
        });
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

const createCategory = (request, response) => {
    const { name, icon, enable } = request.body;
    //const userID = parseInt(request.params.userId);
    const userId = 1;
    try {
        cr.createCategory(name, icon, enable, userId, (values) => {
            response.status(201).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }

}

const updateCategory = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, icon, enable } = request.body;
    try {
        cr.updateCategory(name, icon, enable, id, (values) => {
            response.status(200).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

const deleteCategory = (request, response) => {
    const id = parseInt(request.params.id);
    try {
        cr.deleteCategory(id, (values) => {
            response.status(200).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }

}

const getCategoryCombo = (request, response) => {
    //const userID = parseInt(request.params.userId);
    const userId = 1;
    try {
        cr.getCategoriesCombo(userId, (values) => {
            response.status(200).send(values);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

module.exports = {
    getCategoriesByUser,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryCombo,
} 