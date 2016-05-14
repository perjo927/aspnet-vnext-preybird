System.register(['app/skills/skills-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var skills_detail_component_1;
    return {
        setters:[
            function (skills_detail_component_1_1) {
                skills_detail_component_1 = skills_detail_component_1_1;
            }],
        execute: function() {
            describe('Given that I have a SkillsComponent', function () {
                var component = new skills_detail_component_1.SkillsDetailComponent();
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(component).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=skills-detail.component.spec.js.map