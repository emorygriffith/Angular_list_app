( function(){
  angular.module('Musicians')
    .constant('UserController', ['$scope', '$firebaseAuth', 'FIREBASE_URI',
      function($scope, $firebaseAuth, FIREBASE_URI) {

        var usersRef = new Firebase(FIREBASE_URI);
        $scope.authObj = $firebaseAuth(usersRef);

        $scope.register = function(newUser){
          

        }



      }

    ]);



}());
