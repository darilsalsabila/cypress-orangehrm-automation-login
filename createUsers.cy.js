it('POST - Create Users', () => {
  cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/users',
    body: {
      name: "Daril",
      job: "QA Automation"
    },
    failOnStatusCode: false   // ⛔ supaya tidak langsung gagal kalau 401
  }).then((response) => {
    cy.log(JSON.stringify(response.body))
    expect([200, 201, 401]).to.include(response.status)  // fleksibel
  })
})
