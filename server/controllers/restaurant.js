const { read } = require("../db/database");
const Food = require("../lib/Food");

const getFoodById = (id) => {
  const data = JSON.parse(read("foods"));

  return data.find((each) => each.id === id) || {};
};

const getAllRestaurants = (req, res) => {
  const data = JSON.parse(read("restaurants"));

  const restaurants = data.map(({ id, logo, name, type }) => ({
    id,
    logo,
    name,
    type,
  }));

  res.json(restaurants);
};

const getRestaurantById = (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(read("restaurants"));

  const restaurant = data.find((each) => each.id === id) || {};

  const foods = restaurant.foods.map((foodId) => {
    const foodById = getFoodById(foodId);
    const food = new Food(foodById);

    return food;
  });

  const price = foods[0].getPrice();

  console.log(price);

  res.send({ ...restaurant, foods });
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
};
