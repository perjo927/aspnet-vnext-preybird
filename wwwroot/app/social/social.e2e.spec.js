describe('Given that I am visiting Programmer Per', function () {
    var el = element(by.tagName('programmer-per-social'));
    describe('When I am taken to the /social route', function () {
        beforeEach(function () { return browser.get('/social'); });
        it('Then I should see the social component', function () { return expect(el.getTagName()).toBe("programmer-per-social"); });
    });
});
//# sourceMappingURL=social.e2e.spec.js.map