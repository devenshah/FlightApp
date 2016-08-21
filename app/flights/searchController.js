(function(){
    "use strict";

    angular
        .module('flights')
        .controller('searchController',
            ['dataService', searchController]);
    
    function searchController(dataService){
        var vm = this;
        vm.title = 'Flight List';
         
        dataService.query(function (data) {
            vm.searchResults = data;
        });
    }

})();

        
