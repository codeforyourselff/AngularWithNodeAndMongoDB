const createUser = require("../models/registerUserSchema");

const registerUserController = async (req, res) => {
  try {
    const User = await new createUser({
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      gender: req.body.gender,
      contactNo: req.body.contactNo,
    });
    User.save((err) => {
      if (!err) {
        return res.json({ Message: "User registered..!!" });
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllRegisterUserDetails = async (req, res) => {
  try {
    const allUser = await createUser.find({});
    if (allUser) {
      return res.json(allUser);
    } else {
      return res.status(500).send();
    }
  } catch (error) {
    console.log(error);
  }
};

const getRegisterUserDetails = async (req, res) => {
  try {
    const fetchUser = await createUser.find(
      { userName: req.params.id },
      { _id: 0, firstName: 1, lastName: 1, email: 1 }
    );
    if (fetchUser) {
      return res.json(fetchUser);
    } else {
      return res.json({ message: "User id not matched..!!" });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUserDetails = async (req, res) => {
  try {
    const updateUser = await createUser.findOneAndUpdate(
      { userName: req.body.userName },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
        },
      }
    );
    if (updateUser) {
      return res.json({ Message: "User updated..!!" });
    } else {
      return res.json({ Message: "userId not found..!!" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const deleteUser = await createUser
      .find({ userName: req.params.userId }).remove().exec();
    if (deleteUser) {
      return res.json({ Message: "User deleted..!!" });
    } else {
      return res.send(error);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerUserController,
  getRegisterUserDetails,
  getAllRegisterUserDetails,
  updateUserDetails,
  deleteUserById,
};
