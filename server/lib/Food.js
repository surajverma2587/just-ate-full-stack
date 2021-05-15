const Product = require("./Product");

class Food extends Product {
  constructor({ ingredients, ...rest }) {
    super(rest);

    this.ingredients = ingredients;
  }

  getIngredients() {
    return this.ingredients;
  }
}

module.exports = Food;
