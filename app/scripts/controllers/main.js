'use strict';

/**
 * @ngdoc function
 * @name genIceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the genIceApp
 */
angular.module('genIceApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   $scope.users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];
  })
 .controller('HeaderCtrl', function ($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  })
 .controller('swiperCtrl', function ($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  });

