import { expect } from 'chai'
import Recipe from '../lib/recipe'
import Pantry from '../lib/pantry'

describe('Pantry', () => {
  describe('attributes', () => {
    var pantry = new Pantry();

    it('initializes with an empty stock', () => {
      expect(pantry.stock).to.be.empty
    });
  });

  describe('functions', () => {
    describe('stockCheck', () => {
      it('checks the amount of an ingredient in stock', () => {
        var pantry = new Pantry();

        expect(pantry.stockCheck('cheese')).to.eql(0)
      })
    })

    describe('restock', () => {
      it('adds an ingredient and amount to stock', () => {
        var pantry = new Pantry();

        pantry.restock('cheese', 10)

        expect(pantry.stockCheck('cheese')).to.eql(10)

        pantry.restock('cheese', 20)

        expect(pantry.stockCheck('cheese')).to.eql(30)
      });
    });

    describe('addToShoppingList', () => {
      it('adds ingredients to shopping list', () => {
        var pantry = new Pantry();
        var recipe = new Recipe('cheese Pizza');

        recipe.addIngredient('cheese', 20);
        recipe.addIngredient('flour', 20);

        pantry.addToShoppingList(recipe);

        expect(pantry.shoppingList).to.eql({ 'cheese': 20, 'flour': 20 })

        var recipe2 = new Recipe('spaghetti');

        recipe2.addIngredient('noodles', 10);
        recipe2.addIngredient('sauce', 10);
        recipe2.addIngredient('cheese', 5);

        pantry.addToShoppingList(recipe2);

        expect(pantry.shoppingList).to.eql({ 'cheese': 25,
                                             'flour': 20,
                                             'noodles': 10,
                                             'sauce': 10 })
      });
    });
  });
});
