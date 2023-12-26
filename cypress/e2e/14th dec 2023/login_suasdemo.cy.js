let username = 'standard_user'
let password = 'secret_sauce'

describe('Login using username and password', () => {
    it('login steps', ()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('div .form_group #user-name').type(username)
        cy.get('.form_group').eq(1).type(password)
        cy.get('.submit-button').click()
    })
})