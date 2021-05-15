const path = require("path");

const restaurants = (req, res) => {
  const filePath = path.join(__dirname, "../../public/restaurants.html");
  res.sendFile(filePath);
};

const restaurant = (req, res) => {
  const filePath = path.join(__dirname, "../../public/restaurant.html");
  res.sendFile(filePath);
};

module.exports = { restaurants, restaurant };
