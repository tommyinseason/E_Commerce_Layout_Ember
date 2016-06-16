import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('buy');
  this.route('sell');
  this.route('swap');
  this.route('cart');
  this.route('new-sneaks');
});

export default Router;
