var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('login', {});
});

router.post('/', function(req, res, next) {
    res.send("hello");
});

module.exports = router;
