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
    
    var wholeFamily = $scope.currentProduct.family;
    
    $scope.relatedProduct = [];
    
    if(wholeFamily != null && wholeFamily.length > 0){
      var filteredFamily = wholeFamily.filter(function(e){return e !== $scope.currentProduct.model});
      filteredFamily.forEach(function(entry){
        
        var modelInFamily = $firebaseObject(ref.orderByChild('model').equalTo(entry).limitToFirst(1));
        modelInFamily.$loaded().then(function(){
          $scope.relatedProduct.push(modelInFamily[entry]);
        });
      });
      $scope.dataLoaded = true;
    }
    else{
      $scope.dataLoaded = true;
    }
    



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
        
        type: "info",
        showCloseButton: true,
        showConfirmButton:false,
        html:
        '<h2 style="margin-top:0px">คลิกด้านล่างเพื่อติดต่อสินค้า</h2>' +
    '<a href="https://www.facebook.com/GenIceThailand/"><i class="fab fa-facebook fa-lg" style="color:#3B5998; font-size:50px;"></i></a> ' +
    '<a href="https://line.me/R/ti/p/%40ndz5205f"><img src="images/LINE@_APP_typeA.png" style="width:50px;height:auto; margin-top:-20px;"></li></a> ' +
        '<br><h3">หรือโทร 098-267-5292</h3>'
      });
      

      
      
      
    }
  };
  

});