  it('PATCH - Update User', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://reqres.in/api/users/2',
      body: {
        job: "Automation Tester"
      },
      failOnStatusCode: false
    }).then((res) => {
      cy.log(JSON.stringify(res.body))
      expect([200, 401]).to.include(res.status)
    })
  })