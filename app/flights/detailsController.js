(function(){
    "use strict";

    angular
        .module('flightApp.flights')
        .controller('DetailsController',
            ['$routeParams','dataService', '$http', detailsController]);
    
    function detailsController($routeParams, dataService, $http){
        var vm = this;
        vm.title = 'Flight Details';
        vm.flightId = $routeParams.flightid;

        vm.flightDetail = dataService.get({id: vm.flightId});
    }
})();

        
