const Joi = require('joi');
const hashing = require('bcryptjs');

const authSchema = Joi.object().keys({
  userName: Joi.string().alphanum().min(5).max(7).required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email().lowercase().required(),
  gender: Joi.string(),
  password: Joi.string().min(8).max(16),
  contactNo: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/),
});

const loginAuth = Joi.object().keys({
  userName: Joi.string().alphanum().min(5).max(7).required(),
  passWord: Joi.string().min(8).max(16).required(),
});

const passwordHash = async (password) => {
  const hashed = await hashing.hash(password, 10);
  return hashed;
};

const compareHash = async (password,doesExist) => {
  const comparedHash = await hashing.compare(password, doesExist);
  return comparedHash;
};
module.exports = { authSchema, passwordHash, loginAuth, compareHash };
