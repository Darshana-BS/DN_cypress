describe('Login bstackdemo', () =>{
    it('Login', () => {
        cy.visit('https://www.bstackdemo.com/signin')
        cy.get('.css-1hwfws3').eq(0).type('demo').type('{downarrow}{enter}')
        cy.get('.css-1hwfws3').eq(1).type('testingisfun99').type('{downarrow}{enter}')
        cy.get('#login-btn').click()
    })
})