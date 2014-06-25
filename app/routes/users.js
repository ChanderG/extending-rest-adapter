import User from 'appkit/models/user';
export default Ember.Route.extend({
  model: function(params) {
    var store = this.get('store');
    return store.find('user', params.id);
  }
});
