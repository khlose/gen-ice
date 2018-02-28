'use strict';

/**
 * @ngdoc function
 * @name genIceApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the genIceApp
 */
angular.module('genIceApp')
  .controller('CalculatorCtrl', function () {
  
  
  }).controller('RecommendationCtrl', function ($firebaseObject,$scope) {
  $scope.ice_amount = 120;
  $scope.ice_price = 2.5;
  $scope.elec_cost = 4.20;
  $scope.water_cost = 15.80;
  
  
  $scope.per_day_ice_cost = $scope.ice_amount * $scope.ice_price;
  $scope.per_month_ice_cost = $scope.per_day_ice_cost*30;
      
  
   $scope.update_monthly_ice = function(){
      /*$scope.per_month_ice_cost = $scope.ice_amount * $scope.ice_price * 30;*/
      $scope.per_day_ice_cost = $scope.ice_amount * $scope.ice_price;
      $scope.per_month_ice_cost = $scope.per_day_ice_cost*30;
      
    }
   
   $scope.calculate = function(){
     
     
     const rootRef = firebase.database().ref().child('products');
     const ref = rootRef.child('icemaker').orderByChild('production').startAt($scope.ice_amount);
     
     var rawProd = $firebaseObject(ref);
     
     $scope.products = []; 
     rawProd.$loaded().then(function(){
       angular.forEach(rawProd,function(key,value){
         $scope.products.push({key:value,value:key});
       });
       
       
       console.log($scope.products);
       
       
       
     });
     
     
     
     
     
     
   }
  
  
    
  
  }).controller('BreakevenCtrl', function ($firebaseObject,$scope) {
  
  
  $scope.ice_amount = 200;
  $scope.ice_price = 2.5;
  $scope.elec_cost = 4.20;
  $scope.water_cost = 15.80;
  $scope.discount = 0;
  $scope.product_price = 0;
  
      $scope.per_day_ice_cost = $scope.ice_amount * $scope.ice_price;
  $scope.per_month_ice_cost = $scope.per_day_ice_cost *30;
  
  
    const rootRef = firebase.database().ref().child('products');
    const ref = rootRef.child('icemaker');
    
    var rawProd = $firebaseObject(ref);
    
 
    $scope.products = [];
    rawProd.$loaded().then(function(){
      angular.forEach(rawProd,function(key,value){
        $scope.products.push({key:value,value:key});
      
      });
      $scope.selected = $scope.products[0];
      
      
      $scope.daily_elec_unit = $scope.selected.value.daily_elec_unit;
      $scope.daily_water_unit = $scope.selected.value.daily_water_unit;
      
      $scope.daily_elec_cost = ($scope.daily_elec_unit * $scope.elec_cost).toFixed(2);
      $scope.daily_water_cost = ($scope.daily_water_unit * $scope.water_cost).toFixed(2);
      
      $scope.production_rate = $scope.selected.value.production;
      $scope.icetype = $scope.selected.value.icetype;
      $scope.capacity = $scope.selected.value.capacity;
      $scope.dimension = $scope.selected.value.dimension;
      
      $scope.daily_utility = (parseFloat($scope.daily_elec_cost) + parseFloat($scope.daily_water_cost)).toFixed(2);
      $scope.monthly_utility = ($scope.daily_utility * 30).toFixed(2);
      
      $scope.monthly_save = (parseFloat($scope.per_month_ice_cost) - parseFloat($scope.monthly_utility)).toFixed(2);
      
      $scope.break_even = (parseFloat($scope.product_price * (100-$scope.discount)/100)/parseFloat($scope.monthly_save)).toFixed(2);   
    });


    
  
  
  $scope.calculate = function(){
      console.log($scope.ice_amount);
    }
    
  
  
  
    $scope.update_monthly_ice = function(){
      /*$scope.per_month_ice_cost = $scope.ice_amount * $scope.ice_price * 30;*/
      $scope.per_day_ice_cost = $scope.ice_amount * $scope.ice_price;
      $scope.per_month_ice_cost = $scope.per_day_ice_cost*30;
      
            $scope.monthly_save = (parseFloat($scope.per_month_ice_cost) - parseFloat($scope.monthly_utility)).toFixed(2);
      
            $scope.break_even = (parseFloat($scope.product_price * (100-$scope.discount)/100)/parseFloat($scope.monthly_save)).toFixed(2);
      console.log($scope.discount);
      
      
    }
    
    
    
    
    $scope.update_electricity_water_cost = function(){
      
      $scope.daily_elec_unit = $scope.selected.value.daily_elec_unit;
      $scope.daily_water_unit = $scope.selected.value.daily_water_unit;
      
      $scope.daily_elec_cost = ($scope.daily_elec_unit * $scope.elec_cost).toFixed(2);
      $scope.daily_water_cost = ($scope.daily_water_unit * $scope.water_cost).toFixed(2);
            $scope.production_rate = $scope.selected.value.production;
      $scope.icetype = $scope.selected.value.icetype;
      $scope.capacity = $scope.selected.value.capacity;
      $scope.dimension = $scope.selected.value.dimension;
      
      $scope.daily_utility = (parseFloat($scope.daily_elec_cost) + parseFloat($scope.daily_water_cost)).toFixed(2);
      $scope.monthly_utility = ($scope.daily_utility * 30).toFixed(2);
      
      
      $scope.monthly_save = (parseFloat($scope.per_month_ice_cost) - parseFloat($scope.monthly_utility)).toFixed(2);
      
      $scope.break_even = (parseFloat($scope.product_price * (100-$scope.discount)/100)/parseFloat($scope.monthly_save)).toFixed(2);
      
      
      console.log($scope.discount);
      
    }
  
  
});
