# Using Cypress.io or similar, for this Feature file, how would you write steps to automate the
# testing?


Feature: Google
    Scenario: Simple Google Test
        Given I navigate to Google
        When I search for dogs
        Then I expect to see results for dogs