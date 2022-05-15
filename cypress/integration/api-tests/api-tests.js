import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// set the variable camearaName each time. Try and make it unique each run
// look into ways of randomly making the camera data different each run.
const createdAt = 'today'
const cameraName = 'SuperCam900'
const cameraLens = '111mm'
const selfTimer = true
const flash = true

Given('I POST then GET and assert the data', () => {
    cy.request({
        method: 'POST',
        url: 'https://608abf88737e470017b73d96.mockapi.io/Cameras/',
        body: {
            "createdAt": createdAt,
            "CameraName": cameraName,
            "CameraLens": cameraLens,
            "SelfTimer": selfTimer,
            "Flash": flash
        }
    })
    .then((response) => {
        cy.log('The POST response is: ' + response.status)
        cy.log('New Camera ID is: ' + response.body.id)
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('CameraName', cameraName)

    })
    .then((response) => {
        // this code has to be separated from cypress code
        // something about syc and async code in the same .then
        const cameraId = response.body.id
        return cameraId
    })
        .then((cameraId) => {
            cy.request({
                method: 'GET',
                url: 'https://608abf88737e470017b73d96.mockapi.io/Cameras/' + cameraId
            })
              .then((response) => {
                // logging the response body could be a nice way of seeing what was used
                // I also like to inspect the cypress steps to see this.
                    cy.log(JSON.stringify(response))
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.property('id', cameraId)
                    expect(response.body).to.have.property('CameraName').to.be.a('string')
                    expect(response.body).to.have.property('Flash').to.be.a('Boolean')
                })
                // I think to add the delete I need to return the camera ID again. 
                // I dislike how many .then's I'm using and should instead learn 
                // to inherit/share vairables between cucumber steps to tidy it up.
                // .then((cameraId) => {
                //     cy.request({
                //         method: 'DELETE',
                //         url: 'https://608abf88737e470017b73d96.mockapi.io/Cameras/' + cameraId
                //     })
                // })

        })
})

// Given('I POST new Camera data', () =>{

//     cy.request({
//         method: 'POST',
//         url: 'https://608abf88737e470017b73d96.mockapi.io/Cameras/',
//         body: { "createdAt": createdAt,
//                 "CameraName": cameraName,
//                 "CameraLens": cameraLens,
//                 "SelfTimer": selfTimer,
//                 "Flash": flash}
//         })
//     .then((response) => {
//         const cameraId = response.body.id
//         cy.log(JSON.stringify(response))
//         cy.log('New Camera ID is: ' + cameraId)
//         expect(response.status).to.eq(201)
//         expect(response.body).to.have.property('CameraName', cameraName)

//     })
// })

// Then('I can GET the new camera data', () =>{

//     cy.log('Camera ID = ' + cameraId)
//     cy.request({
//         method : 'GET',
//         url: 'https://608abf88737e470017b73d96.mockapi.io/Cameras/' + cameraId,
//         })
//     .then((response)=> {
//         cy.log(JSON.stringify(response))
//         expect(response.status).to.eq(200)
//         expect(response.body).to.have.property('id', cameraId)
//         expect(response.body).to.have.property('CameraName').to.be.a('string')
//         expect(response.body).to.have.property('Flash').to.be.a('Boolean')
//     })
// })
