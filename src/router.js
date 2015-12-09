import Run from '.models/run';

var Router = Backbone.Router.extend({
  routes: {
    '': 'indexAllRuns',
    new: 'newRun',
    ':id': 'detailsPage',
    ':id/edit': 'detailsEdit',
  },

  newRun() {
    var run = new Run();
  },

});

export default Router;
