var express = require('express');
var api_requests = require('../api_requests/listings.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('users', {});
    res.send('{}');
});

router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.post('/login', function(req, res, next) {
  // res.render('login', {});
    res.send('{}');

});

router.get('/:user_id/listings', function(req, res, next) {
    // TODO this should swap between public and private views based on if the user is logged in
    var logged_in = true;


    if (logged_in)
    {
        api_requests.get_remote_listings(req.params.user_id,
        function(data){
            process.stdout.write(data)
            // res.render('public/user_listings', {listings: data });
            res.render('private/user_listings', { user_id: req.params.user_id, listings: data});
        },
        function(){
            res.send("{}");
        });
    }
    else
    {
        api_requests.get_remote_listings(req.params.user_id,
        function(data){
            process.stdout.write(data)
            // res.render('public/user_listings', {listings: data });
            res.render('public/user_listings', { user_id: req.params.user_id, listings: data});
        },
        function(){
            res.send("{}");
        });
    }
});

router.get('/:user_id/listings/new', function(req, res, next) {
    // TODO this should only work if we are logged in.
    var logged_in = true;


    if (logged_in)
    {
        res.render('private/user_listings_new', {user_id: req.params.user_id});
    }
    else
    {
        res.send("user isn't logged in");
    }
});

router.get('/:user_id/listings/edit', function(req, res, next) {
    // TODO this should only work if we are logged in.
    var logged_in = true;
    if (logged_in)
    {
        api_requests.get_remote_listings(req.params.user_id,
        function(data){
            // process.stdout.write(data)
            // res.render('public/user_listings', {listings: data });
            res.render('private/user_listings_edit', { user_id: req.params.user_id, listings: data});
        },
        function(){
            res.send("{}");
        });
    }
    else
    {
        res.send("user isn't logged in");
    }
});
module.exports = router;
