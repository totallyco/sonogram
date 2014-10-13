'use strict';

/**
 * @ngdoc function
 * @name sonogramApp.controller:LastfmCtrl
 * @description
 * # LastfmCtrl
 * Controller of the sonogramApp
 */
angular.module('sonogramApp')
  .controller('LastfmCtrl', function($scope, $http) {
    
    var url = 'http://ws.audioscrobbler.com/2.0/';
    var params = {
        method: 'user.getrecenttracks',
        api_key: '1ab59468438da1a16c5f1326a9f8f61d',
        limit: 12,
        user: 'zotterdas',
        format: 'json'
    };
    $http.get(url, { params: params })
        .success(function (data) {
            $scope.songs = data.recenttracks.track;
        })
        .error(function (data, status) {
            console.log(data || 'Request failed');
            console.log(status);
        }); 

  });
