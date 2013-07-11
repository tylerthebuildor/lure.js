
"use strict";

/* Create New Lure Object */
var App = new Lure( $("[x-view]") );

/* Routes */
App.route("/", {

		templateUrl: "views/home.html",
		controller: "HomeCtrl"

	})

.route("/model", {

		templateUrl: "views/model.html",
		controller: "ModelCtrl"

	})

.route("/view", {

		templateUrl: "views/view.html",
		controller: "ViewCtrl"

	})

.route("/controller", {

		templateUrl: "views/controller.html",
		controller: "ControllerCtrl"

	})

.route("/about", {

		templateUrl: "views/about.html",
		controller: "AboutCtrl"

	})

.route("/docs", {

		templateUrl: "views/docs.html",
		controller: "DocsCtrl"

	})

.route("/dictionary", {

		templateUrl: "views/dictionary.html",
		controller: "DictionaryCtrl"

	});

/* Route Controllers */
App.controller("HomeCtrl", 
	function(model) {

		console.log(model);

	})

.controller("ModelCtrl", 
	function(model) {

		console.log(model);

	})

.controller("ViewCtrl", 
	function(model) {

		console.log(model);

	})

.controller("ControllerCtrl", 
	function(model) {

		console.log(model);

	})

.controller("AboutCtrl", 
	function(model) {

		console.log(model);

	})

.controller("DocsCtrl", 
	function(model) {

		console.log(model);

	})

.controller("DictionaryCtrl", 
	function(model) {

		console.log(model);

	});

/* DOM Controllers */
App.controller("link", 
	function(model, el, value) {

		$(el).on("click", function() {
			window.location.href = value;
		});

	})

.controller("click", 
	function(model, el, value, controllers) {

		$(el).on("click", function(event) {
			controllers[value](model, el, event);
		});

	})

.controller("cloak", 
	function(model, el) {

		$(el).css("display", "none");

	})

.controller("class", 
	function(model, el, value) {

		$(el).addClass(value);

	})

.controller("value", 
	function(model, el, value) {

		$(el).val(value);

	})

.controller("func", 
	function(model, el, value) {

		value(model, el, value);

	})

.controller("highlight", 
	function(model, el, value, controllers) {

		hljs.highlightBlock(el, "&nbsp;");

	})

.controller("exit", 
	function(model, el, value) {

		$(el).on("click", function() {

			$(value).hide();
			$(el).hide();

		});

	});

/** Initialize Lure App **/
App.init();