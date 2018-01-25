'use strict';

/**
 * @ngdoc function
 * @name genIceApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the genIceApp
 */
angular.module('genIceApp')
  .controller('ProductCtrl', function ($routeParams,$firebaseObject) {
  console.log($routeParams.sku);
  const ref = firebase.database().ref().child('products').child('icemaker');
  
  this.product = $firebaseObject(ref.orderByChild('model').equalTo($routeParams.sku));
  
  });
