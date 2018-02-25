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
        console.log(entry);
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
    console.log($scope.relatedProduct);



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
        title: "สินค้าหมด",
        text: "กรุณาสั่งซื้อผ่านทางอีเมล์ ระบบจะทำการเปิดแอพอีเมล์อัตโนมัติ",
        type: "error",
        confirmButtonText: "ไปที่หน้าอีเมล์",
        showCancelButton: true
        
      }).then(function(result) {
        if(result.value)
          window.location.href = "mailto:genice@hokgroup.co.th?subject=Purchase order for " + $scope.currentProduct.model + "&body=I'm interested in buying " + $scope.currentProduct.model+" Please contact me back through this email.";
      });;
      
/*      swal({
        title: 'Submit email to run ajax request',
        html: "<form action=\"https://formspree.io/your@email.com\" method=\"POST\"><input type=\"text\" name=\"name\"><input type=\"email\" name=\"_replyto\"><input type=\"submit\" value=\"Send\"></form>"
        
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
      });*/
      
      
/*      swal({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: (email) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              if (email === 'taken@example.com') {
                swal.showValidationError(
                  'This email is already taken.'
                )
              }
              resolve()
            }, 2000)
          })
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((result) => {
        if (result.value) {
          swal({
            type: 'success',
            title: 'Ajax request finished!',
            html: 'Submitted email: ' + result.value
          })
        }
      })*/
      
      
      
    }
  };
  

});