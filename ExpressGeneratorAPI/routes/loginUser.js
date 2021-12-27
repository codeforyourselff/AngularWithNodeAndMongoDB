const express = require("express");
const router = express.Router();
const loginAuthController = require("../controllers/loginController");

router.post("/",loginAuthController.loginController);

module.exports = router;