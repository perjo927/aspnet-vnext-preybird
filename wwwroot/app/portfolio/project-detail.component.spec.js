System.register(['./project-detail.component', './portfolio.mocks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var project_detail_component_1, mocks;
    return {
        setters:[
            function (project_detail_component_1_1) {
                project_detail_component_1 = project_detail_component_1_1;
            },
            function (mocks_1) {
                mocks = mocks_1;
            }],
        execute: function() {
            describe('Given that I have a ProjectDetailComponent', function () {
                var service = new mocks.mockService();
                var params = mocks.mockRouteParams;
                var component = new project_detail_component_1.ProjectDetailComponent(params, service);
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(component).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=project-detail.component.spec.js.map