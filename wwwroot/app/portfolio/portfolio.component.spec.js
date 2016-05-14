System.register(["./portfolio.component", './portfolio.mocks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var portfolio_component_1, mocks;
    return {
        setters:[
            function (portfolio_component_1_1) {
                portfolio_component_1 = portfolio_component_1_1;
            },
            function (mocks_1) {
                mocks = mocks_1;
            }],
        execute: function() {
            describe('Given that I have a portfolioComponent', function () {
                var component;
                var service;
                describe('When I provide it to my component', function () {
                    beforeEach(function () {
                        service = new mocks.mockService();
                        var router = mocks.mockRouter;
                        // component = new PortfolioComponent(router, service); // TODO: should ideally work
                        component = new portfolio_component_1.PortfolioComponent(null, null);
                        spyOn(component, 'getPortfolio');
                        component.ngOnInit();
                    });
                    // TODO: Support async
                    it('Then it must contain set the Project array', function () { return expect(component.getPortfolio).toHaveBeenCalled(); });
                });
                describe('When I call onSelect with the selected Project', function () {
                    var selectedProject, selectedItem;
                    beforeEach(function () {
                        selectedProject = mocks.mockCollection[0];
                        component.onSelect(selectedProject);
                        selectedItem = component.selectedItem;
                    });
                    describe('And I use the selectedItem property', function () {
                        it('Then it must return the correct id of the item', function () { return expect(selectedItem.id).toBe(1337); });
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=portfolio.component.spec.js.map