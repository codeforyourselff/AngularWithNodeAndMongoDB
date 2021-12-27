const mongoose = require("mongoose");

const registerUserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true,
  },
});

const registerUser = new mongoose.model("RegistrationUser", registerUserSchema);

module.exports = registerUser;
