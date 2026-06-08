const { Pool } = require("pg");

const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log("DB connected");
  } catch (error) {
    console.log(`DB connection failed ${error.message}`);
  }
};

module.exports = { pool, connectDB };
