describe("Login HC", () => {
  it("Login to HC", () => {
    cy.visit("https://uat.v2.viplatform.net/company/get-started"); // Visita la pagina de inicio del sitio
    cy.wait(10000);

    //enter email
    cy.get(".euiFormControlLayout__childrenWrapper").type(
      "darshana_templatesmigration@1secmail.org"
    );
    cy.get(".eui-textTruncate").click();
    cy.wait(4000);

    //checking the emails inbox
    cy.request(
      "GET",
      "https://www.1secmail.com/api/v1/?action=getMessages&login=darshana_templatesmigration&domain=1secmail.org"
    ).then((response) => {
      expect(response.status).to.eq(200);
      const emailid = response.body[0].id;
      console.log(emailid);

      //fetching single email
      cy.request(
        "GET",
        `https://www.1secmail.com/api/v1/?action=readMessage&login=darshana_templatesmigration&domain=1secmail.org&id=${emailid}`
      ).then((response) => {
        expect(response.status).to.eq(200);
        console.log({ response });
        // var body = JSON.parse(response.body);
        // cy.wrap(response.body).as("EmailBody");
        // }).should(() => {
        //     cy.get("@EmailBody")
        //     .its("subject")
        //     .should("include", "Please verify your account");
        //     })

        //extract OTP from the email
        const otpLine = response.body.textBody.match(/\\n\\n\d+\\n\\n/);
        console.log(otpLine);
      });
    });
  });
});
