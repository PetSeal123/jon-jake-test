import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'

Given('I navigate to Google', () => {
    cy.visit(url)
// think about repeatable steps like approving cookies. Maybe a before?
    cy.get('#L2AGLb > .QS5gu').click()
    cy.url().should('eq', 'https://www.google.com/')
})

When('I search for dogs', () => {
  // I started getting an issue here with an element overlapping after the text was typed in so decided 
// a keypress of "Enter" was a better option than clicking the search button.
    cy.get('.gLFyf')
      .type('Dogs{enter}')
    // cy.get('.FPdoLc > center > .gNO89b').click()
  })

Then('I expect to see results for dogs', () => {
    cy.get('.Ftghae > .SPZz6b > .qrShPb > span')
      .should('contain', 'Dog')
  })

  //think about asserting from a defined list of words like Dog dog's or doggy