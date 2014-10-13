'use strict';

/**
 * @ngdoc overview
 * @name sonogramApp
 * @description
 * # sonogramApp
 *
 * Main module of the application.
 */
angular
  .module('sonogramApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'oauth.io'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lastfm', {
        templateUrl: 'views/lastfm.html',
        controller: 'LastfmCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function (OAuthProvider) {
    OAuthProvider.setPublicKey('kdcirtiDCozlPuVPolzR6KuD530');
  });
