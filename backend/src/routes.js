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

//Public Api
routes.post('/users', user.createUser);

routes.post('/users/login', user.verifyLogin);

routes.get('/auth', auth.verifyAuth);


//Private Api
routes.get('/category', auth.verifyToken, category.getCategoriesByUser);

routes.post('/category', auth.verifyToken, category.createCategory);

routes.delete('/category/:id', auth.verifyToken, category.deleteCategory);

routes.put('/category/:id', auth.verifyToken, category.updateCategory);

routes.get('/category/list', auth.verifyToken, category.getCategoryCombo);

routes.get('/location', auth.verifyToken, location.getLocationsByUser);

routes.post('/location', auth.verifyToken, location.createLocation);

routes.delete('/location/:id', auth.verifyToken, location.deleteLocation);

routes.put('/location/:id', auth.verifyToken, location.updateLocation);

routes.get('/location/list', auth.verifyToken, location.getLocationCombo);

routes.get('/operation', auth.verifyToken, operation.getOperationsByUser);

routes.post('/operation', auth.verifyToken, operation.createOperation);

routes.delete('/operation/:id', auth.verifyToken, operation.deleteOperation);

routes.put('/operation/:id', auth.verifyToken, operation.updateOperation);

/* routes.put('/users/:id', user.updateUser); */

module.exports = routes;