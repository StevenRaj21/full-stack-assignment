const express = require("express");
const {
  createUserController,
  getUserController,
  updateUsersController,
  deleteUserController,
} = require("./src/controllers/userControllers");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server started running",
  });
});

app.post("/users", createUserController);

app.get("/users", getUserController);

app.put("/users/:id", updateUsersController);

app.delete("/users/:id", deleteUserController);

module.exports = app;
