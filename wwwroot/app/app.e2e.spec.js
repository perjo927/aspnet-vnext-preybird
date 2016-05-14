// TODO: add checks for unit-test.html
describe('Given that I am visiting Programmer Per', function () {
    var home = element(by.tagName('programmer-per-home'));
    describe('When I am taken to the /home route', function () {
        beforeEach(function () { return browser.get('/'); });
        it('Then it should have a title', function () { return expect(browser.getTitle()).toBe("Per === 'Programmer';"); });
        it('Then I should see the home component', function () { return expect(home.getTagName()).toBe("programmer-per-home"); });
    });
});
//# sourceMappingURL=app.e2e.spec.js.map