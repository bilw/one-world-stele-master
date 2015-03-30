var steleApp = angular.module("oneWorldSteleApp", ["ngRoute"]);
steleApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		redirectTo: "/portfolios"
	})
	.when("/portfolio/:portfolio_name", {
		controller: "SteleViewController",
		templateUrl: "app/partials/portfolio_view.html"
	})
	.when("/portfolios", {
		controller: "SteleImageController",
		templateUrl: "app/partials/portfolio_list_partial.html"
	})
	.otherwise({ redirectTo: "/404_page" 
	});
});