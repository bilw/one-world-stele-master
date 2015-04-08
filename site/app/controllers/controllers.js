//steleApp.controller("SteleImageController", SteleImageController);

steleApp.controller("mudrasController", function($scope, $firebaseArray){

  var ref = new Firebase("https://stele-test-01.firebaseio.com/data");

  $scope.mudraData = $firebaseArray(ref);

});

