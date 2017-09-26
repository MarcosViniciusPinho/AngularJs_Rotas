angular.module('app')
    .config(RouterConfig);

function RouterConfig($routeProvider){
    $routeProvider.when('/home', {
        templateUrl : 'app/views/home.html',
        controller: HomeController,
        controllerAs: 'homeCtrl'
    }).when('/contato', {
        templateUrl : 'app/views/contato.html',
        controller: ContatoController,
        controllerAs: 'contatoCtrl'
    }).when('/sobre', {
        templateUrl : 'app/views/sobre.html',
        controller: SobreController,
        controllerAs: 'sobreCtrl'
    }).otherwise({
        redirectTo: '/home'
    });
}