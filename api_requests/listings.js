
const https = require('http')

function get_remote_listings(user_id, success, failure)
{

    const options = {
      hostname: '0.0.0.0',
      port: 8080,
      path: '/user/' + user_id + '/listings',
      method: 'GET'
    }

    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
            // process.stdout.write(d)
            success(JSON.parse(d));
        })
    })

    req.on('error', error => {
        console.error(error)
        failure();
    })

    req.end()
}

function get_listing(listing_id, success, failure)
{

    const options = {
      hostname: '0.0.0.0',
      port: 8080,
      path: '/listing/' + listing_id,
      method: 'GET'
    }

    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
            process.stdout.write(d)
            success(JSON.parse(d));
        })
    })

    req.on('error', error => {
        console.error(error)
        failure();
    })

    req.end()
}

module.exports = {
    get_remote_listings,
    get_listing
};
