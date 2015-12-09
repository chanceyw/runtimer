var Router = Backbone.Router.extend({
  routes: {
    '': 'indexAllRuns',
    new: 'newRun',
    ':id': 'detailsPage',
  },

});

export default Router;
