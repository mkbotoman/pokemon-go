var express = require('express');
var router = express.Router();
var isPokemonGoUp = require('is-pokemon-go-up');
var status

isPokemonGoUp()
  .then(result => status = result)

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Is Pokemon Go Up?', status: status });
});

module.exports = router;
