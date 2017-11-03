var app = angular.module('whatsApp',[]);
app.controller('contactsCtrl',contactsCtrl);
contactsCtrl.$inject=["$scope"]

function contactsCtrl($scope){
	$scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
};