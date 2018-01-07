'use strict';

/**
 * @ngdoc function
 * @name genIceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the genIceApp
 */
angular.module('genIceApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
 .controller('HeaderCtrl', function ($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  });