'use strict'
user = (function(suite){
	var _create = function(){
		console.log('create here');
	}

	var _update = function(){
		console.log('update here');
	}

	var _deleteUser = function(){
		console.log('delete here');
	}

	var create = function(){
		_create()
	}

	var update = function(){
		_update()
	}

	var deleteUser = function(){
		_delete()
	}

	suite.user = {
		create : create,
		update : update,
		deleteUser : deleteUser
	}

	return suite;
})(suite || {});