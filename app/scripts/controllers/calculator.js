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
  
  
  }).controller('RecommendationCtrl', function ($firebaseObject,$scope,$uibModal,$uibModalStack) {
  $scope.ice_amount = 120;
  $scope.ice_price = 2.5;
  $scope.elec_cost = 4.20;
  $scope.water_cost = 15.80;
  
  $scope.selectedModel = {
        "daily_elec_unit" : 5.83,
        "daily_water_unit" : 0.04,
        "price" : 34112,
        "production" : 39,
        "production_range" : "30-39"
      }
  
  $scope.daily_ice_cost = $scope.ice_amount * $scope.ice_price;
  $scope.monthly_ice_cost = $scope.daily_ice_cost*30;

  
   $scope.updateCalculation = function(){
     $scope.daily_ice_cost = ($scope.ice_amount * $scope.ice_price).toFixed(2);
     $scope.monthly_ice_cost = ($scope.daily_ice_cost*30).toFixed(2);
     $scope.monthly_utility_cost = ((($scope.elec_cost * $scope.selectedModel.daily_elec_unit) + ($scope.water_cost * $scope.selectedModel.daily_water_unit))*30).toFixed(2);
     $scope.annual_utility_cost = ($scope.monthly_utility_cost * 12).toFixed(2);
     $scope.daily_ice_machine = ((($scope.elec_cost * $scope.selectedModel.daily_elec_unit) + ($scope.water_cost * $scope.selectedModel.daily_water_unit)) / $scope.selectedModel.production).toFixed(2);
     $scope.per_year_save = (($scope.daily_ice_cost -  $scope.daily_ice_machine)*365).toFixed(2);
     $scope.break_even = ($scope.selectedModel.price * 12 / $scope.per_year_save).toFixed(2);
    }
   
   
   $scope.products = []; 
  

   $scope.showHiddenSelectedModel = false;

   $scope.showRecommendation = function(){
     var modalInstance = $uibModal.open({
       animation: $scope.animationEnabled,
       templateUrl:'views/recommendedItemModal.html',
       controller:'ModalInstanceCtrl',
       resolve:{
         models: function(){
           return $scope.products;
         }
       }
       
     });
     
     modalInstance.result.then(function (selectedItem) {
       $scope.selectedModel = selectedItem;
       $scope.showHiddenSelectedModel = true;
       $scope.updateCalculation();
       $uibModalStack.dismissAll();
     },function(){
       $uibModalStack.dismissAll();
     });
   };
  
  
   $scope.calculate = function(){
     $scope.products = [];
     const rootRef = firebase.database().ref().child('products');
     const ref = rootRef.child('icemaker').orderByChild('production').startAt($scope.ice_amount).endAt($scope.ice_amount*1.2);
     
     var rawProd = $firebaseObject(ref);
     
     
     rawProd.$loaded().then(function(){
       angular.forEach(rawProd,function(key,value){
         $scope.products.push({key:value,value:key});
       });
       
       if($scope.products.length != 0){
         $scope.showRecommendation();
       }
       else{
         swal({ 
        title: "ขออภัยค่ะ",
        text: "ไม่พบสินค้าที่ตรงกับความต้องการ ปริมาณน้ำแข็งที่ซื้อต่อวันอาจน้อยไปหรือมากไปค่ะ",
        type: "error",
        confirmButtonText: "ปิด",
           
         })
       }
     });
     
    
     
     
 
 
   }
  
  
   
   
   
    
  //$modalInstance
  }).controller('ModalInstanceCtrl', function ($scope, models,$uibModalInstance,$uibModalStack){
    $scope.recommendedModels = models;
    $scope.selectedModel = null;
    $scope.ok = function (selected) {
      $scope.selectedModel = selected;
      
      $uibModalInstance.close($scope.selectedModel);
    }
    $scope.close = function(){
      $uibModalStack.dismissAll();
    }
  
  
  });
