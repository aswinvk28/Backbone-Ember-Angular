import Ember from 'ember';

export default Ember.Component.extend({
    shoppingCart: Ember.inject.service('shopping-cart'),
    init() {
        this._super(...arguments);
        this.set('cart', this.get('shoppingCart').cart);
    }
});
