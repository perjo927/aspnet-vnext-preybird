System.register(['./icon.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var icon_component_1;
    return {
        setters:[
            function (icon_component_1_1) {
                icon_component_1 = icon_component_1_1;
            }],
        execute: function() {
            describe('Given that I have an IconComponent', function () {
                var component = new icon_component_1.IconComponent();
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(component).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=icon.component.spec.js.map