
/*
 * test-user.js:  Test the /user api call
 *
 */

var options = require('./config').options;

var testUser = function() {
  // Set up client
  var runkeeper = require('../lib/runkeeper');
  var rkclient = new runkeeper.HealthGraph(options);
  // Test user
  rkclient.user(options.access_token,
    function(user) {
	   rkclient.user = user;
	   console.log("user: " + user);
    });
  };

testUser();
