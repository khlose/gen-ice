'use strict';

/**
 * @ngdoc function
 * @name genIceApp.controller:WhyCtrl
 * @description
 * # WhyCtrl
 * Controller of the genIceApp
 */
angular.module('genIceApp')
  .controller('WhyCtrl', function ($scope,$uibModal) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
  
  
  $scope.featuredThumbsClicked = function(buttonNo){
    var modalInstance = null;
    var templateUrlLocation = '';
    switch(buttonNo){
      case 1:
        templateUrlLocation = 'views/partsModal.html';
        break;
      case 2:
        templateUrlLocation = 'views/intelligenceModal.html';
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
  
  
  
  })  .controller('ModalInstanceCtrl', function ($scope, models,$uibModalInstance){
    $scope.ok = function () {
    $uibModalInstance.close();
    }
  });
