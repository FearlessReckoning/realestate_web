var express = require('express');
var api_requests = require('../api_requests/listings.js');

var router = express.Router();

router.get('/:listing_id(\\d+)', function(req, res, next) {

    api_requests.get_listing(req.params.listing_id,
    function(data){
        process.stdout.write(data)
        var listing = data.listing;
        res.render('public/listing', {listing: listing});
        // res.render('private/listings', {listings: data});
    },
    function(){
        res.send("{}");
    });
    // res.send(listing_id);
    // res.send();

    // if we are logged in
        // res.render('private/listings', { title: 'Express' });
    // res.render('public/listings', { title: 'Express' });
});

router.get('/:listing_id(\\d+)/edit', function(req, res, next) {

    api_requests.get_listing(req.params.listing_id,
    function(data){
        process.stdout.write(data)
        var listing = data.listing;
        res.render('private/listing_edit', {listing: listing});
        // res.render('private/listings', {listings: data});
    },
    function(){
        res.send("{}");
    });
    // res.send(listing_id);
    // res.send();

    // if we are logged in
        // res.render('private/listings', { title: 'Express' });
    // res.render('public/listings', { title: 'Express' });
});

router.get('/:user_id/edit', function(req, res, next) {
    // if we are logged in
    api_requests.get_remote_listings(req.params.user_id,
    function(data){
        res.render('private/listings_edit', {listings: data});
    },
    function(){
        res.send("{}");
    });
});


module.exports = router;
