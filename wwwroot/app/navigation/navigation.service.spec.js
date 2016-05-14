System.register(["./navigation.service", './navigation.mocks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var navigation_service_1, mocks;
    return {
        setters:[
            function (navigation_service_1_1) {
                navigation_service_1 = navigation_service_1_1;
            },
            function (mocks_1) {
                mocks = mocks_1;
            }],
        execute: function() {
            describe('Given that I have a Navigationservice', function () {
                var service;
                var promise;
                var result;
                describe('When I call getNavigationItems', function () {
                    beforeEach(function () {
                        service = new navigation_service_1.NavigationService();
                        promise = service.getNavigationItems();
                        promise.then(function (navigation) {
                            result = navigation;
                        });
                    });
                    it('Then it must return a promise', function () { return expect(promise).toEqual(jasmine.any(Promise)); });
                    // TODO: Mock backend
                    it('Then the promise must return a Navigation object', function () { return expect(result[0].name).toBe("Home"); });
                });
                describe('When I call getNavigationItem with "Home"', function () {
                    beforeEach(function () {
                        promise = service.getNavigationItem("Home");
                    });
                    it('Then it must return a promise', function () { return expect(promise).toEqual(jasmine.any(Promise)); });
                });
                describe('When I call setNavigationItem with the /test route', function () {
                    beforeEach(function () {
                        service.setNavigationItem(mocks.mockRoutes[0]);
                    });
                    it('Then the service must return the selected route', function () { return expect(service.getRoute().name).toBe("Test"); });
                });
            });
        }
    }
});
//# sourceMappingURL=navigation.service.spec.js.map