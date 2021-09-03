import Ember from 'ember';

var legoBrick = Ember.Component.extend({
    classNames: ["col-sm-4", "well"],
    tagName: 'div',
    classNameBindings: ['onSale:on-sale']
});

export default legoBrick;