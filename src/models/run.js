export default Backbone.Model.extend({
  urlRoot: 'http//tiny-lr.herokuapp.com/collections/runs-cw',

  defaults: {
    runTime: '',
    raceDate: '',
    raceNotes: '',

  },
});
