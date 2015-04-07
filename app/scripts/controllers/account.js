'use strict';

/**
 * @ngdoc function
 * @name multiplyMe.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the multiplyMe
 */
angular.module('multiplyMe')
  .controller('AccountCtrl', function ($scope, $state, Donation, $auth) {
    $scope.personal_impact = $auth.user.personal_impact;
    $scope.network_impact = $auth.user.network_impact;
    // Donation ID is hard coded right now
    //Email hard coded
    $scope.updatePassword = function(){
      $auth.submitLogin({
        email: "frasermince@gmail.com",
        password: $scope.oldPassword
      }).then( function (data){
        $auth.updatePassword({
          password: $scope.newPassword,
          password_confirmation: $scope.confirmPassword
        }).then( function (data) {
          alert("Password updated successfully");
          $scope.oldPassword = "";
          $scope.newPassword = "";
          $scope.confirmPassword = "";
        })
      });
    }

    $scope.logout = function(){
      $auth.signOut().then( function (resp){
        $state.go('signin');
      });
    }

  });