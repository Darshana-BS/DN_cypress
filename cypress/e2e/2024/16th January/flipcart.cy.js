require('@cypress/xpath');

describe("search product on flipcart", () => {
  it("visit flipcart", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get('._2SmNnR .Pke_EE').type('Tata Tea premium')
    cy.get('._2iLD__[type="Submit"]').click()
  });
});
