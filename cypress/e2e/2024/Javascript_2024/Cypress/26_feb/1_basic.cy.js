/// < reference types = "cypress" >/

it('Google test', () => {
cy.visit('https://google.com')
cy.get('div .gLFyf').type('Automation step by step{enter}')
// cy.get('[data-hveid="CAwQAA"] > .LatpMc > .GKS7s').click()
cy.get('.GKS7s').eq(1)
// cy.contains('Videos').click()

// cy.get('div .ExCKkf').click()
// cy.get('div .gLFyf').type('{downarrow}').click()
cy.wait(2000)
cy.log(Cypress.browser)
close()
})


