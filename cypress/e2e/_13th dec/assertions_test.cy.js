// describe ('Cypress Asserion Suit', () => {

//     it('Cypress assertion first tests', ()=>{
//     cy.visit("https://www.google.com/search?q=java+script+by+testers+talk")
//     cy.get('textarea[type="search"]').then((element)=>{
//         expect(element.text()).to.equal("java script by testers talk");
//     })
//         })

    
// })

//Second script written on my own
describe('First test with assertion', ()=>{
   it('Cypress equal assertion done', () =>
   {
   cy.visit("https://www.google.com/search?q=Darshana+Nehulkar");
    cy.get('textarea[type="search"]').then((variable) =>{
        expect(variable.text()).to.equal("Darshana Nehulkar")
    })

})
})

