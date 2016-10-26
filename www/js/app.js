// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// var db = null;

angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform /*, $cordovaSQLite */) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    // db = $cordovaSQLite.openDB({nome:"my.db"});
  });
})

.controller('videoController', function($scope, $cordovaCapture){

  $scope.captureVideo = function(){
    var options = {limit: 1, duration: 1};

    $cordovaCapture.captureVideo(options).then(function(videoData){
    },function(err){

    });
  };
});

// example.controller("ExampleController", function($scope) {
//
// });

// module.controller('MyCtrl', function($scope, $cordovaSQLite) {
//
//   var db = $cordovaSQLite.openDB({ name: "my.db" });
//
//   // for opening a background db:
//   var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1 });
//
//   $scope.execute = function() {
//     var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
//     $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
//       console.log("insertId: " + res.insertId);
//     }, function (err) {
//       console.error(err);
//     });
//   };
//
// });

