import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//set the variable camearaName each time. Try and make it unique each run

//I might install day.js when I have everything else sorted as it sounds useful for this.
//also maybe a way of getting the user to imput the data or randomly generate it. 
const createdAt = 'today'
const cameraName = 'SuperCam300'
const cameraLens = '60mm'
const selfTimer = true
const flash = false

Given('I POST new Camera data', () =>{

    cy.request({
        method: 'POST',
        url: 'https://608abf88737e470017b73d96.mockapi.io/Cameras/',
        body: { "createdAt": createdAt,
                "CameraName": cameraName,
                "CameraLens": cameraLens,
                "SelfTimer": selfTimer,
                "Flash": flash}
        })
    .then((response) => {
        const cameraId = response.body.id
        cy.log(JSON.stringify(response))
        cy.log('New Camera ID is: ' + cameraId)
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('CameraName', cameraName)
           
    })
})

Then('I can GET the new camera data', () =>{

    cy.log('Camera ID = ' + cameraId)
    cy.request({
        method : 'GET',
        url: 'https://608abf88737e470017b73d96.mockapi.io/Cameras/' + cameraId,
        })
    .then((response)=> {
        cy.log(JSON.stringify(response))
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', cameraId)
        expect(response.body).to.have.property('CameraName').to.be.a('string')
        expect(response.body).to.have.property('Flash').to.be.a('Boolean')
    })
})


