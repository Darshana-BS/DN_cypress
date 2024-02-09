describe('Test Suite1', () => {

  it('My First Test', () => {

    cy.log("Test 1 started ");
    cy.visit('https://www.youtube.com/')
    cy.log("Navigate to youtube")

    cy.get('input[id="search"]').type("DayDreamer in Hindi")

    cy.get('button[id="search-icon-legacy"] > yt-icon').click()
    cy.log("Test 1 is Complted")
    
  })
  it('My Second Test', () => {

    cy.log("Test 2 started ");
    cy.visit('https://www.youtube.com/')
    cy.log("Navigatec to youtube")
    cy.get('input[id="search"]').type("DayDreamer in Hindi")
    cy.get('button[id="search-icon-legacy"] > yt-icon').click()
    cy.log("Test 1 is Complted")
    cy.log("test log")
  })
})