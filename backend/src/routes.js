const { Router } = require('express');
const user = require('./UserQueries');

const routes = Router();

//Query Params: request.query
//Route Params: request.params
//Body: request.body

routes.get('/users', user.getUsers);

routes.post('/users', user.createUser);

routes.post('/users/login', user.verifyLogin);

routes.delete('/users/:id', user.deleteUser);

routes.put('/users/:id', user.updateUser);

module.exports = routes;