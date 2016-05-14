System.register(['./navigation.component', './navigation.mocks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var navigation_component_1, mocks;
    return {
        setters:[
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (mocks_1) {
                mocks = mocks_1;
            }],
        execute: function() {
            describe('Given that I have a NavigationComponent', function () {
                var component;
                describe('When I provide it to my component', function () {
                    beforeEach(function () {
                        var service = new mocks.mockService();
                        component = new navigation_component_1.NavigationComponent(service);
                        component.ngOnInit();
                    });
                    // TODO: Support async
                    it('Then it must contain a Navigation array', function () { return expect(component.navigation).toBeDefined(); });
                });
                describe('When I call onSelect with the /test route', function () {
                    var selectedRoute, selectedPath;
                    beforeEach(function () {
                        component.onSelect(mocks.mockRoutes[0]);
                        selectedRoute = component.getRoute();
                        selectedPath = selectedRoute.path;
                    });
                    describe('And I call getRoute to get the selected Navigation item', function () {
                        it('Then it must return the /test route', function () { return expect(selectedPath).toBe('/test'); });
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=navigation.component.spec.js.map