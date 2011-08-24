
/*
 * test-getUser.js:  Test the /user api call
 *
 */

var options = require('./config').options;

// Set up client

var runkeeper = require('../lib/runkeeper');
var rkclient = new runkeeper.HealthGraph(options);

// Test getUser

rkclient.getUser(function(user) {
	rkclient.user = user;
	console.log("user: " + user);
    });

