describe('Attributes Fist', () =>{
    it ('1st attribute', ()=>{
        cy.visit('http://google.com/search?q=Darshana+Nehulkar')
        cy.get('textarea[type="search"]').then((element)=>{
            cy.log("The text:" +element.text())
        })
    })
})
it ('2nd attribute', ()=>{
    cy.visit('http://google.com/search?q=Darshana+Nehulkar')
    cy.get('#APjFqb').then((element)=>{
        cy.log("The text:" +element.text())
    })
})