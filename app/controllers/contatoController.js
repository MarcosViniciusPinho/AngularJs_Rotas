angular.module('app')
    .controller('contatoCtrl', ContatoController);

function ContatoController($scope){
    $scope.message = 'Bem vindos a pagina contato';
}