angular.module('app')
    .controller('sobreCtrl', SobreController);

function SobreController(){
    var vm = this;
    vm.message = 'Bem vindos a pagina sobre';
}