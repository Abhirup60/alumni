const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const {signupSchema, loginSchema} = require("../validator/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");


router.route("/").get(authController.home);
router.route("/about").get(authController.about);
router.route("/registration").post( validate(signupSchema), authController.register);
router.route("/login").post( validate(loginSchema), authController.login);
router.route("/service").get(authController.service); // -> /api/auth/service

// create a route for user to get data
router.route("/user").get(authMiddleware, authController.user); 

module.exports = router;