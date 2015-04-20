steleApp.controller("mudrasController", function($scope, $firebaseArray, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL);

	$scope.mudraData = $firebaseArray(ref);

	$scope.addMudra = function() {
		var postsRef = ref;
		postsRef.push({
			fullname: $scope.adding_mudra.fullname,
			title: $scope.adding_mudra.title,
			wish: $scope.adding_mudra.wish,
			email: $scope.adding_mudra.email,
			timestamp: Firebase.ServerValue.TIMESTAMP
		});

		$scope.adding_mudra = "";

		$scope.adding_mudra = function() {
			focus(adding_mudra.fullname);
		}
		//$scope.focus(fullname);

		//$scope.adding_mudra.$setUntouched();

	}

	

});

