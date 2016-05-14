System.register(['./cv.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var cv_component_1;
    return {
        setters:[
            function (cv_component_1_1) {
                cv_component_1 = cv_component_1_1;
            }],
        execute: function() {
            describe('Given that I have a CvComponent', function () {
                var cvComponent = new cv_component_1.CvComponent();
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(cvComponent).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=cv.component.spec.js.map