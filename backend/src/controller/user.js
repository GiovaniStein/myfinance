const ur = require('../repository/userRepository');
const auth = require('../auth/auth');

const verifyLogin = (request, response) => {
    const { email, password } = request.body
    try {
        ur.verifyLogin(email, password, (values) => {
            if(!!values) {
                auth.generateToken(response, values[0].id);
                response.status(200).json(values[0]);
            } else {
                response.status(401).json(false);
            }
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}


const createUser = (request, response) => {
    const { name, email, password } = request.body
    try {
        ur.createUser(name, email, password, (values) => {
            response.status(201).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email, password } = request.body
    try {
        ur.updateUser(name, email, password, id, (values) => {
            response.status(200).send(true);
        })
    } catch (e) {
        response.status(500).send(e);
        throw new Error(e);
    }
}



module.exports = {
    createUser,
    updateUser,
    verifyLogin,
} 