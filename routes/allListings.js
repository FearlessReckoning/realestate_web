var express = require('express');
var router = express.Router();

/* GET All Listings Page. */
router.get('/', function(req, res, next) {
  res.render('allListings', { title: 'Jose Martir Realty Listings' });
});

module.exports = router;
