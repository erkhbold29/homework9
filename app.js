// grab the location model
var Location = require('./locationSchema');

// create a new Location
var newLocation = Location({
  _id: 6,
  name: "Pizza Ranch",
  category: "House",
  lat: "41.0079389",
  lng: "-91.9631760"
});

// save the location
newLocation.save(function(err) {
  if (err) throw err;
  
  console.log('Location created!');
});

// get all the locations
Location.find({}, function(err, locations) {
  if (err) throw err;

  // object of all the location
  console.log(locations);
});

// get the name E Jefferson 503 House
Location.find({ name: "E Jefferson 503 House" }, function(err, foundLocation) {
  if (err) throw err;

  // object of the location
  console.log(foundLocation);
});

Location.findById(1, function(err, foundLocation) {
  if (err) throw err;

  // change the location's lat
  foundLocation.lat = "41.0079389";

  // save the location
  foundLocation.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });

});

// get the location E Jefferson 503 House
Location.findOneAndRemove({ name: 'E Jefferson 503 House'  }, function(err) {
  if (err) throw err;
    console.log('Location successfully deleted!');
});