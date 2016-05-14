System.register(['./skills.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var skills_component_1;
    return {
        setters:[
            function (skills_component_1_1) {
                skills_component_1 = skills_component_1_1;
            }],
        execute: function() {
            describe('Given that I have a SkillsComponent', function () {
                var component = new skills_component_1.SkillsComponent();
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(component).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=skills.component.spec.js.map