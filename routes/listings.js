var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('listings', { title: 'Express' });
});

router.get('/edit', function(req, res, next) {
  res.render('listings_edit', { title: 'Express' });
});

module.exports = router;
