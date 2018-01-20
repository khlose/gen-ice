'use strict';

/**
 * @ngdoc function
 * @name genIceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the genIceApp
 */
angular.module('genIceApp')
  .controller('MainCtrl', function ($scope,$firebaseObject) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   $scope.users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];
    const rootRef = firebase.database().ref().child('products');
    const ref = rootRef.child('icemaker');
    const showcase = ref.orderByChild('showcase').equalTo(true);
    this.products = $firebaseObject(showcase);

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

