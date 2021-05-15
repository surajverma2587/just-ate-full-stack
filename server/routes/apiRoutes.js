const express = require("express");

const {
  getAllRestaurants,
  getRestaurantById,
} = require("../controllers/restaurant");

const router = express.Router();

router.get("/restaurants", getAllRestaurants);
router.get("/restaurants/:id", getRestaurantById);

module.exports = router;
