
/* ------------------------
 *  Lure.js
 *  by tylerbuchea.com
 * ------------------------ */

/* Private Namespace */
function Lure(viewContainer) {

    /* ---------------------------------------------------------------------------
     *  Private API
     * --------------------------------------------------------------------------- */

    /* Globals */
    var controllers = {}; 
    var routes = {};
    var scope = {};
    var thisRoute;

    /* Init Route */
    var initRoute = function() {

        thisRoute = window.location.hash.split("#")[1];
        var route = routes[thisRoute];

        if(route) {
            scope = {};
            controllers[route.controller](scope);
            updateView(route.templateUrl);
        }

    };

    /* Run Controllers */
    var runControllers = function() {

        $.each(controllers, function(name, controller) {

            $("[x-"+name+"]").each(function(index, el) {

                var value = $(el).attr("x-"+name);

                controller(scope, el, value, controllers);

            });                

        });

    };

    /* Update View */
    var updateView = function(templateUrl) {

        // get template
        $.get(templateUrl, function(html) {

            // store model
            var model = scope; 

            // prepare template
            var template = Handlebars.compile(html);

            // create view from model & template
            var view = template(model);

            // update view-container
            $(viewContainer).html(view);

            // run controllers
            runControllers();

        });

    };

    /* ---------------------------------------------------------------------------
     *  Public API
     * --------------------------------------------------------------------------- */

    /* Add Controller */
    this.controller = function(name, callback) {    

        controllers[name] = callback;
        return this;

    };

    /* Add Route */
    this.route = function(name, config) {

        routes[name] = config;
        return this;

    };

    /* Http Request */
    this.http = function(config) {   

        config.complete = function() {
            updateView(routes[thisRoute].templateUrl);
        };
        $.ajax(config);

    };

    /* Init */
    this.init = function() {

        if (!window.location.hash)
            window.location.hash = "/";

        window.onpopstate = function(event) {
            if(!history.state)
                initRoute();
        };

        initRoute();

    };

}