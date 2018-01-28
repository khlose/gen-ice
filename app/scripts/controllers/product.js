'use strict';

/**
 * @ngdoc function
 * @name genIceApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the genIceApp
 */
angular.module('genIceApp')
  .controller('ProductCtrl', function ($scope,$routeParams,$firebaseObject,$timeout) {
  const ref = firebase.database().ref().child('products').child('icemaker');
  var prod = $firebaseObject(ref.orderByChild('model').equalTo($routeParams.sku).limitToFirst(1));
  $scope.dataLoaded = false;
  prod.$loaded().then(function(){
    $scope.currentProduct = prod[$routeParams.sku];
    $scope.dataLoaded = true;
  });
  
  
  $scope.added = false;
  $scope.add = function(product){
    //if(cart.$add(product, 1)){
    if(false){  
      $scope.added = true;
      $timeout(function(){
        $scope.added = false;
      },2000); // Amount of time to show added to cart success message
    }
    else{
      
      
      swal({
        type: 'error',
        title: 'สินค้าหมด',
        text: 'กรุณาสั่งซื้อผ่านทางอีเมล์',
        footer: '<a href="#!/contact">ไปที่หน้าอีเมล์</a>',
      });
    }
  };
  console.log(prod);
  
  });
