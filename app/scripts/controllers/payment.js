'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:DonationCtrl
 * @description
 * # DonationCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('PaymentCtrl',['$scope',function ($scope) {
    $scope.payment = {}
    $scope.payment.user = {}

  }]);
