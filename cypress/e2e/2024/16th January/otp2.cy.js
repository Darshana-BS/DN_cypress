describe("Login HC", () => {
  it("Login to HC", () => {
    cy.visit("https://uat.v2.viplatform.net/company/get-started"); // Visita la pagina de inicio del sitio
    cy.wait(5000);

    //enter email
    cy.get(".euiFormControlLayout__childrenWrapper").type(
      "darshana_templatesmigration@1secmail.org"
    );
    cy.get(".eui-textTruncate").click();
    cy.wait(4000);

    //checking all emails inbox
    cy.request(
      "GET",
      "https://www.1secmail.com/api/v1/?action=getMessages&login=darshana_templatesmigration&domain=1secmail.org"
    ).then((response) => {
      expect(response.status).to.eq(200);
      const emailid = response.body[0].id;
      return emailid;
      console.log(emailid);

      //fetching single message
      cy.request(
        "GET",
        `https://www.1secmail.com/api/v1/?action=readMessage&login=darshana_templatesmigration&domain=1secmail.org&id=${emailid}`
      ).then((response) => {
        expect(response.status).to.eq(200);
        // const emailnumber = response.body[0]
        // expect(response.body).to.have.length(5)
      });

      cy.wait(10000);

      //extract otp
      //   cy.request(
      //     `https://www.1secmail.com/api/v1/?action=readMessage&login=darshana_templatesmigration&domain=1secmail.org&id=${emailid}`
      //   ).then((html) => {
      //     const otpLine = html.body.match(/.*Here's your OTP.*/);
      //     console.log(otpLine);
      //   });
    });

    //   .then((emailid) => {
  });

  //   .then((emailid) => {
});

// it('Check id', () => {
// var data = response.json()
// console.log(data)
// expect(data[0]).property('id').to.not.be.oneof([null, ""])
// const body = (response.body)
// emailId = body['id']
// console.log(emailId)
// })

// //fetch email
// cy.request("GET", "https://www.1secmail.com/api/v1/?action=readMessage&login=darshana_templatesmigration&domain=1secmail.org&id=emailId")
// .should((response) => {
//     expect(response.status).to.eq(200)
// })
