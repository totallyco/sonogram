'use strict';

/**
 * @ngdoc function
 * @name sonogramApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sonogramApp
 */
angular.module('sonogramApp')
  .controller('MainCtrl', function($scope, OAuth){

    $scope.twitterSignIn = function(){
      OAuth.popup('twitter');
    };

    $scope.facebookSignIn = function(){
      OAuth.popup('facebook');
    };
  });
