const { read } = require("../db/database");

const getAllRestaurants = (req, res) => {
  const restaurants = read("restaurants");

  res.json(JSON.parse(restaurants));
};

module.exports = getAllRestaurants;
