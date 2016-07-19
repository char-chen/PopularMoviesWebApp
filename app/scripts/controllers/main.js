'use strict';

/**
 * @ngdoc function
 * @name movieWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieWebAppApp
 */
angular.module('movieWebAppApp')
  .controller('MainCtrl', ['$scope', 'movieService', function ($scope, movieService) {
    var promise = movieService.getPopularMovies();
    promise.then(function (payload) {
      $scope.listingData = payload.data;

      var movies = [];
      for (var i = 0; i < $scope.listingData.results.length; i++) {
        var tempActivity = movieService.getAggieFeedActivity();
        var tempResult = $scope.listingData.results[i];
        tempActivity.activity.icon = "icon-play";
        tempActivity.activity.actor.id = "";
        tempActivity.activity.actor.objectType = "Movie";
        tempActivity.activity.actor.displayName = tempResult.original_title;
        tempActivity.activity.verb = "post";
        tempActivity.activity.title = tempResult.original_title;
        tempActivity.activity.object.ucdSrcId = "content identifier";
        tempActivity.activity.object.objectType = "notification";
        tempActivity.activity.object.content = tempResult.overview;
        tempActivity.activity.object.contentImage.dimensions.normal.url = "http://image.tmdb.org/t/p/w342/" + tempResult.poster_path;
        tempActivity.activity.object.contentImage.dimensions.normal.width = 400;
        tempActivity.activity.object.contentImage.dimensions.normal.height = 280;
        tempActivity.activity.object.contentImage.dimensions.high.url = "http://image.tmdb.org/t/p/w500/" + tempResult.poster_path;
        tempActivity.activity.object.contentImage.dimensions.high.width = 400;
        tempActivity.activity.object.contentImage.dimensions.high.height = 280;
        movies[i] = tempActivity;
      }
      $scope.popular_movies = movies;
    });
  
    promise = movieService.getTopRatedMovies();
    promise.then(function (payload) {
      $scope.listingData = payload.data;
    
      var movies = [];
      for (var i = 0; i < $scope.listingData.results.length; i++) {
        var tempActivity = movieService.getAggieFeedActivity();
        var tempResult = $scope.listingData.results[i];
        tempActivity.activity.icon = "icon-play";
        tempActivity.activity.actor.id = "";
        tempActivity.activity.actor.objectType = "Movie";
        tempActivity.activity.actor.displayName = tempResult.original_title;
        tempActivity.activity.verb = "post";
        tempActivity.activity.title = tempResult.original_title;
        tempActivity.activity.object.ucdSrcId = "content identifier";
        tempActivity.activity.object.objectType = "notification";
        tempActivity.activity.object.content = tempResult.overview;
        tempActivity.activity.object.contentImage.dimensions.normal.url = "http://image.tmdb.org/t/p/w342/" + tempResult.poster_path;
        tempActivity.activity.object.contentImage.dimensions.normal.width = 400;
        tempActivity.activity.object.contentImage.dimensions.normal.height = 280;
        tempActivity.activity.object.contentImage.dimensions.high.url = "http://image.tmdb.org/t/p/w500/" + tempResult.poster_path;
        tempActivity.activity.object.contentImage.dimensions.high.width = 400;
        tempActivity.activity.object.contentImage.dimensions.high.height = 280;
        movies[i] = tempActivity;
      }
      $scope.top_rated_movies = movies;
    });
  }]);
