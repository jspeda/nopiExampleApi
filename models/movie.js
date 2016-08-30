// Model Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Model ----------------------------------
var MovieSchema = new Schema({
  name: String,
  director: String
});
// -----------------------------------------

module.exports = mongoose.model('Movie', MovieSchema);
