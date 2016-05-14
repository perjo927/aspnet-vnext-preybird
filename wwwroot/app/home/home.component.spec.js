System.register(['./home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            describe('Given that I have a HomeComponent', function () {
                var component = new home_component_1.HomeComponent();
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(component).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=home.component.spec.js.map