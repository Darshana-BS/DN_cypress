describe('Assersions', () =>{
    it('Assertion Study ', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('a[href*="/commands/querying"]').eq(2).click()

        //should _ contains
        cy.get('#query-btn').should('contain', 'Button') //id
        cy.get('.query-btn', {timeout: 2000}).should('contain', 'Button') //class
        cy.get('#querying .well>button:first').should('contain', 'Button') //css

        //should have
        cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')

        //should be
        .should('be.visible', 'Button') //have class
        
        //should equal
        cy.get('#query-btn')
        .invoke('attr', 'id')
        .should('equal', 'query-btn')

        // cy.get('#query-btn')
        // .invoke('attr', 'class')
        // .should('equal', 'query-btn')

        //should and
        cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')

        cy.get('[data-test-id="test-example"]')
        .should('have.class', 'example') // have class

})
})