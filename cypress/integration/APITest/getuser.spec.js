/// <reference types="Cypress" />

describe('api test cases',() => {
    let accesstoken= '65e105d3da7c0170a2ebaef3fd882ed48786ebfec86790469944a4d1dea0829b'
    it('get user', () => {        
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer '+accesstoken,
                'content-type' : 'application/json'
              }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.meta.pagination).has.property('limit',20)
            
        })
    })

    it('get user by id', () => {
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users/2252',
            headers: {
                'authorization': 'Bearer '+accesstoken,
                'content-type' : 'application/json'
              }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data.name).to.eq('Jaspreet Singh')
        })    
    })  
})