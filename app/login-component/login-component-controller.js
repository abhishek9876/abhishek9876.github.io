var app = angular.module('login').controller('loginCtrl',function($scope,$state){
    $scope.login = function(){
        localStorage.username=document.getElementById("username").value;
        localStorage.password=document.getElementById("password").value;
        $state.go('home.dashboard');
        
    };
  });