// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
Date.prototype.toStringDB = function() {
  var mes = this.getMonth() + 1;
  var dia = this.getDate();
  var hora = this.toTimeString().split(' ')[0];
  return [this.getFullYear() + '-', !mes[1] && '0', mes + '-', !dia[1] && '0', dia, ' ',hora].join('');
};

var db = null;

angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform , $cordovaSQLite) {
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
    db = $cordovaSQLite.openDB({name:"app.db", location: 2, createFromLocation: 1});
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, username TEXT NOT NULL, email TEXT, name TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL, active INTEGER NOT NULL, unique(username))")
        .then(function (result) {}, function (error){});

    $cordovaSQLite.execute(db, "SELECT id FROM user WHERE active = 1 LIMIT 1")
        .then(function (result) {
          if (result.rows.length === 0) {
            $cordovaSQLite.execute(db, "INSERT INTO user (name, username, active, created_at, updated_at) VALUES ('', 'user1', 1, ?, ?)", [DatetimeNow, DatetimeNow])
                .then(function (result) {}, function (error){});
          }
        }, function (error){});
  });
})

.controller('videoController', function($scope, $cordovaCapture){

  $scope.captureVideo = function(){
    var options = {limit: 1, duration: 1};

    $cordovaCapture.captureVideo(options).then(function(videoData){
    },function(err){
    });
  };
})

.controller('myScore',function($scope, $ionicPlatform, $cordovaSQLite, $cordovaCapture) {
  var DatetimeNow = new Date().toStringDB();
  $scope.insertScore = function() {
    if (!window.cordova) return; // Se for navegador ignorar sqlite transactions
    if (VideoData !== "0") {
      var query = "INSERT INTO score (user_id, active, maxscore, score, created_at, updated_at) VALUES (1, 1, ?, ?, ?, ?)";
      $cordovaSQLite.execute(db, query, [maxscore, score, DatetimeNow, DatetimeNow])
          .then(function(result) {}, function(error) {});
    }
  }
});
$window.angularControllerInsertScore = $scope.insertScore;
$window.angularControllerUpdateConfig = $scope.updateConfig;
