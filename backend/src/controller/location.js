const lr = require('../repository/locationRepository');

const getLocationsByUser = (request, response) => {
    const userID = parseInt(request.params.userID);
    const offset = parseInt(request.query.offset);
    const limit = parseInt(request.query.limit);
    const search = request.query.search;
    try {
        lr.getLocationsByUser(userID, offset, limit, search, (values) => {
            var locations = {
                data: values,
                count: 0,
            }
            lr.countValues(userID, search, (countValues) => {
                locations.count = parseInt(countValues[0].count);
                response.status(200).json(locations);
            })
        });
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

const createLocation = (request, response) => {
    const { categoryId, name, lat, long, enable } = request.body;
    const userID = parseInt(request.params.userID);
    try {
        lr.createLocation(userID, categoryId, name, lat, long, enable, (values) => {
            response.status(201).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

const getLocationCombo = (request, response) => {
    const userID = parseInt(request.params.userID);
    try {
        lr.getLocationsCombo(userID, (values) => {
            response.status(200).send(values);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

const updateLocation = (request, response) => {
    const id = parseInt(request.params.id);
    const { categoryId, name, lat, long, enable } = request.body;
    try {
        lr.updateLocation(id, categoryId, name, lat, long, enable, (values) => {
            response.status(200).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

const deleteLocation = (request, response) => {
    const id = parseInt(request.params.id);
    try {
        lr.deleteLocation(id, (values) => {
            response.status(200).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }

}

module.exports = {
    getLocationsByUser,
    createLocation,
    updateLocation,
    deleteLocation,
    getLocationCombo,
} 