describe('OrangeHRM - 7 Actions & 7 Assertions (versi aman)', () => {

  Cypress.on('uncaught:exception', () => false) // biar error bawaan app tidak ganggu

  it('should test 7 actions and 7 assertions', () => {

    // === 1. Action: buka halaman login ===
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRM') // Assertion 1

    // === 2. Action: isi username ===
    cy.get('body').then(($body) => {
      if ($body.find("input[name='username']").length > 0) {
        cy.get("input[name='username']").type('Admin')
      } else {
        cy.get("input[placeholder='Username']").type('Admin')
      }
    })
    // Assertion 2: username tidak kosong
    cy.get("input[name='username'], input[placeholder='Username']")
      .invoke('val').should('not.be.empty')

    // === 3. Action: isi password ===
    cy.get('body').then(($body) => {
      if ($body.find("input[name='password']").length > 0) {
        cy.get("input[name='password']").type('admin123')
      } else {
        cy.get("input[placeholder='Password']").type('admin123')
      }
    })
    // Assertion 3: password tidak kosong
    cy.get("input[name='password'], input[placeholder='Password']")
      .invoke('val').should('not.be.empty')

    // === 4. Action: klik tombol login ===
    cy.get("button[type='submit']").click()
    cy.url().should('include', '/dashboard') // Assertion 4

    // === 5. Assertion: profile user muncul ===
    cy.get('.oxd-userdropdown-name', { timeout: 10000 })
      .should('be.visible')

    // === 6. Action: logout ===
    cy.get('.oxd-userdropdown-tab').click()
    cy.contains('Logout').click()
    cy.title().should('eq', 'OrangeHRM') // Assertion 5

    // === 7. Action: klik menu Forgot Password ===
    cy.contains("Forgot your password?", { timeout: 10000 }).click()
    cy.contains("h6", "Reset Password", { timeout: 10000 })
      .should('be.visible') // Assertion 6

    // Assertion 7: cek URL reset password
    cy.url().should('include', '/requestPasswordResetCode')
  })
})
