
const https = require('http')

function login(success, failure)
{
    //
    // const options = {
    //   hostname: '0.0.0.0',
    //   port: 8080,
    //   path: '/user/1/listings',
    //   method: 'GET'
    // }
    //
    // const req = https.request(options, res => {
    //     console.log(`statusCode: ${res.statusCode}`)
    //
    //     res.on('data', d => {
    //         // process.stdout.write(d)
    //         success(JSON.parse(d));
    //     })
    // })
    //
    // req.on('error', error => {
    //     console.error(error)
    //     failure();
    // })
    //
    // req.end()
}


module.exports = {
    login
};
