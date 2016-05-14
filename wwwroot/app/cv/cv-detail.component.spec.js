System.register(['./cv-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var cv_detail_component_1;
    return {
        setters:[
            function (cv_detail_component_1_1) {
                cv_detail_component_1 = cv_detail_component_1_1;
            }],
        execute: function() {
            describe('Given that I have a CvDetailComponent', function () {
                var cvComponent = new cv_detail_component_1.CvDetailComponent();
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(cvComponent).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=cv-detail.component.spec.js.map