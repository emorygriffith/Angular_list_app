( function () {

  angular.module('Musicians')
    .controller('MusiciansListController', ['$scope', 'FIREBASE_URI', '$firebase',
      function($scope, FIREBASE_URI, $firebase){
        console.log("hello");

        var musiciansRef = new Firebase(FIREBASE_URI + 'musicians');

        $scope.musicians = $firebase(musiciansRef).$asArray();

        $scope.title = "Musician List",

        $scope.addMusician = function(musician){
          $scope.musicians.$add(musician);
          $('#addForm')[0].reset();
        };

        $scope.deleteMusician = function(musician){
          $scope.musicians.$remove(musician);
        };



      }






    ]);





} ());
