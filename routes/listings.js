var express = require('express');
var api_requests = require('../api_requests/listings.js');

var router = express.Router();


router.get('/', function(req, res, next) {

    api_requests.get_remote_listings(function(data){
        process.stdout.write(data)

        // res.send(JSON.stringify(data));
        // res.send(data);
        // res.send(data.toString());

        res.render('public/listings', { title: 'Express', listings: data });
    },
    function(){
        res.send("{}");
    });

    // if we are logged in
        // res.render('private/listings', { title: 'Express' });
    // res.render('public/listings', { title: 'Express' });
});

router.get('/edit', function(req, res, next) {
    // if we are logged in
    res.render('private/listings_edit', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
    // if we are logged in
    res.render('private/listings_new', { title: 'Express' });
});

module.exports = router;
