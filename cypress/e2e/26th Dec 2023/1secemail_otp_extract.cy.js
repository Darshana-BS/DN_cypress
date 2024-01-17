describe('VI Signup using OTP sent email', () =>{
    it('Sign up to HC VI account', () => {
        //visit VI and enter email
        cy.visit('https://uat.v2.viplatform.net/company/get-started');
        cy.wait(4000)
        // const randomEmail = Math.random().toString(4).substring((1,2)+"1secmail.org")
        cy.get('.euiFormControlLayout__childrenWrapper').type('darshana_admin@1secmail.org')
        cy.get('button[type="button"] .eui-textTruncate').click()
        
        //extract OTP
        //open in new tab
    //     it('check the otp in emails for the 1secMail', ()=>{
    //         cy.visit('https://www.1secmail.com/');
    //         cy.get('#login').clear().type('darshana_admin')
    //         //select value of domain from drop-down
    //         cy.get('#domain')
    //         .select('1secmail.org')
    //         .invoke("val").should("eq", "1secmail.org")
    //         //submit
    //         cy.get('button[type="submit"]').click(); 
    //         //implisit wait
    //         cy.wait(1000)
    //         //click the email sent
    //         cy.get('div #content').click()    
    //         //check the email
    //         cy.get('.messagedetails1').should("have.text", "Message details")
    // })
    })
    })
    