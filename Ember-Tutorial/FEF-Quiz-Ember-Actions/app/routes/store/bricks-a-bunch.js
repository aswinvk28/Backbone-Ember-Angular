import Ember from 'ember';

export default Ember.Route.extend({
  warehouse: Ember.inject.service('brick-warehouse'),
  model() {
    return {
      items: this.get('warehouse').getRedBricks(),
      cart: this.get('shoppingCart').cart
    }
  },
  shoppingCart: Ember.inject.service('shopping-cart'),
  actions: {
    addToCart(color, size, price) {
      this.get('shoppingCart').addToCart(color, size, price);
      this.get('warehouse').removeFromCart(color, size);
    }
  }
});
