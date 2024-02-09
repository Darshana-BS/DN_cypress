//get the locators by id
describe ('GET Method', () => {  
    it('get locators by id', () => {
        
        //visit the website
        cy.visit('https://www.saucedemo.com/')
        
        //enter the username
        cy.get('#user-name').type('standard_user')

        //enter the password
        cy.get('#password').type('secret_sauce')
        
        //click login CTA
        cy.get('#login-button').click()
    })
  })

  
//Get method by class
describe('GET Method', () => {
    it('Get selectors by class',() => {
    //visit the website
     cy.visit('https://www.saucedemo.com/')
     //enter the username
     cy.get('.form_group').eq(0).type('standard_user')
     //enter the password
     cy.get('.form_group').eq(1).type('secret_sauce')
     //click submit
     cy.get('[data-test="login-button"]').click()
    }) 
   
    //get by EQUAL/FIRST/LAST Method
    it('Equla|First|Last Method', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input').first().type('standard_user')
        cy.get('input').eq(1).type('secret_sauce')
        cy.get('input').last().click()
    })

    //get by NAME Method
    it('Filter Method', () =>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('input').filter('[type="text"]').type('standard_user')
        cy.get('input').filter('[type="password"]').type('secret_sauce')
        cy.get('input').filter('[type="submit"]').click()
    })

    //FIND Method
    it('Find Method', ()=> {
        cy.visit('https://www.saucedemo.com/')
        cy.get('form').find('input').eq(0).type('standard_user')
        cy.get('form').find('input').eq(1).type('secret_sauce')
        cy.get('form').find('input').last().click()
        // cy.get('form').within(()=>{
        //     cy.get('.form_group').eq(0).type('standard_user')
        // })
    })

    //Parent Method
    it('Parent Method', () =>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('form').parent().should('have.class', 'login-box')
    })

})