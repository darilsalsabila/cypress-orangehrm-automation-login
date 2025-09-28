describe('OrangeHRM Login Feature', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('TC01 - Login with valid username and password', () => {
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard/index')
  })

  it('TC02 - Login with valid username and invalid password', () => {
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type('Admin')
    cy.get('input[name="password"]').type('wrongpass')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials')
  })

  it('TC03 - Login with invalid username and valid password', () => {
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type('WrongUser')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials')
  })

  it('TC04 - Login with empty username and filled password', () => {
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-group > .oxd-text')
      .invoke('text')
      .should((txt) => {
        expect(txt.trim()).to.match(/Required|需要/)
      })
  })

  it('TC05 - Login with filled username and empty password', () => {
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type('Admin')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-group > .oxd-text')
      .invoke('text')
      .should((txt) => {
        expect(txt.trim()).to.match(/Required|需要/)
      })
  })
})
