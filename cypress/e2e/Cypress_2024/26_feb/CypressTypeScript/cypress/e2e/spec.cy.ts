  it('passes', () => {
    cy.visit('https://www.flipkart.com/')
    cy.get('[name="q"]').type('Apples').type('{enter}')
  })