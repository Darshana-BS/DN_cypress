describe('Visit ig', () => {
    it ('visit ig', () =>{
        for (let i =0; i< 10; i++)
        {
        cy.visit('https://www.instagram.com/reel/C4DvZd4KOcX/')
        // cy.wait(6000)
    }
    })
})