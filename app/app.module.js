(function(){
    'use strict'

    var main = angular
        .module('flightApp', [            
            'ngRoute',
            'flightApp.flights'
        ])
        .constant("appSettings",         
        {
            dataUrl: "http://ejtestbed.herokuapp.com/flights/:id"
        });
        
    main.config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when("/searchFlights", 
            {
                templateUrl: "app/flights/search.html",
                controller: "SearchController as vm"
            })
            .when("/flightdetails/:flightid", 
            {
                templateUrl: "app/flights/details.html",
                controller: "DetailsController as vm"
            })
            .otherwise("/searchFlights");
    }
    
})();