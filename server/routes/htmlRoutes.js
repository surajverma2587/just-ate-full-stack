const express = require("express");

const { restaurants, restaurant } = require("../controllers/renderer");

const router = express.Router();

router.get("/restaurants", restaurants);
router.get("/restaurants/:id", restaurant);

module.exports = router;
