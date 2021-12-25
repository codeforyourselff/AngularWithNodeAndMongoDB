const express = require("express");
const registerUser = require("../controllers/registerUsers");
const router = express.Router();

/* GET users listing. */
router.post("/", registerUser.registerUserController);
router.get("/",registerUser.getAllRegisterUserDetails);   
router.get("/:id",registerUser.getRegisterUserDetails);   
router.patch("/",registerUser.updateUserDetails);
router.delete("/:userId",registerUser.deleteUserById);

module.exports = router;
