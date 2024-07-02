const express = require("express");
const router = express.Router();
const helloController = require('../controllers/helloController');

router.get("/hello", helloController.hello);

module.exports = router;
