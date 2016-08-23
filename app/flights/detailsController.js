(function(){
    "use strict";

    angular
        .module('flightApp.flights')
        .controller('DetailsController',
            ['$routeParams','dataService', detailsController]);
    
    function detailsController($routeParams, dataService){
        var vm = this;
        vm.title = 'Flight Details';
        vm.flightId = $routeParams.flightid;

        vm.flightDetail = dataService.get({id: vm.flightId});
    }
})();

        
