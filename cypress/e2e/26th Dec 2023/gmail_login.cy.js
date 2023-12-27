describe('Gmail login', () =>{
    it('Gmail login using password', () => {
    cy.visit('https://gmail.com')
    cy.get('div [type="email"]').type('darshana.nehulkar@cumminscollege.in')
    cy.get('.F9NWFb .VfPpkd-LgbsSe').click()
    cy.get('input[tyep="password"]').type('neverlove805')
    cy.get('.F9NWFb .VfPpkd-LgbsSe').click()
})
})