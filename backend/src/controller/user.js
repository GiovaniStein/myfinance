const userDAO = require('../dao/userDAO');

const verifyLogin = (request, response) => {
  const { email, password } = request.body;
  try {
    let results = userDAO.verifyLogin([email, password]);
    if (!!user) {
      response.status(200).json(results.rows);
    }
  } catch (error) {
    throw new Error(error);
  }
}

const createUser = (request, response) => {
  const { user_name, user_email, user_password } = request.body;
  try {
    userDAO.createUser([user_name, user_email, user_password]);
    response.status(201).send(`User added`);
  } catch (error) {
    throw new Error(error);
  }
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { user_name, user_email, user_password } = request.body
  try {
    userDAO.updateUser([user_name, user_email, user_password, id])
    response.status(200).send(`User modified with ID: ${id}`)
  } catch (error) {
    throw new Error(error);
  }
}


module.exports = {
  createUser,
  updateUser,
  verifyLogin,
}