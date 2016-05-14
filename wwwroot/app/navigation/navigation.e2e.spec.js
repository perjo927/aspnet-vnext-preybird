describe('Given that I am visiting Programmer Per', function () {
    var el = element(by.tagName('navigation'));
    var home = element(by.tagName("a"));
    describe('When I am taken to any route', function () {
        beforeEach(function () { return browser.get('/blog'); });
        it('Then I should see the navigation component', function () { return expect(el.getTagName()).toBe("navigation"); });
    });
    describe('When I am taken to any route', function () {
        beforeEach(function () {
            browser.get('/per');
            browser.sleep(3000); // wait for animation
        });
        it('Then I should be able to click a navigation item', function () {
            home.click();
            expect(browser.getCurrentUrl()).toBe("http://localhost:3000/home");
        });
    });
});
//# sourceMappingURL=navigation.e2e.spec.js.map