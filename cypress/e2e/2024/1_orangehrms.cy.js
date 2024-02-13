describe('Visit OrgangeHRMS',() => {
   //sign in
    it('Sign in using email and password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input').filter('[name="username"]').type('Admin')
        cy.get('input').filter('[type="password"]').type('admin123')
        cy.get('button').filter('[type="submit"]').click()

    //visit about
    // cy.get('.oxd-userdropdown-name').click

    //visit admin
    cy.get('a[href*="/viewAdminModule"]').click()
    cy.get('.orangehrm-header-container [type="button"]').click()
    
    //select the value of role from dropdown-
    cy.get('div .oxd-select-text').eq(0).click()
    // cy.get('.oxd-select-dropdown').type('Admin').type('{enter}')
    cy.contains('.oxd-select-option', 'Admin').click();

    //enter the employee name
    cy.get('.oxd-autocomplete-text-input').type('QA')
    cy.wait(2000);
    cy.get('.oxd-autocomplete-text-input').type('{downarrow}').type('{enter}')
    // cy.contains('.oxd-autocomplete-text-input .oxd-select-option').should('contain', "QA").click();

    //select value of Status from dropdown-
    cy.get('div .oxd-select-text').eq(1).type('{downarrow}{enter}').click()
    // cy.get('.oxd-select-dropdown')
    // cy.get('.oxd-autocomplete-dropdown')

    //cretae user
    // enetr username
    cy.get('input').filter('.oxd-input').eq(1).type('dash805')
    //enter password and confirm
    cy.get('div .oxd-input').eq(2).type('darshana12345')
    cy.get('div .oxd-input').eq(3).type('darshana12345')
    //cy.get('input').filter('[type="password"]').eq(2).type('darshana12345')
    //cy.get('input').filter('[type="password"]').eq(3).type('darshana12345')

    //submit user
    cy.get('button[type="submit"]').click()
    cy.log('User created successfully with name dash805')
    cy.wait(2000)
    
    //search for added user
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    cy.get('div .oxd-input').eq(1).type('dash805')
    cy.get('div .oxd-select-text').eq(0).type('{downarrow}').click()
    cy.get('input').filter('[placeholder="Type for hints..."]').type('QA')
    cy.wait(2000)
    cy.get('.oxd-autocomplete-text-input').type('{downarrow} {enter}').click()
    cy.get('div .oxd-select-text').eq(1).type('{downarrow}').click()
    cy.get('button[type="submit"]').click()
        
    //validate the users list recived
    cy.wait(2000)
    cy.get('.oxd-table-cell').eq(1).contains('dash805')
    cy.log('User found')
    
    //edit username
    cy.get('div .oxd-table-cell').eq(0).click()
    cy.get('button').filter('[type="button"]').eq(7).click()
    cy.get('.oxd-input').eq(1).clear().type('dash8051')
    cy.get('button[type="submit"]').type('{enter}').click()
    cy.wait(2000)

    // //delete user by selecting checkbox
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    cy.get('div .oxd-input').eq(1).type('dash8051')
    cy.wait(2000)
    cy.get('div .oxd-select-text').eq(1).type('{downarrow}').click()
    cy.get('button[type="submit"]').click()
    cy.get('div .oxd-table-cell').eq(0).click()
    cy.get('button').filter('[type="button"]').eq(5).click()
    cy.get('button').filter('[type="button"]').eq(9).click()
   })
} )