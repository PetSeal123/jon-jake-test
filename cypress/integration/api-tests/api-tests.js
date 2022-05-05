import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//set the variable cameara name each time. Try and make it unique each run
const camera_name = "camera12"

Given('I POST new Camera data', () =>{
    cy.request('POST', 'https://608abf88737e470017b73d96.mockapi.io/Cameras/', { "createdAt": "today",
                                                                                "CameraName": camera_name,
                                                                                "CameraLens": "50mm 1.8g",
                                                                                "SelfTimer": false,
                                                                                "Flash": false})
        .then((response) => {
    // response.body is automatically serialized into JSON
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('CameraName',camera_name)
           
    })
})

Then('I can GET the new camera data', () =>{
    cy.request('GET', 'https://608abf88737e470017b73d96.mockapi.io/Cameras/?CameraName=' + camera_name)
       .then((response) => {
            // response.body is automatically serialized into JSON
            expect(response.status).to.eq(200)
            //the string assertion below worked on the post api.
            //It appears to be that the POST returns a response in a different format
            //to the GET
            expect(response).to.have.property('CameraName').to.be.a('string')
            })
})
