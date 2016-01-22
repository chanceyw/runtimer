import RunPost from '../models/run-post';

export default Backbone.Collection.extend({
  url: 'http://tiny-lr.herokuapp.com/collections/runs-cw',

  model: RunPost,
});
