System.register(['./social-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var social_detail_component_1;
    return {
        setters:[
            function (social_detail_component_1_1) {
                social_detail_component_1 = social_detail_component_1_1;
            }],
        execute: function() {
            describe('Given that I have a SocialComponent', function () {
                var component = new social_detail_component_1.SocialDetailComponent();
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(component).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=social-detail.component.spec.js.map