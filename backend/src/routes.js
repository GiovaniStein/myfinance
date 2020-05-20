const { Router } = require('express');
const user = require('./controller/user');
const category = require('./controller/category');
const location = require('./controller/location');
const operation = require('./controller/operation');
const auth = require('./auth/auth');

const routes = Router();

//Query Params: request.query
//Route Params: request.params
//Body: request.body

routes.post('/users', user.createUser);

routes.post('/users/login', user.verifyLogin);

routes.put('/users/:id', user.updateUser);

routes.get('/category', auth.verifyToken, category.getCategoriesByUser);

routes.post('/category', category.createCategory);

routes.delete('/category/:id', category.deleteCategory);

routes.put('/category/:id', category.updateCategory);

routes.get('/category/list', category.getCategoryCombo);

routes.get('/location', location.getLocationsByUser);

routes.post('/location', location.createLocation);

routes.delete('/location/:id', location.deleteLocation);

routes.put('/location/:id', location.updateLocation);

routes.get('/location/list', location.getLocationCombo);

routes.get('/operation', operation.getOperationsByUser);

routes.post('/operation', operation.createOperation);

routes.delete('/operation/:id', operation.deleteOperation);

routes.put('/operation/:id', operation.updateOperation);


module.exports = routes;