const { Router } = require('express');
const user = require('./UserQueries');
const category = require('./CategoryQueries')

const routes = Router();

//Query Params: request.query
//Route Params: request.params
//Body: request.body

routes.get('/users', user.getUsers);

routes.post('/users', user.createUser);

routes.post('/users/login', user.verifyLogin);

routes.delete('/users/:id', user.deleteUser);

routes.put('/users/:id', user.updateUser);

routes.get('/category', category.getCategoriesByUser);

routes.post('/category', category.createCategory);

routes.delete('/category/:id', category.deleteCategory);

routes.put('/category/:id', category.updateCategory);


module.exports = routes;