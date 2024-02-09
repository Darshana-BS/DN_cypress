let username = 'standard_user'
let password = 'secret_sauce'

describe ('login using username and Password', ()=>{
    it('enter username', () => {
        cy.visit('https://www.saucedemo.com')
        // cy.getCookies().should('not.be.empty')
        // cy.clearCookies()
        // cy.getCookies().should('be.empty')
        cy.wait(10000)
        cy.get('input#user-name').type('username')
    })
})