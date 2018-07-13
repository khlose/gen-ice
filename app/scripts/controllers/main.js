'use strict';

/**
 * @ngdoc function
 * @name genIceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the genIceApp
 */
angular.module('genIceApp')
  .controller('MainCtrl', function ($scope,$firebaseObject,$uibModal) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  $scope.dataLoaded = false;
    const rootRef = firebase.database().ref().child('products');
    const ref = rootRef.child('icemaker');
    const showcase = ref.orderByChild('showcase').equalTo(true);
    var prod = $firebaseObject(showcase);
    
    prod.$loaded().then(function(){
      $scope.products = prod;
      $scope.dataLoaded = true;
  });
  
  
  $scope.featuredThumbsClicked = function(buttonNo){
    var modalInstance = null;
    var templateUrlLocation = '';
    switch(buttonNo){
      case 1:
        templateUrlLocation = 'views/companyBrief.html';
        break;
      case 2:
        templateUrlLocation = 'views/icetype.html';
        break;
      case 3:
        templateUrlLocation = 'views/serviceTeam.html';
        break;
      case 4:
        templateUrlLocation = 'views/warranty.html';
        break;
      default:
        break;
    }
    modalInstance = $uibModal.open({
      animation: $scope.animationEnabled,
      templateUrl:templateUrlLocation,
      controller:'ModalInstanceCtrl',
      resolve:{
        models: function(){
        }
      }
    });
    
  
  
  }
  })
  .controller('ModalInstanceCtrl', function ($scope, models,$uibModalInstance){
    $scope.ok = function () {
    $uibModalInstance.close();
    }
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

