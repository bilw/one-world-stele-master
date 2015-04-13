//steleApp.controller("SteleImageController", SteleImageController);

steleApp.controller("mudrasController", function($scope, $firebaseArray, FIREBASE_URL){

  var ref = new Firebase(FIREBASE_URL);

  $scope.mudraData = $firebaseArray(ref);

  // var postsRef = ref.child("mudras");
  // postsRef.push({
  //   author: "gracehop",
  //   title: "Announcing COBOL, a New Programming Language"
  // });

});

