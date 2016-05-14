describe('Given that I am visiting Programmer Per', function () {
    var el = element(by.tagName('programmer-per-cv'));
    describe('When I am taken to the /cv route', function () {
        beforeEach(function () { return browser.get('/cv'); });
        it('Then I should see the cv component', function () { return expect(el.getTagName()).toBe("programmer-per-cv"); });
    });
});
//# sourceMappingURL=cv.e2e.spec.js.map