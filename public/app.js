'use strict';

// Declare app level module which depends on views, and components
angular.module('topSongs', [
  'ngRoute',
  'topSongs.songs',
  'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/songs'});
}]);