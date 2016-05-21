
'use strict';

angular.module('topSongs.songs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/songs', {
    templateUrl: 'view1/view1.html',
    controller: 'SongsCtrl'
  });
}])

.controller('SongsCtrl', ['$scope', '$http', function($scope, $http) {
    var mainInfo = $http.get('/songs').success(function(data) {
        $scope.songs = data.songs;
    });
}]);