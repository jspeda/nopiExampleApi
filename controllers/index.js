// Router Dependencies
var express = require('express');
var router = express.Router();

// Endpoints, Require Controllers ----------------

// Example:
// router.use('/post', require('./post'))

router.use('/movies', require('./movies'));

// -----------------------------------------------

module.exports = router;
