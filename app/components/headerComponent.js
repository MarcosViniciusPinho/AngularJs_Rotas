(function() {
    'use strict';

    angular.module('app')
        .component('appHeaderComponent', {
            templateUrl: 'app/views/header.html',
            controller: HeaderComponent
    });

    HeaderComponent.$inject = ['$location'];

    function HeaderComponent($location){
        var vm = this;

        vm.isActive = function(route) {
            return route === $location.path();
        };

    }

})();