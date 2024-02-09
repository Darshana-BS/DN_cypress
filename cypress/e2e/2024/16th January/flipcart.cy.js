const { iteratee } = require('cypress/types/lodash');

require('@cypress/xpath');

describe("search product on flipcart", () => {
  it("visit flipcart", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get('._2SmNnR .Pke_EE').type('Tata Tea premium')
    cy.get('._2iLD__[type="Submit"]').click()

    //apply Price filter from drop-down
    // cy.get('._3AsjWR').eq(1)

    //print the name of first product
    // cy.get('.s1Q9rs').eq(1).invoke('val').then(cy.log)  
    // // .then(element2 => {
    // //   let x = element2
    // //   cy.log ('Productname is: ' + x)
    // cy.get('@name').then((name) => {
    //   cy.log('Name: ', name);
    //   // (`Product Name : ${name}`)
    

    cy.get('.s1Q9rs').eq(0).invoke('text').then((text) => {
      cy.log(`The name of the searched product is: ${text}`);

    cy.get('.s1Q9rs').eq(1).invoke('text').then((text) => {
      cy.log(`The name of the searched product is: ${text}`);

    // cy.get('.s1Q9rs').eq(1).invoke('text2').then((text2) =>{
    //   cy.log(`Name of product 2 is:  ${text2}`)

    // for (let i=0; i<=10; i+1)
    // cy.get('.s1Q9rs').each().invoke('text').then((text)=>{
    //   cy.log(`Name of product is: ${text}`)
    // })
    })
  })
})
})
