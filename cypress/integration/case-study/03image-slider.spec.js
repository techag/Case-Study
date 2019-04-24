describe('Image Slider', function() {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should click on right side image slider', function() {
        //Added delay to see the click
        //Right click
        cy.wait(1000);
        cy.get('#slide_right').click();
        cy.wait(1000);
        cy.get('#slide_right').click();
        cy.wait(1000);
        cy.get('#slide_right').click();

        //Left Click
        cy.wait(1000);
        cy.get('#slide_left').click();
        cy.wait(1000);
        cy.get('#slide_left').click();
        cy.wait(1000);
        cy.get('#slide_left').click();
    });


    it('should check if the image is present after click', function () {
        cy.get('span[class="image-right"]').find("img").should('be.visible');
        cy.get('span[class="image-left"]').find("img").should('be.visible');
        cy.get('span[class="image-center"]').find("img").should('be.visible');
    })


});