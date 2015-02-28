'use strict'

var config = (function(suite){
	var _prefix = 'suite_';
	var _apiKey;
	var _store = this.window.localStorage;

	var _key = function(key){
		_apiKey = key;
		_store.setItem( _prefix + 'apikey', key);
	}

	var key = function(key){
		_key(key);
	}

	var _clear = function(){
		_store.removeItem(_prefix + 'apikey');
	}

	var clear = function(){
		_clear();
	}

	var _getKey = function(){
		return _store.getItem(_prefix + 'apikey');
	}

	var getKey = function(){
		return _getKey();
	} 

	suite.config = {
		key   : key,
		clear : clear,
		getKey :getKey
	}

	return suite;

})(suite || {});