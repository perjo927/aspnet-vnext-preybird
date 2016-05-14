describe('Given that I am visiting Programmer Per', function () {
    var el = element(by.tagName('portfolio'));
    var all = element.all(by.className('project'));
    var one = element(by.className('project'));
    var selectedItem = element(by.className('selected-item'));
    var viewButton = element(by.buttonText('View Details'));
    var backButton = element(by.buttonText("Back"));
    beforeEach(function () { return browser.get('/portfolio'); });
    describe('When I am taken to the /portfolio route', function () {
        it('Then I should see the portfolio component', function () { return expect(el.getTagName()).toBe("portfolio"); });
        it('Then I should see 5 project components', function () { return expect(all.count()).toBe(5); });
    });
    describe('And when I click on a project', function () {
        it('Then I should see a link to the project details', function () {
            one.click();
            expect(selectedItem.getText()).toContain("THING");
        });
    });
    describe('And when I click on project details', function () {
        it('Then I should see the project details', function () {
            one.click();
            viewButton.click();
            expect(browser.getCurrentUrl()).toContain("http://localhost:3000/project-detail/");
        });
    });
    describe('And when I click on project details', function () {
        it('Then I should see the project details and be able to go back', function () {
            one.click();
            viewButton.click();
            backButton.click();
            expect(browser.getCurrentUrl()).toContain("http://localhost:3000/portfolio");
        });
    });
});
//# sourceMappingURL=portfolio.e2e.spec.js.map