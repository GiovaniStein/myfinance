const db = require('./dataBaseConf');

const verifyLogin = (request, response) => {
    const { email, password } = request.body
    db.pool.query('SELECT * FROM "user" WHERE "email" = $1 and "password" = $2', [email, password], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const createUser = (request, response) => {
    const { user_name, user_email, user_password } = request.body
    db.pool.query('INSERT INTO "user" ("name", "email", "password") VALUES ($1, $2, $3)', [user_name, user_email, user_password], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added`);
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { user_name, user_email, user_password } = request.body
    db.pool.query(
        'UPDATE "user" SET "name" = $1, "email" = $2, "password" = $3 WHERE "id" = $3',
        [user_name, user_email, user_password, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}



module.exports = {
    createUser,
    updateUser,
    verifyLogin,
} 