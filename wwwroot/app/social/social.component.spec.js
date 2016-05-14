System.register(['./social.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var social_component_1;
    return {
        setters:[
            function (social_component_1_1) {
                social_component_1 = social_component_1_1;
            }],
        execute: function() {
            describe('Given that I have a SocialComponent', function () {
                var component = new social_component_1.SocialComponent();
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(component).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=social.component.spec.js.map