import Ember from 'ember';

export default Ember.Service.extend({
  bricks: {
    red: {
      '1 x 1': {
        quantity: 29,
        price: 0.01
      },
      '2 x 2': {
        quantity: 48,
        price: 0.03
      },
      '2 x 6': {
        quantity: 27,
        price: 0.05
      }
    },
    blue: {
      '2 x 2': {
        quantity: 7,
        price: 0.02
      },
      '2 x 4': {
        quantity: 2,
        price: 0.04
      }
    },
    green: {
      '2 x 4': {
        quantity: 13,
        price: 0.04
      },
      '2 x 8': {
        quantity: 41,
        price: 0.08
      }
    }
  },

  getBricks() {
    return this.get('bricks');
  },

  getRedBricks() {
    return this.get('bricks').red;
  },
  hold: function() {

  },
  removeFromCart(color, size) {
    var bricks = this.get('bricks');
    if(bricks[color][size].quantity != 0) {
      var quantity = bricks[color][size].quantity - 1;
      Ember.set(bricks, color + "." + size + ".quantity", quantity)
    }
    this.set('bricks', bricks);
  }
});
