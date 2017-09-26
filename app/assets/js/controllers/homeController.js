angular.module('app')
    .controller('homeCtrl', HomeController);

function HomeController(){
    var vm = this;
    vm.message = 'Bem vindos a pagina home';
}
