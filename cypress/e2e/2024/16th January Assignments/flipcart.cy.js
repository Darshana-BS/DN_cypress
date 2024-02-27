// const { iteratee } = require('cypress/types/lodash');
//1= search for a product
// require('@cypress/xpath');
// describe('search product on flipcart', () => {
//     it('Sign in using email and password', () => {
//     cy.visit("https://www.flipkart.com/");
//     cy.get('._2SmNnR .Pke_EE').type('Tata Tea premium')
//     cy.get('._2iLD__[type="Submit"]').click()
//     cy.get('.s1Q9rs').eq(1).invoke('text').then((text) => {
//     cy.log(`The name of the searched product is: ${text}`);  
//     })
//   })
//   })

  
//2 = Print the name of each item
describe('search product on flipcart', () => {
    it('Sign in using email and password', () => {
    cy.visit("https://www.flipkart.com/");
    cy.get('._2SmNnR .Pke_EE').type('Tata Tea premium')
    cy.get('._2iLD__[type="Submit"]').click()
    
//read the names of the items/ products
    cy.get('.s1Q9rs').each(($el, index) => {
      var ItemList = []
    if(index<2){
      cy.wrap($el).invoke('text').then((text) => {
      cy.log(`The name of the searched  product with index ${index} is: ${text}`);
//store it in the array
      ItemList.push(`${text}`) //${index} - 
      cy.log(ItemList)
//dump results to the CSV file
      cy.writeFile('cypress/fixtures/data.csv', `${ItemList}`)
    })
        }    
    })
  })
})