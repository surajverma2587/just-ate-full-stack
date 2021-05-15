const express = require("express");

const getAllRestaurants = require("../controllers/getAllRestaurants");

const router = express.Router();

router.get("/restaurants", getAllRestaurants);

module.exports = router;
