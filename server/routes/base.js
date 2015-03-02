var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.get('/', function(req, res) {
  var names = [
    'Dustin',
    'Jesse',
    'Brad',
    'Jon',
    'Joe',
    'Alex',
    'Nate'
  ];

  res.send(_.shuffle(names));
});

module.exports = router;
