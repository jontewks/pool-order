var express = require('express');
var router = express.Router();
var _ = require('lodash');

// For right now, just shuffle the names and send them down for our order for playing pool!
router.get('/', function(req, res) {
  var names = [
    'Dustin',
    'Jesse',
    'Brad',
    'Jon',
    'Joe',
    'Alex',
    'Nate',
    'Andy',
    'Thomas',
    'Zac'
  ];

  res.send(_.shuffle(names));
});

module.exports = router;
