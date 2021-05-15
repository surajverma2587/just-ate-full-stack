const path = require("path");

const renderRestaurants = (req, res) => {
  const filePath = path.join(__dirname, "../../public/restaurants.html");
  res.sendFile(filePath);
};

module.exports = renderRestaurants;
