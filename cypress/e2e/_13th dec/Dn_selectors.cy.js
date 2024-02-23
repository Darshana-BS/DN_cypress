describe('Cypress selector suit', ()=> {
    it ('CYpress selector test1 = ATTRIBUTE', ()=>{
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
        cy.get('textarea[type= "search"]').then((element) => 
        {
            cy.log("Google text 1: "+element.text())
        })
    })

    it('Selector second = ID', () => {
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
        cy.get('#APjFqb').then((element) =>{
            cy.log('Google text 2: '+element.text())
        })
    })

    //first element
    it('Selector three= CLASS FIRST', () => {
        // cy.get('.MUFPAc > :nth-child(2) > a').first().click()
    })

    //last element
    it('Selector four = CLASS LAST', () => {
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
        cy.get('.MUFPAc > :nth-child(4) > a').click()
    })
    
    //index
    it('Index Selector', () =>{
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
        // cy.get('.IUOThf > a').eq(1).click()
        // cy.get('.MUFPAc > :nth-child(2) > a')
        cy.get('a[href*="vid&s"]').click()
        // cy.get('div.MUFPAc a]').click()
        // cy.get('div.MUFPAc a.nth-child(1)').click()
    })
})