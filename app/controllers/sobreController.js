angular.module('app')
    .controller('sobreCtrl', SobreController);

function SobreController($scope){
    $scope.message = 'Bem vindos a pagina sobre';
}