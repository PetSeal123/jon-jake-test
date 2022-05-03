import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'

Given('I navigate to Google', () => {
    cy.visit(url)
// think about repeatable steps like approving cookies. Maybe a before?
    cy.get('#L2AGLb > .QS5gu').click()
    cy.url().should('eq', 'https://www.google.com/')
})

When('I search for dogs', () => {
    cy.get('.gLFyf').type('Dogs'),
    cy.get('.FPdoLc > center > .gNO89b').click()
  })

Then('I expect to see results for dogs', () => {
    cy.get('.Ftghae > .SPZz6b > .qrShPb > span')
      .should('contain', 'Dog')
    cy.get(':nth-child(1) > .g > .kWxLod > [style="flex-grow:1"] > .jGGQ5e > .yuRUbf > a > .LC20lb')
      .should('contain', 'dog')
  })

  //think about asserting from a defined list of words like Dog dog's or doggy