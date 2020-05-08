const { Router } = require('express');
const user = require('./dao/userQueries');
const category = require('./dao/categoryQueries')

const routes = Router();

//Query Params: request.query
//Route Params: request.params
//Body: request.body

routes.post('/users', user.createUser);

routes.post('/users/login', user.verifyLogin);

routes.put('/users/:id', user.updateUser);

routes.get('/category', category.getCategoriesByUser);

routes.get('/category/count', category.countCategories);

routes.post('/category', category.createCategory);

routes.delete('/category/:id', category.deleteCategory);

routes.put('/category/:id', category.updateCategory);


module.exports = routes;