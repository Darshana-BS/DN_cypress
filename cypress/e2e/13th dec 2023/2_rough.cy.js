// describe ('get locators', () => {    
//     it('GET method', () => {
//         cy.visit('https://www.saucedemo.com/')
//         // cy.get('#user-name').then((element) => {
//         // cy.log('field name is:'+element.text())
//         cy.get('#user-name').type('standard_user')
//         cy.get('#password').type('secret_sauce')
//         // cy.get(Button['#login-button']).click
//         cy.get('#login-button').click()
//         // cy.get('[data-test="login-button"]').click()
//     })
   
       
       
//     })

describe('Get locators by Name', () => {
    it('Get locators by Name',() => {
    //visit the website
     cy.visit('https://www.saucedemo.com/')
     //enter the username
     cy.get('.form_group').eq(0).type('standard_user')
     //enter the password
     cy.get('.form_group').eq(1).type('secret_sauce')
     //click submit
     cy.get('.form_group[data-test="login-button"]').click()
    }) 

})