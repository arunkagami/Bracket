const express = require('express');
const router = express.Router();

const rootDir = require("../utils/pathUtils");

router.get("/", (req, res, next) => {
    res.render('home');
})

module.exports = router;