describe('Second way of assertioning cypress', () =>{
    it ('Second type', ()=>{
        cy.visit('https://www.google.com/search?q=Darshana+Nehulkar')
        
        cy.log('1st = have.text')
        cy.get('textarea[type="search"]').should("have.text", "Darshana Nehulkar")
        
        cy.log('2nd = contains')
        cy.get('textarea[type="search"]').should("contain","Darshana Nehulkar")
        
        cy.log('3rd = be.visible')
        cy.get('textarea[type="search"]').should("be.visible")

        cy.log('4th = have.html')
        cy.get('textarea[type="search"]').should("have.html", "Darshana Nehulkar")

        cy.log('5th = have.html')
        cy.get('textarea[type="search"]').should("have.html", "Darshana Nehulkar").
        and("have.attr","value")

        cy.log('6th = have.attr and include')
        cy.get('textarea[type="search"]').should("have.html", "Darshana Nehulkar").
        and("have.attr", "value").
        and("include", "Darshana Nehulkar")

        cy.log('8th = have.length')
        cy.get('textarea[type="search"]').then((element)=>{
            expect(element.text()).to.have.length("17")
        })
    })
})