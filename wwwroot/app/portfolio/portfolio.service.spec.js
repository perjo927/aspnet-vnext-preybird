System.register(["./portfolio.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var portfolio_service_1;
    return {
        setters:[
            function (portfolio_service_1_1) {
                portfolio_service_1 = portfolio_service_1_1;
            }],
        execute: function() {
            describe('Given that I have a PortfolioService', function () {
                var service;
                var promise;
                var result;
                describe('When I call getCardItems', function () {
                    beforeEach(function () {
                        service = new portfolio_service_1.PortfolioService();
                        promise = service.getPortfolio();
                        promise.then(function (collection) {
                            result = collection;
                        });
                    });
                    it('Then it must return a promise', function () { return expect(promise).toEqual(jasmine.any(Promise)); });
                    // TODO: Mock backend
                    it('Then the promise must return a Collection object', function () { return expect(result[0].id).toBe(10); });
                });
                describe('When I call getProject with id: 10', function () {
                    // TODO: Mock backend
                    beforeEach(function () {
                        promise = service.getProject(10);
                        promise.then(function (data) { return result = data; });
                    });
                    it('Then it must return a promise', function () { return expect(promise).toEqual(jasmine.any(Promise)); });
                    it('Then it must get the Project object', function () { return expect(result.id).toBe(10); });
                });
            });
        }
    }
});
//# sourceMappingURL=portfolio.service.spec.js.map