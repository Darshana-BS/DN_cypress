describe('Herokeapp login', ()=>{
    it('Login flow with correct credentials',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')  // Visits the website on the page specified in the URL
        cy.get('input[type="text"]').type('tomsmith')
        cy.get('.large-6 > input#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('div > #flash-messages').contains('logged')
        cy.log('Success')
    })
}
)