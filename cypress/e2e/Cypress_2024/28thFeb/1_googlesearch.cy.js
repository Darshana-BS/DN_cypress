/// < reference types = "cypress" >/

it('Google test', () => {
    cy.visit('https://google.com')
    cy.get('div .gLFyf').type('Automation step by step{enter}')
    cy.get('.GKS7s').eq(1)
    cy.log(Cypress.browser)
    })

it('Google test', () => {
    cy.visit('https://google.com')
    cy.get('[name="q"]').type('Automation step by step{enter}')
    // cy.log(Cypress.browser)
})
    
    
    