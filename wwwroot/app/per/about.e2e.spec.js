describe('Given that I am visiting Programmer Per', function () {
    var el = element(by.tagName('programmer-per-about'));
    describe('When I am taken to the /about route', function () {
        beforeEach(function () { return browser.get('/per'); });
        it('Then I should see the about component', function () { return expect(el.getTagName()).toBe("programmer-per-about"); });
    });
});
//# sourceMappingURL=about.e2e.spec.js.map