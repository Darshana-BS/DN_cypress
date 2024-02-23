const { iteratee } = require('cypress/types/lodash');

require('@cypress/xpath');

describe("search product on flipcart", () => {
  it("visit flipcart", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get('._2SmNnR .Pke_EE').type('Tata Tea premium')
    cy.get('._2iLD__[type="Submit"]').click()
    

    cy.get('.s1Q9rs').eq(0).invoke('text').then((text) => {
      cy.log(`The name of the searched product is: ${text}`);

    cy.get('.s1Q9rs').eq(1).invoke('text').then((text) => {
      cy.log(`The name of the searched product is: ${text}`);

    })
  })
})
})
