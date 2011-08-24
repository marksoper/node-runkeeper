
/*
 * node-runkeeper - Node.js Client for Runkeeper Health Graph API
 *
 * runkeeper.js:  Defines the HealthGraph class
 *
 * author: Mark Soper (masoper@gmail.com)
 */

var request = require('request');

var HealthGraph = exports.HealthGraph = function(options) {
    
    this.client_id = options.client_id || null ;
    this.client_secret = options.client_secret || null;
    this.auth_url = options.auth_url || null;
    this.access_token_url = options.access_token_url || null;
    this.redirect_uri = options.redirect_uri || null;
    this.access_token = optinos.access_token || null;

    // Refer to Runkeeper OAuth docs: http://developer.runkeeper.com/healthgraph/registration-authorization
    // Assumes Step 1 has been done, so you have the authorization_code
    // getToken performs Step 2

    this.getNewToken = function (authorization_code, callback) {

	var request_params = {
	    grant_type: "authorization_code",
	    code: authorization_code,
	    client_id: this.client_id,
	    client_secret: this.client_secret,
	    redirect_uri: this.redirect_uri
	};

	var paramlist  = [];
	for (pk in request_params) {
	    paramlist.push(pk + "=" + request_params[pk]);
	};
	var body_string = paramlist.join("&");

	var request_details = {  
	    method: "POST",
	    headers: {'content-type' : 'application/x-www-form-urlencoded'},
	    uri: this.access_token_url,
	    body: body_string
	};

	console.log(request_details['method'] + " " + request_details['uri'] + "\n body: \n" + body_string);

	var self = this;
	request(request_details,
	    function(error, response, body) { 
	        console.log(request_details['method'] + " " + request_details['uri'] + "\n");
		console.log("ERROR\n" + error);
		console.log("RESPONSE\n" + response);
		console.log("BODY\n" + body);
		callback(JSON.parse(body)['access_token']);
	    });
    };

};









