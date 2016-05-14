describe('Given that I am visiting Programmer Per', function () {
    var el = element(by.tagName('programmer-per-blog'));
    describe('When I am taken to the /blog route', function () {
        beforeEach(function () { return browser.get('/blog'); });
        it('Then I should see the blog component', function () { return expect(el.getTagName()).toBe("programmer-per-blog"); });
    });
});
//# sourceMappingURL=blog.e2e.spec.js.map