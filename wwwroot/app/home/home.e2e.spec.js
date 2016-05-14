describe('Given that I am visiting Programmer Per', function () {
    var home = element(by.tagName('programmer-per-home'));
    describe('When I am taken to the /home route', function () {
        beforeEach(function () { return browser.get('/'); });
        it('Then I should see the home component', function () { return expect(home.getTagName()).toBe("programmer-per-home"); });
    });
});
//# sourceMappingURL=home.e2e.spec.js.map