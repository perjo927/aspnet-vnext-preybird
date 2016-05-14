describe('Given that I am visiting Programmer Per', function () {
    var el = element(by.tagName('programmer-per-skills'));
    describe('When I am taken to the /skills route', function () {
        beforeEach(function () { return browser.get('/skills'); });
        it('Then I should see the skills component', function () { return expect(el.getTagName()).toBe("programmer-per-skills"); });
    });
});
//# sourceMappingURL=skills.e2e.spec.js.map