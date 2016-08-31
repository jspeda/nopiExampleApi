// Route Dependencies
var express = require('express');
var router = express.Router();
var Movie = require('../models/Movie');

// Import Model

// Routes ----------------------------

// Example:
// router.get('/:id', function(req, res) {
  // Logic Goes Here
//})

router.get('', function(req, res) {
  console.log('This is the GET route for Movies!');
  console.log(req.body);
  Movie.find().then(function(movies) {
      res.json(movies);
  });
});

router.post('', function(req, res) {
  var movie = new Movie();
  movie.name = req.body.name;
  movie.director = req.body.director;

  movie.save(function(err) {
    if (err)
        res.send(err);
    res.json({ message: 'Created a new movie!'});
  });
});


// ------------------------------------

module.exports = router;
