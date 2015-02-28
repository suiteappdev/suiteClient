'use strict'
var suite = (function(){
	var _privateMethod = function(){
		console.log('scoped function');
	} 

	var publicMethod = function(){
		console.log('export public function');
	}

	return {
		publicMethod : publicMethod
	}
})();