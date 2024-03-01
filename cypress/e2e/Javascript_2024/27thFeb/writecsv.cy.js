describe('Write CS', () => {
    it('Write file', () => 
    {
    cy.writeFile('cypress/fixtures/data.csv', 'Helloworld')
    cy.readFile('cypress/fixtures/data.csv').then((text) => {
        expect(text).to.equal('Helloworld')
    })
    })
})

