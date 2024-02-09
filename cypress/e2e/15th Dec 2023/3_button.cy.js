describe ('login using username and Password', ()=>{
    it('youtube search', () => {
        //Visit the google and search
        cy.visit('https://www.google.com')
        cy.get('textarea[jsname="yZiJbe"]').type('Javscript by Testers talk')
        cy.get('div .FPdoLc .gNO89b').click()
    
        //click on search icon
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
        //whole name
        cy.get('button[type="submit"]').click()
        //starts with
        cy.get('button[type^="sub"]').click()
        //ends with
        cy.get('button[type$="mit"]').click()
        //contains with CSS
        cy.get('button[type*="mi"]').click()
        //contains Cypress
        cy.contains('Testers Talk').click()

        //click on the video
        cy.visit('https://www.youtube.com/@testerstalk')
        cy.get('.yt-tab-shape-wiz__tab').eq(2).click()
       
    })
})    