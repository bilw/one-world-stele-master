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

});

