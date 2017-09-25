angular.module('app')
    .config(RouterConfig);

function RouterConfig($routeProvider){
    $routeProvider.when('/home', {
        templateUrl : 'app/views/home.html',
        controller: 'homeCtrl'
    }).when('/contato', {
        templateUrl : 'app/views/contato.html',
        controller: 'contatoCtrl'
    }).when('/sobre', {
        templateUrl : 'app/views/sobre.html',
        controller: 'sobreCtrl'
    }).otherwise({
        redirectTo: '/home'
    });
}