const createUser = require('../models/registerUserSchema');
const helper = require('../helper/validation');
const createHttpError = require('http-errors');

const registerUserController = async (req, res) => {
  try {
    const result = await helper.authSchema.validateAsync(req.body);
    result.password = await helper.passwordHash(result.password);
    const doesExist = await createUser.findOne({ email: result.email });
    if (doesExist) {
      throw createHttpError.Conflict(`${result.email} is already registered`);
    } else {
      const User = await new createUser(result);
      await User.save((err) => {
        if (!err) {
          return res.json({ Message: 'User registered..!!' });
        }
      });
    }
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
      return res.json({ message: 'User id not matched..!!' });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUserDetails = async (req, res) => {
  try {
    const result = await helper.authSchema.validateAsync(req.body);
    const doesExist = await createUser.findOne({ userName: result.userName });
    if (doesExist) {
      const updateUser = await createUser.updateOne(
        { userName: result.userName },
        {
          $set: {
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
          },
        }
      );
      return res.json({ Message: 'User updated..!!' });
    } else {
      throw createHttpError.Conflict(`${result.userName} not found`);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const deleteUser = await createUser
      .find({ userName: req.params.userId })
      .remove()
      .exec();
    if (deleteUser) {
      return res.json({ Message: 'User deleted..!!' });
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
