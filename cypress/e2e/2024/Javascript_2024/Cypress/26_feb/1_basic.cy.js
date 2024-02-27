/// < reference types = "cypress" >/

it('Google test', () => {
cy.visit('https://google.com')
cy.get('div .gLFyf').type('Darshana Nehulkar{enter}')
// cy.get('[data-hveid="CAwQAA"] > .LatpMc > .GKS7s').click()
cy.get('div .Tl6lnd').eq(1).click()

// cy.get('div .ExCKkf').click()
// cy.get('div .gLFyf').type('{downarrow}').click()

})