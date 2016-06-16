import Ember from 'ember';

export default Ember.Service.extend({
  sneaks: [],

  add(sneak) {
    this.get('sneaks').pushObject(sneak);
  }
});
