import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const apiEndpoint = 'https://608abf88737e470017b73d96.mockapi.io/Cameras/'

const newCameraData = [
    {
        "createdAt": '15:43',
        "CameraName": "Pete's New Camera",
        "CameraLens": "6000mm",
        "SelfTimer": false,
        "Flash": false
    }
]
Given('I POST new Camera data', () => {
    cy.request({
        method: 'POST',
        url: apiEndpoint,
        body: newCameraData    })
// include the assertion on teh 201 status here
    .its("status")
    .should("eq", 201)
});


// Then('Then I GET the new camrea data', () => {
    
//     });

// And('Keys are all correct', ()=>{
//     cy.request('enter the request to bring back new camera data'
//       .its('body')
//       .each(value => {
//           expect(value).to.have.all.keys('createdAt','CameraName','CameraLens','SelfTimer','Flash','id')

//       })
//     )
// })