const or = require('../repository/operationRepository');

const getOperationsByUser = (request, response) => {
    //const userID = parseInt(request.params.userId);
    const userID = 1;
    const offset = parseInt(request.query.offset);
    const limit = parseInt(request.query.limit);
    const search = request.query.search;
    try {
        or.getOperationsByUser(userID, offset, limit, search, (values) => {
            var operations = {
                data: values,
                count: 0,
            }
            or.countValues(userID, search, (countValues) => {
                operations.count = parseInt(countValues[0].count);
                response.status(200).json(operations);
            })
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

const createOperation = (request, response) => {
    const { locationId, description, date, value } = request.body;
    //const userID = parseInt(request.params.userId);
    const userId = 1;
    try {
        or.createOperation(userId, locationId, description, date, value, (values) => {
            response.status(201).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

const updateOperation = (request, response) => {
    const id = parseInt(request.params.id);
    const { locationId, description, date, value } = request.body;
    try {
        or.updateOperation(id, locationId, description, date, value, (values) => {
            response.status(200).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

const deleteOperation = (request, response) => {
    const id = parseInt(request.params.id);
    try {
        or.deleteOperation(id, (values) => {
            response.status(200).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

module.exports = {
    getOperationsByUser,
    createOperation,
    updateOperation,
    deleteOperation,
} 