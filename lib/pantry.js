export default class Pantry {
  constructor() {
    this.stock = {};
    this.shoppingList = {};
  }

  stockCheck(ingredient) {
    if (Object.keys(this.stock).includes(ingredient)) {
      return this.stock[ingredient];
    } else {
      return 0;
    }
  }

  restock(ingredient, quantity) {
    if (Object.keys(this.stock).includes(ingredient)) {
      this.stock[ingredient] += quantity;
    } else {
      this.stock[ingredient] = quantity;
    }
    return this.stock[ingredient];
  }

  addToShoppingList(recipe) {
    for (let [ingredient, quantity] of Object.entries(recipe.ingredients)) {
      if (Object.keys(this.shoppingList).includes(ingredient)) {
        this.shoppingList[ingredient] += quantity;
      } else {
        this.shoppingList[ingredient] = quantity;
      }
    }
    return this.shoppingList;
  }
}
