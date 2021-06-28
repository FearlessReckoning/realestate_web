var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    // if we are logged in
        // res.render('private/listings', { title: 'Express' });
    res.render('public/listings', { title: 'Express' });
});

router.get('/edit', function(req, res, next) {
    // if we are logged in
    res.render('listings_edit', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
    // if we are logged in
    res.render('listings_new', { title: 'Express' });
});

module.exports = router;
