'use strict';

/**
 * @ngdoc function
 * @name genIceApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the genIceApp
 */
angular.module('genIceApp')
  .controller('CalculatorCtrl', function ($firebaseObject,$scope) {
  
    const rootRef = firebase.database().ref().child('products');
    const ref = rootRef.child('icemaker');
    
    var rawProd = $firebaseObject(ref);
    
 
    //console.log($scope.selected);
    //console.log(rawProd);
    $scope.products = [];
    rawProd.$loaded().then(function(){
      angular.forEach(rawProd,function(key,value){
        console.log(key);
        $scope.products.push({key:value,value:key});
      
      });
    });
  
  });
