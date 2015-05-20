steleApp.controller('mudrasController', ['$scope', '$firebaseArray', 'FIREBASE_URL', function($scope, $firebaseArray, FIREBASE_URL) {

	var ref = new Firebase(FIREBASE_URL);

	$scope.mudraData = $firebaseArray(ref);

	$scope.addMudra = function() {
		var postsRef = ref;
		postsRef.push({
			fullname: $scope.adding_mudra.fullname,
			title: $scope.adding_mudra.title,
			wish: $scope.adding_mudra.wish,
			email: $scope.adding_mudra.email,
			timestamp: Firebase.ServerValue.TIMESTAMP,
			imageurl: imageUpped
		});
		$scope.adding_mudra = "";
		$scope.myform.$setUntouched();
	}

	var imageUpped;

	$scope.addImage = function( new_image ){

	  filepicker.setKey("AdPlL1v8nRQSF6poQO8nyz");

	  filepicker.pick(
	  {
	    mimetypes: ['image/*', 'text/plain'],
	    container: 'window',
	    services:['COMPUTER'],
	  },
	  function(Blob){
	    imageUpped = Blob.url;
	    console.log(imageUpped);
	  },
	  function(FPError){
	    console.log(FPError.toString());
	  }
	  );
	}

}]);

steleApp.controller('mudraViewController', ['$scope', '$firebaseArray', '$routeParams', 'FIREBASE_URL', function($scope, $firebaseArray, $routeParams,
	FIREBASE_URL) {

	// var ref = new Firebase(FIREBASE_URL);
	// var postRef = ref.child('data');
	// $scope.mudraData = $firebaseArray(ref);

	//$scope.mudra_title = $routeParams.mudra_title;
	//var mudra_title = $routeParams.mudra_title;
	//var mudraData = new Firebase(FIREBASE_URL + mudra_title);

	//console.log(postRef.key()); // this points to the key and objects within on firebase

	//console.log(postRef);

	
	var ref = new Firebase(FIREBASE_URL);
	$scope.mudraData = $firebaseArray(ref);
	
	ref.once('value', function(nameSnapshot) {
	  var val = nameSnapshot.val();
	  
	  console.log(val);

	});

	

}]);






