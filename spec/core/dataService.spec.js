describe('FlightAppFlights', function(){
    var $httpBackend;
    var dataService;
    var appSettings;

    beforeEach(module('flightApp.core'));

    beforeEach(inject(function(_dataService_, _appSettings_, _$httpBackend_){
        $httpBackend = _$httpBackend_;
        dataService = _dataService_;
        appSettings = _appSettings_;
    }));

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
    })

    it('should fetch flight by id', function(){
        console.log(appSettings.dataUrl);
        $httpBackend.expectGET(appSettings.dataUrl + '/EZ001').respond(200);

        dataService.get({ id: 'EZ001' });

        expect($httpBackend.flush).not.toThrow();
    });
});