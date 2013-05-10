
/* ---------------------------------------------------------------------------
 * Init
 * --------------------------------------------------------------------------- */

'use strict';

var App = new Lure( $('[x-view]') );
App.init();

/* ---------------------------------------------------------------------------
 * Routes
 * --------------------------------------------------------------------------- */

App.route('/', {

	templateUrl: 'views/home.html',
	controller: 'HomeCtrl'

})

.route('/hsfh', {

	templateUrl: 'views/model.html',
	controller: 'ModelCtrl'

})

.route('/oiuty', {

	templateUrl: 'views/view.html',
	controller: 'ViewCtrl'

})

.route('/baassd', {

	templateUrl: 'views/controller.html',
	controller: 'ControllerCtrl'

})

.route('/yuyu', {

	templateUrl: 'views/about.html',
	controller: 'AboutCtrl'

})

.route('/3634', {

	templateUrl: 'views/docs.html',
	controller: 'DocsCtrl'

})

.route('/fsdfdse', {

	templateUrl: 'views/dictionary.html',
	controller: 'DictionaryCtrl'

});

/* ---------------------------------------------------------------------------
 * Route Controllers
 * --------------------------------------------------------------------------- */

App.controller('HomeCtrl', function(scope) {

	console.log(scope);

})

.controller('ModelCtrl', function(scope) {

	console.log(scope);

})

.controller('ViewCtrl', function(scope) {

	console.log(scope);

})

.controller('ControllerCtrl', function(scope) {

	console.log(scope);

})

.controller('AboutCtrl', function(scope) {

	console.log(scope);

})

.controller('DocsCtrl', function(scope) {

	console.log(scope);

})

.controller('DictionaryCtrl', function(scope) {

	console.log(scope);

});

/* ---------------------------------------------------------------------------
 * DOM Controllers
 * --------------------------------------------------------------------------- */

// make any element a hyperlink
App.controller('link',
	function(scope, el, value) {

		$(el).on('click', function() {
			window.location.href = value;
		});

	})

// fire conrtroller on click
.controller('click',
	function(scope, el, value, controllers) {

		$(el).on('click', function(event) {
			controllers[value](scope, el, event);
		});

	})

// hide element from the dom
.controller('cloak',
	function(scope, el) {

		$(el).css('display', 'none');

	})

// add class to element
.controller('class',
	function(scope, el, value) {

		$(el).addClass(value);

	})

// change value of form element
.controller('value',
	function(scope, el, value) {

		$(el).val(value);

	})

// exectue a global function
.controller('func',
	function(scope, el, value) {

		value(scope, el, value);

	})

// highlight block with highlightjs
.controller('highlight',
	function(scope, el) {

		hljs.highlightBlock(el);

	})

// hide specified element from dom on click
.controller('exit',
	function(scope, el, value) {

		$(el).on('click', function() {

			$(value).hide();
			$(el).hide();

		});

	});