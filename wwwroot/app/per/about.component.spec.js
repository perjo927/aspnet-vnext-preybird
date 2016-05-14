System.register(['./about.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var about_component_1;
    return {
        setters:[
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            describe('Given that I have an AboutComponent', function () {
                var component = new about_component_1.AboutComponent();
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(component).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=about.component.spec.js.map