var app = angular.module('homePage', ['ui.router', 'login','dashboard','profile']);
app.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('login');

    $stateProvider
        .state('team', {
            url: '/team',
            templateUrl: 'app/team-component/team.html',
            controller: 'teamCtrl'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard-component/dashboard.html',
            controller: 'dashboardCtrl'
        });
});