'use strict';

angular.module('meanTempApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    
    $scope.addMessage = function() {
      if($scope.newMessage === '') {
        return;
      }
      $http.post('/api/messages', { name: $scope.newMessage.fullname, email: $scope.newMessage.email, message: $scope.newMessage.message });
      $scope.newMessage = '';
    };

  });
