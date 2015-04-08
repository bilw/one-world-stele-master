var steleApp = angular.module("oneWorldSteleApp", ["ngRoute"]);
steleApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		redirectTo: "/mudras"
	})
	.when("/portfolio/:portfolio_name", {
		controller: "SteleViewController",
		templateUrl: "app/partials/portfolio_view.html"
	})
	.when("/mudras", {
		controller: "SteleImageController",
		templateUrl: "app/partials/mudra_viewer_partial.html"
	})
	.otherwise({ redirectTo: "/404_page" 
	});
});