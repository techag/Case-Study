describe('Increase Quantity', function() {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should increase the product quantity', function () {
        cy.get('span[class="quan-plus"]').click()
    })
});