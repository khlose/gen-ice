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
        $scope.products.push({key:value,value:key});
      
      });
    });
    console.log($scope.products);
    $scope.selected = $scope.products[0];
  
    $scope.ice_amount = 0;
    $scope.ice_price = 0;
  $scope.elec_cost = 4;
  $scope.water_cost = 15.8;
  
  console.log($scope.selected);

  
  
    $scope.per_month_ice_cost = $scope.ice_amount * $scope.ice_price * 30;
    $scope.calculate = function(){
      console.log($scope.ice_amount);
    }
    
    $scope.update_monthly_ice = function(){
      /*$scope.per_month_ice_cost = $scope.ice_amount * $scope.ice_price * 30;*/
      console.log("update1");
      $scope.per_month_ice_cost = $scope.ice_amount * $scope.ice_price;
    }
    $scope.update_electricity_water_cost = function(){
      console.log("update2");
      
    }
  
  });
