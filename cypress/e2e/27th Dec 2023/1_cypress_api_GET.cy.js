describe('GET request', () => {
    it('Get details about the products', () =>{
        cy.request("GET", "https://www.bstackdemo.com/api/products").should((response) =>{
            expect(response.status).to.eq(200)
        })
    })
})