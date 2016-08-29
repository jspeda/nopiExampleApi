var express = require('express');
var Video = require('../models/movie');
module.exports.controller = function(app) {

  app.get('/movies', function(req, res) {
    Movie.find(function(err, movies) {
      if (err)
          res.send(err);

      res.json(movies);
    });
  });

  app.post('/movies', function(req, res) {
    var movie = new Movie();
    movie.name = req.body.name;
    movie.director = req.body.director;

    movie.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Created a new movie!'});
    });
  });
}
