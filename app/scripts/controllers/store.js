'use strict';

/**
 * @ngdoc function
 * @name genIceApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the genIceApp
 */
angular.module('genIceApp')
  .controller('StoreCtrl', function ($firebaseObject) {
    const rootRef = firebase.database().ref().child('products');
    const ref = rootRef.child('icemaker');
    this.products = $firebaseObject(ref);
  });
