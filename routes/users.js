var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('users', { title: 'Express' });
    res.send('{}');
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  // res.render('login', { title: 'Express' });
    res.send('{}');

});

module.exports = router;
