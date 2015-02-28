'use strict'

var config = (function(suite){
	/* todo el manejo del api key aqui */
	var _apiKey;
	
	var _key = function(key){
		_apiKey = key;
		/* guardar apikey en localstorage */
	}

	var key = function(key){
		_key(key);
	}

	suite.config = {
		key : key
	}

	return suite;

})(suite || {});