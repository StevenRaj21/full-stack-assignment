const {
  createUserService,
  getUserService,
  updateUserService,
  deleteUserService,
} = require("../services/userServices");

// create user controller

const createUserController = async (req, res) => {
  try {
    const createUser = await createUserService(req.body);

    res.status(200).json({
      success: true,
      message: "user created",
      data: createUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get users Controller

const getUserController = async (req, res) => {
  try {
    const getUsers = await getUserService();

    res.status(200).json({
      success: true,
      message: "users fetched",
      data: getUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update users controller

const updateUsersController = async (req, res) => {
  try {
    const updateUsers = await updateUserService(req.params.id, req.body);

    if (!updateUsers) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "user updated",
      data: updateUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//delete users controller

const deleteUserController = async (req, res) => {
  try {
    const deleteUser = await deleteUserService(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({
        success: false,
        message: "user not found to delete",
      });
    }
    res.status(200).json({
      success: true,
      message: "user deleted",
      data: deleteUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUserController,
  getUserController,
  updateUsersController,
  deleteUserController,
};
