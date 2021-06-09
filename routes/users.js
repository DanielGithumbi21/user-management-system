var express = require('express');
var router = express.Router();
const userController = require ("../server/controllers/userController");

router.get("/", userController.view);
router.post("/", userController.find);
router.get("/adduser", userController.form);
router.post("/adduser", userController.create);

router.get("/edituser/:id", userController.edit);

module.exports = router;
