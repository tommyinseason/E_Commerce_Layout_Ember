import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        brand: this.get('brand'),
        size: this.get('size'),
        style: this.get('style'),
        color: this.get('color'),
        condition: this.get('condition'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.sendAction('save', params);
    }
  }
});
