describe('OrangeHRM Login Page', () => {
  it('Check 7 elements on login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 1. Logo OrangeHRM
    cy.get("img[alt='company-branding']", { timeout: 10000 })
      .should('exist')
      .and('be.visible');

    // 2. Judul login (Login title) fleksibel
    cy.get("h5.oxd-text.oxd-text--h5.orangehrm-login-title")
      .invoke('text')
      .then((text) => {
        expect(['Login', '登录']).to.include(text.trim());
      });

    // 3. Username field
    cy.get("input[name='username']", { timeout: 10000 }).should('be.visible');

    // 4. Password field
    cy.get("input[name='password']", { timeout: 10000 }).should('be.visible');

    // 5. Login button
    cy.get("button[type='submit']").should('be.visible');

    // 6. Lupa password link (cek multi bahasa dengan regex)
    cy.get(".orangehrm-login-forgot-header")
      .invoke('text')
      .should((txt) => {
        expect(txt.trim()).to.match(/Forgot your password\?|忘了密码[？?]/);
      });

    // 7. Footer text
    cy.get(".orangehrm-copyright-wrapper")
      .should('contain.text', 'OrangeHRM');
  });
});

