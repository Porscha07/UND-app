var express = require('express');
var router = express.Router();
var request = require('request');
var ejs = require('ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
