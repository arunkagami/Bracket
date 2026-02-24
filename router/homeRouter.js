const express = require('express');
const router = express.Router();

const hostController = require("../controllers/homeController");

router.get("/", hostController.home);

module.exports = router;