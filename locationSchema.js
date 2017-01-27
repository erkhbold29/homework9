// grab the things we need
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/homework9');
var Schema = mongoose.Schema;

// create a schema
var locationSchema = new Schema({
  _id: Number,
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true},
  lat: String,
  lng: String
});

// the schema is useless so far
// we need to create a model using it
var Location = mongoose.model('Location', locationSchema);

// make this available to our locations in our Node applications
module.exports = Location;