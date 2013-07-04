
"use strict";

/* Create Lure Object */
var App = new Lure( $("[x-view]") );

/* Routes  */
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
App.controller("HomeCtrl", function(scope) {

	console.log(scope);

})

.controller("ModelCtrl", function(scope) {

	console.log(scope);

})

.controller("ViewCtrl", function(scope) {

	console.log(scope);

})

.controller("ControllerCtrl", function(scope) {

	console.log(scope);

})

.controller("AboutCtrl", function(scope) {

	console.log(scope);

})

.controller("DocsCtrl", function(scope) {

	console.log(scope);

})

.controller("DictionaryCtrl", function(scope) {

	console.log(scope);

});

/* DOM Controllers */
App.controller("link", function(scope, el, value) {

		$(el).on("click", function() {
			window.location.href = value;
		});

	})

.controller("click", function(scope, el, value, controllers) {

		$(el).on("click", function(event) {
			controllers[value](scope, el, event);
		});

	})

.controller("cloak", function(scope, el) {

		$(el).css("display", "none");

	})

.controller("class", function(scope, el, value) {

		$(el).addClass(value);

	})

.controller("value", function(scope, el, value) {

		$(el).val(value);

	})

.controller("func", function(scope, el, value) {

		value(scope, el, value);

	})

.controller("highlight", function(scope, el) {

		hljs.highlightBlock(el, "&nbsp;");

	})

.controller("exit", function(scope, el, value) {

		$(el).on("click", function() {

			$(value).hide();
			$(el).hide();

		});

	});

/** Initialize Lure App **/
App.init();