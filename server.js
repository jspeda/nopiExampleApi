// Server Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Database Setup
// var mongoose   = require('mongoose');
// mongoose.connect(/*Database URL Here*/);

var mongoose = require('mongoose');
mongoose.connect('mongodb://1234:pass@ds019806.mlab.com:19806/nopimovies');
mongoose.Promise = require('bluebird');
// var assert = require('assert');
// assert.equal(query.exec().constructor, require('bluebird'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// Port
var port = process.env.PORT || 8080;

// API Routes
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Nopi-API!' });
});

// Controllers Contain Routes
app.use(require('./controllers'));

// Server Started
app.listen(port);
console.log('Nopi API Listening On ' + port);
