const express = require("express");
const router = express.Router();
const authAdmin = require("../controllers/admin-controller.js");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware.js");

// to get the user data
router.route("/users").get(authMiddleware, adminMiddleware, authAdmin.getAllUser);

// get user data from url
router.route("/users/:id").get(authMiddleware, adminMiddleware, authAdmin.getUser);

// update user data
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, authAdmin.updateUserById);

// delete the user
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, authAdmin.deleteUser);

// to get the contact data
router.route("/contacts").get(authMiddleware, adminMiddleware, authAdmin.getAllContact);

// delete contact data
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, authAdmin.deleteContacts)

//to get the contact data from url
router.route("/contacts/:id").get(authMiddleware, adminMiddleware, authAdmin.getContact)

// to update the contact data
router.route("/contacts/update/:id").patch(authMiddleware, adminMiddleware, authAdmin.updateContact)



module.exports = router;
