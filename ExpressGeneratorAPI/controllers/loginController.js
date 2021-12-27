const registerModel = require('../models/registerUserSchema');
const helper = require('../helper/validation');
const createHttpError = require('http-errors');

const loginController = async (req, res, next) => {
  try {
    const result = await helper.loginAuth.validateAsync(req.body);
    const doesExist = await registerModel.findOne({
      userName: result.userName,
    });
    console.log('db', doesExist);
    if (!doesExist) {
      throw createHttpError.Conflict(`${result.userName} is not found`);
    } else {
      const flag = await helper.compareHash(
        result.passWord,
        doesExist.password
      );
      if (flag) {
        return res.json({ Message: 'UserAuth successful' });
      } else {
        return res.json({ Message: 'Authentication failed' });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loginController };
