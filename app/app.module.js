(function(){
    'use strict'

    var main = angular
        .module('app', [            
            'ngRoute',
            'flights'
        ])
        .constant("appSettings",         
        {
            dataUrl: "http://ejtestbed.herokuapp.com/flights"
        });
        
    main.config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when("/searchFlights", 
            {
                templateUrl: "app/flights/search.html",
                controller: "searchController as vm"
            })
            .otherwise("/searchFlights");
    }
    
})();