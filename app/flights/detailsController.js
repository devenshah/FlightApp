(function(){
    "use strict";

    angular
        .module('flightApp.flights')
        .controller('DetailsController',
            ['$routeParams', detailsController]);
    
    function detailsController($routeParams){
        var vm = this;
        vm.title = 'Flight Details';
        vm.flightId = $routeParams.id; 
    }

})();

        
