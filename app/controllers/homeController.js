angular.module('app')
    .controller('homeCtrl', HomeController);

function HomeController($scope){
    $scope.message = 'Bem vindos a pagina home';
}
