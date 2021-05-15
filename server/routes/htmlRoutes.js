const express = require("express");

const renderRestaurants = require("../controllers/renderRestaurants");

const router = express.Router();

router.get("/restaurants", renderRestaurants);

module.exports = router;
