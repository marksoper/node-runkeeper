
/*
 * node-runkeeper - Node Client for Runkeeper Health Graph API
 *
 * runkeeper.js:  Defines the HealthGraphClient class
 *
 * author: Mark Soper (masoper@gmail.com)
 */

var request = require('request');

var HealthGraphClient = exports.HealthGraphClient = function(options) {
    
    this.client_id = options.client_id;
    this.client_secret = options.client_secret;
    this.auth_url = options.auth_url;
    this.access_token_url = options.access_token_url;
    this.redirect_uri = options.redirect_uri;

    this.getToken = function (authorization_code) {

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
	    body: raw_body_string
	};

	console.log(request_details['method'] + " " + request_details['uri'] + "\n body: \n" + body_string);

	request(request_details,
	    function(error, response, body) {
	        console.log(request_details['method'] + " " + request_details['uri'] + "\n");
		console.log("ERROR\n" + error);
		console.log("RESPONSE\n" + response);
		console.log("BODY\n" + body);
	    });
    };

};









