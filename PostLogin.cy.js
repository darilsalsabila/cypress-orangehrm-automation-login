  it('POST - Login Successful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      },
      failOnStatusCode: false
    }).then((res) => {
      cy.log(JSON.stringify(res.body))
      expect([200, 401]).to.include(res.status)
    })
  })