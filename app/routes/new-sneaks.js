import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newItem = this.store.createRecord('sneaks', params);
      newItem.save();
      this.transitionTo('index');
    }
  }
});
