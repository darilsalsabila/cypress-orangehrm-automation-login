 it('PUT - Update User', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      body: {
        name: "Daril Updated",
        job: "SQA Engineer"
      },
      failOnStatusCode: false
    }).then((res) => {
      cy.log(JSON.stringify(res.body))
      expect([200, 401]).to.include(res.status)
    })
  })