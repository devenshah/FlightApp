(function(){
    'use strict'

    angular
        .module('app', [
            'common.services'
        ])
        .constant("appSettings",         
        {
            dataUrl: "http://ejtestbed.herokuapp.com/flights"
        });
})();