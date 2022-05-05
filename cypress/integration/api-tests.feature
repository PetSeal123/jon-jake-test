
Feature: Google
    Scenario: POST request successful and accurate
        Given I POST new Camera data 
        Then I can GET the new camera data
        #And the cameraName is a string 
        # And the Flash value is a boolean
        