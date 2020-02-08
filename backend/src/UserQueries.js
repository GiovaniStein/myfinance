const db = require('../DBConfig');

const getUsers = (request, response) => {
  db.pool.query('SELECT * FROM adm_user ORDER BY user_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const verifyLogin = (request, response) => {
  console.log('rest');
  const { email, password } = request.body
  db.pool.query('SELECT * FROM adm_user WHERE user_email = $1 and user_password = $2 ', [email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  db.pool.query('SELECT * FROM adm_user WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { user_name, user_email, user_password } = request.body
  console.log('chegou');
  db.pool.query('INSERT INTO adm_user (user_name, user_email, user_password) VALUES ($1, $2, $3)', [user_name, user_email, user_password], (error, results) => {
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
    'UPDATE adm_user SET user_name = $1, user_email = $2, user_password = $3 WHERE user_id = $3',
    [user_name, user_email, user_password, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  db.pool.query('DELETE FROM adm_user WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  verifyLogin,
}