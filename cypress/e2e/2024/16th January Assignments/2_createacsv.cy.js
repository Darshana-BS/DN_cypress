
beforeEach(() =>
{
    cy.writeFile('cypress/fixtures/products.csv', '')
})

const products = ["iphone 14", 'oppo 11']

//flipcart login

// search one by one
describe('product listing in csv file', ()=> {
    it('Fplicart login', () =>
    {
        cy.visit('https://www.flipkart.com/account/login?ret=/')
        cy.get('.IiD88i').type('7454339242')
    })
    it('find elements', () =>{
       cy.wrap(products).each((productName) => {
        cy.visit("https://www.flipkart.com/");
        cy.wait(2000)
        cy.get('._2SmNnR .Pke_EE').type(productName)
        cy.get('.JFPqaw').click()
        cy.get('._2iLD__[type="Submit"]').click()
        
        const finalresults = []

        cy.get('._2kHMtA').each(($el, index) => {
            
            if (index < 10) {
                cy.wrap($el).find('._4rR01T').invoke('text').then((itemName) => {
                    cy.wrap($el).find('._2_R_DZ').invoke('text').then((Rating) => {
                    cy.wrap($el).find('._30jeq3').invoke('text').then((Price) => {
                    cy.wrap($el).find('._1fQZEK').invoke('text').then((urL) => {
                        finalresults.push({itemName, Rating, Price, urL})
                            })
                        })
                    })
                })
            }
            }).then(() => {
                // Write top 10 results to CSV
                const csvContent = finalresults.map(({ itemName, Rating, Price, urL }) =>
                  `${itemName},${Rating},${Price},${urL}`
                ).join('\n');
        
                cy.writeFile('cypress/fixtures/products.csv', csvContent, { flag: 'a+' }); // Append to CSV file
              });
            });
          });
        });