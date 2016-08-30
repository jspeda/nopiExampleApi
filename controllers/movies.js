// Route Dependencies
var express = require('express');
var router = express.Router();

// Import Model

var movieModel = require('../models/movie');

// Routes ----------------------------

// Example:
// router.get('/:id', function(req, res) {
  // Logic Goes Here
//})

router.get('/movies', function(req, res) {
  Movie.find(function(err, movies) {
    if (err)
        res.send(err);

    res.json(movies);
  });
});

router.post('/movies', function(req, res) {
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
