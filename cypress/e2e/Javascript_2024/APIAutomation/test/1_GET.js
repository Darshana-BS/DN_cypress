describe('GET request', () => {
    it('Get details about the products', () =>{
        cy.request("GET", "https://www.bstackdemo.com/api/products").should((response) =>{
            expect(response.status).to.eq(200)
        })
    })
})


import supertest from supertest
const supertest = require (sypertest);

const request = supertest('https://gorest.co.in/public/v2/');
const TOKEN = '4cb5923310d7a7bf97418e08e5789fe0e34b7d1bfdf8bd6d04b48adcd2d07719'

describe ('Get users', () => {
    it('Users list', () => {
        request.get(`users?access-token=${TOKEN}`).end((res,err) => {
            console.log(res.body)
            console.log(res.status)
        })
    })
} )
