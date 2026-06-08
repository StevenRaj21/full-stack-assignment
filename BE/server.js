const dotenv = require("dotenv");
const app = require("./app");
const { connectDB } = require("./src/database/db");

dotenv.config();

const PORT = Number(process.env.SERVER_PORT);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  } catch (error) {
    console.log(`Server running Failed - ${error.message}`);
  }
};

startServer();
