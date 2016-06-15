import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  brand: DS.attr(),
  size: DS.attr(),
  style: DS.attr(),
  color: DS.attr(),
  condition: DS.attr(),
  price: DS.attr(),
  image: DS.attr()
});
