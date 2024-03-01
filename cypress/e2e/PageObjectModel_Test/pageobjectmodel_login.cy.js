// it('Login test', function(){
//     cy.visit('https://trytestingthis.netlify.app/')
//     cy.get('#uname').type('test')
//     cy.get('#pwd').type('test')
//     cy.get('[type="submit"]').click()

//     //asssersion
//     cy.get('.main h4').eq(0).contains('Click')
//     cy.log('Login Success')
// })


//with pageobjectmodel way 1
//import class from page
import {LoginPage} from "../../pages/loginpage.cy"

const loginpage = new LoginPage()
it('Login test', function(){
    loginpage.VisitPage('https://trytestingthis.netlify.app/')
    loginpage.EnterUsername('test')
    loginpage.EnterPassword('test')
    loginpage.ClickSubmit()
    loginpage.VerfiyText()
    loginpage.VerifyLogin()
})