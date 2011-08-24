
/*
 * test-getToken.js:  Test 2nd step of Runkeeper Health Graph API handshake
 *
 * usage:  node test-getToken.js --code <authorization_code>
 * 
 * <authorization_code> is returned by the api as described in step 1 here:
 * http://developer.runkeeper.com/healthgraph/registration-authorization
 *
 */

var argv = require('optimist').argv,
    options = require('./config').options;

console.log("Getting token for code: " + argv.code);

var runkeeper = require('../lib/runkeeper');
var rk = new runkeeper.HealthGraphClient(options);

