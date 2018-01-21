'use strict';

/**
 * @ngdoc overview
 * @name genIceApp
 * @description
 * # genIceApp
 *
 * Main module of the application.
 */
var config = {
    apiKey: "AIzaSyAnDVJNrjdoZHgqKzKMsUm1DizldJ1QNaA",
    authDomain: "hok-thailand.firebaseapp.com",
    databaseURL: "https://hok-thailand.firebaseio.com",
    projectId: "hok-thailand",
    storageBucket: "hok-thailand.appspot.com",
    messagingSenderId: "600647387700"
  };
  firebase.initializeApp(config);
 
angular
  .module('genIceApp', [
    'firebase',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store'
      })
      .when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/why', {
        templateUrl: 'views/why.html',
        controller: 'WhyCtrl',
        controllerAs: 'why'
      })
      .when('/joinus', {
        templateUrl: 'views/joinus.html',
        controller: 'JoinusCtrl',
        controllerAs: 'joinus'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
