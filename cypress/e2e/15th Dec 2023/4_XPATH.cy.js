describe('XPATH', () => {
    it('xpath new', () =>{
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
        cy.xpath('//*[@type="search"]').clear().type('Day Dreamer')
        cy.xpath('//*[@jsname="Tg7LZd"]').click()
        // cy.get('a[href*="CAQQBA"]').click()
        //javascript
        cy.get('a[href*=vid]').click()
        //daydreamer
        // cy.get('.hdtb-mitem:nth-child(3) > a').click()
        // cy.xpath('//*[text()="videos"]').click()
        
    })
})