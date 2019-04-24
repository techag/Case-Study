describe('Decrease Quantity', function() {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should decrease the product quantity', function () {
        cy.get('span[class="quan-minus"]').click()
    })


});