cy.contains(/\b(\d+)\b/).invoke('text').then((text) => {
  const match = text.match(/\b(\d+)\b/);

  if (match) {
    const number = match[1];
    cy.log('Found number:', number);
    // Perform your assertions or actions with the extracted number
  } else {
    cy.log('No match found.');
    // Handle the case where no match is found
  }
});
