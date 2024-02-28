it('Assertion Study ', () => {
    // cy.visit('https://example.cypress.io/')
    // cy.get('a[href*="/commands/querying"]').eq(2).click()

    //expect
    let name = 'Cypress'
    expect(true).to.be.true

    expect(name).to.be.equal('Cypress')
    expect(name).to.be.not.equal('Cysress')

    //assert
    assert.equal(4,4, 'Not equal')
    assert.strictEqual(4, 4, 'NOt Strickly')

})
