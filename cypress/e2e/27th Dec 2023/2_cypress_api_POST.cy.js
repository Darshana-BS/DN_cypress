describe('POST request', () => {
    it('POST request create new valueordata', () =>{
        cy.request("POST", "https://dummy.restapiexample.com/api/v1/create", {
            name: 'John Doe',
            salary: '1234567',
            age: '23'
        }).should((response) =>
        {
            expect(response.status).to.eq(200)
        })
    })
})