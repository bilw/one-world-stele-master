var steleApp = angular.module("oneWorldSteleApp", ["ngRoute","firebase"])
.constant("FIREBASE_URL", "https://stele-test-02.firebaseio.com/data");

steleApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider
	.when("/", {
		redirectTo: "/mudras"
	})
	.when("/portfolio/:portfolio_name", {
		controller: "SteleViewController",
		templateUrl: "app/partials/portfolio_view.html"
	})
	.when("/mudras", {
		controller: "mudrasController",
		templateUrl: "app/partials/mudras.html"
	})
	.otherwise({ 
		redirectTo: "/404_page" 
	});
}]);

