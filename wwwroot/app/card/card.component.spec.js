System.register(['./card.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var card_component_1;
    return {
        setters:[
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            }],
        execute: function() {
            describe('Given that I have a CardComponent', function () {
                var cardComponent = new card_component_1.CardComponent();
                describe('And I use it in my class', function () {
                    it('Then it must be defined', function () { return expect(cardComponent).toBeDefined(); });
                });
            });
        }
    }
});
//# sourceMappingURL=card.component.spec.js.map