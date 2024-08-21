const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

// router.param("id", userController.checkId);

router.post("/signup", userController.checkBody, authController.signUp);
router.post("/login", authController.login);

router
  .route("/")
  .post(userController.createUser)
  .get(
    authController.protect,
    authController.admin,
    userController.getAllUsersData
  );

router
  .route("/:id")
  .get(userController.getOneUserData)
  .patch(userController.editUserData)
  .delete(userController.deleteUserData);

module.exports = router;
