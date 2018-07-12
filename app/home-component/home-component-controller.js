var app = angular.module('genesisApp').controller('homeCtrl',function($scope,$state){
    $scope.initial=localStorage.username.split('')[0];
    $scope.username=localStorage.username;
    
    $scope.todolist=[];

    $scope.gotoHome = function(){
        $state.go('home');
    };
    $scope.gotoDashboard = function(){
        $state.go('home.dashboard');
    };
    $scope.gotoProfile = function(){
        $state.go('home.profile');
    };
    $scope.logout = function(){
        $state.go('login');
    };

    $scope.gototeam = function(){
        $state.go('home.profile');
    };

    $scope.profile_dropdown = function(){
        console.log("windoww");
        document.getElementById("myDropdown").classList.toggle("show");
    };

    $scope.addtodo = function(){
        if(document.getElementById("todoname").value.length>3){
            $scope.todolist.push(
                {
                    name:document.getElementById("todoname").value,
                    description:document.getElementById("tododesc").value,
                    checked:false
                });
        }
    };

    $scope.delete=function(index)
    {
        $scope.todolist.splice(index,1);
        document.getElementById("mydescription").hidden=true;
    };

    $scope.showdelete = function(index){
        document.getElementById("deletebutton"+index).hidden=false;
        $scope.tododescription=$scope.todolist[index].description;
        document.getElementById("mydescription").hidden=false;
    };
    $scope.hidedelete = function(index){
        document.getElementById("deletebutton"+index).hidden=true;
        document.getElementById("mydescription").hidden=true;
    };
    
});