  it('DELETE - User', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false
    }).then((res) => {
      expect([204, 401]).to.include(res.status)
    })
  })