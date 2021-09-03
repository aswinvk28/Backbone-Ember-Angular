import Ember from 'ember';

export default Ember.Route.extend({
  warehouse: Ember.inject.service("brick-warehouse"),
  model: function() {
    return this.get('warehouse').bricks['red'];
  }
});
