const { pool } = require("../database/db");

//create user service

const createUserService = async (data) => {
  const { username, email, age } = data;

  const query = `INSERT INTO users(username, email, age) VALUES ($1, $2, $3) RETURNING *`;

  const values = [username, email, age];

  const result = await pool.query(query, values);

  return result.rows[0];
};

// get user service

const getUserService = async () => {
  const result = await pool.query(`SELECT * FROM users ORDER BY id ASC`);

  return result.rows;
};

//update user service

const updateUserService = async (id, data) => {
  const { username, email, age } = data;

  const query = `UPDATE users SET username = $1, email = $2, age = $3 WHERE id = $4 RETURNING *`;

  const values = [username, email, age, id];

  const result = await pool.query(query, values);

  return result.rows[0];
};

//delete user service

const deleteUserService = async (id) => {
  const query = `DELETE FROM users WHERE id = $1 RETURNING *`;

  const values = [id];

  const result = await pool.query(query, values);

  return result.rows[0];
};

module.exports = {
  createUserService,
  getUserService,
  updateUserService,
  deleteUserService,
};
