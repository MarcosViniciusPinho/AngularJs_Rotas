angular.module('app')
    .controller('contatoCtrl', ContatoController);

function ContatoController(){
    var vm = this;
    vm.message = 'Bem vindos a pagina contato';
}