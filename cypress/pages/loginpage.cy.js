export class LoginPage{

    LoginPage_usernmae_id = '#uname'
    LoginPage_password_id = '#pwd'
    LoginPage_ClickSubmit_type = '[type="submit"]'
    
    VisitPage(url)
    {
        cy.visit(url)
    }

    EnterUsername(username){
        cy.get(this.LoginPage_usernmae_id).type(username)

    }

    EnterPassword(password){
        cy.get(this.LoginPage_password_id).type(password)
    }

    ClickSubmit(){
        cy.get(this.LoginPage_ClickSubmit_type).click()
    }

    VerfiyText(){
        cy.get('.main h4').eq(0).contains('Click')

    }
    VerifyLogin(){
        cy.log('Login Success')
    }

}