describe('Main Product Image', function() {
    beforeEach(() => {
        cy.visit('/')
    });


    it('should check if the main product image is displayed on the UI', function () {
        cy.get('div[class="product-img row"]').find('img').should('be.visible');
    })
});