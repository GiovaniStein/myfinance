const exec = require('./genericDAO');

const verifyLogin =  (params) => {
    let query = 'SELECT * FROM adm_user WHERE user_email = $1 and user_password = $2';
    return exec.executeQuery(query, params)
}


const createUser = (params) => {
    let query = 'INSERT INTO adm_user (user_name, user_email, user_password) VALUES ($1, $2, $3)';
    return exec.executeQuery(query, params)
}

const updateUser = (params) => {
    let query = 'UPDATE adm_user SET user_name = $1, user_email = $2, user_password = $3 WHERE user_id = $3';
    return exec.executeQuery(query, params)
}



module.exports = {
    verifyLogin,
    createUser,
    updateUser,
}