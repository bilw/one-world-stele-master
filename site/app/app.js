var steleApp = angular.module('oneWorldSteleApp', ['ngRoute', 'firebase'])
.constant('FIREBASE_URL', 'https://stele-test-02.firebaseio.com/data');

steleApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		redirectTo: '/mudras'
	})
	.when('/mudras/:mudra_title', {
		controller: 'mudraViewController',
		templateUrl: 'partials/mudra_view.html'
	})
	.when('/mudras', {
		controller: 'mudrasController',
		templateUrl: 'partials/mudras_circle.html'
	})
	.otherwise({ 
		redirectTo: '/404_page'
	});
}]);

