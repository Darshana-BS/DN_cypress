//login to account orangHRM

describe('Login to orangeHRM', () => {
    it('test login', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        // find the element using filter
        cy.get('input').filter('.oxd-input').eq(0).type('Admin')
        //find the element using name
        cy.get('input[name="username"]').clear().type('Admin')

        //enter username
        cy.get('.oxd-input').eq(1).type('admin123')
        cy.get('input[type="password"]').clear().type('admin123')
        cy.get('input').filter('.oxd-input').eq(1).clear().type('admin123')

        //click submit
        cy.get('button').filter('.oxd-button').click()
        // cy.get('button[type="submit"]').click()

    })
})
