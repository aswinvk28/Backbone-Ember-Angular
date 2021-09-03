import Ember from 'ember';

export default Ember.Service.extend({
    cart: [],
    addToCart: function(color, size, price) {
        var cart = this.get('cart');
        cart.push({"color": color, "size": size, "price": price});
        this.set('cart', cart);
    }
});
