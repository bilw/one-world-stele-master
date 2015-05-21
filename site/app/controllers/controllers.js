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

steleApp.controller('mudraViewController', ['$scope', '$routeParams', '$firebaseArray', '$firebaseObject', 'FIREBASE_URL', function($scope, $routeParams, $firebaseArray, $firebaseObject, FIREBASE_URL) {

	// $scope.mudra_title = $routeParams.mudra_title;
	// $scope.mudra_email = $routeParams.mudra_email;
  	
	// var mudra_title = $routeParams.mudra_title;
	// var pushImg = new Firebase(FIREBASE_URL + '/' + mudra_title);

    //$scope.mudraData = $firebaseObject(pushImg);

    // console.log(mudra_title);
    // console.log(pushImg);
	
	var ref = new Firebase(FIREBASE_URL);
	$scope.mudraData = $firebaseArray(ref);
	
	ref.once('value', function(nameSnapshot) {
	  //var val = nameSnapshot.val();
	  var key = nameSnapshot.key();
	  var firstNameSnapshot = nameSnapshot.child('-JpJu-bqRvfXStpQ1QZE/email');
	  var firstName = firstNameSnapshot.val();
	  
	  console.log(nameSnapshot.val());
	  console.log(key);
	  console.log(firstName);
	  console.log(nameSnapshot.key());

	});
	

}]);






