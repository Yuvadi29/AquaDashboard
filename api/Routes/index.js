const express = require("express");
const router = express.Router();
const { saveToDB } = require("../Controllers/aquaController");

router.get('/data', saveToDB);

module.exports = router;