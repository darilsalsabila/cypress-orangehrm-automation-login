import LoginPage from '../pages/loginpage'
import loginData from '../fixtures/loginData.json'

describe('OrangeHRM Login Tests (POM)', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
  })

  // ✅ TC01: Login dengan data valid
  it('TC01 - Login dengan data valid', () => {
    loginPage.enterUsername(loginData.validUser.username)
    loginPage.enterPassword(loginData.validUser.password)
    loginPage.clickLogin()
    loginPage.verifyLoginSuccess()
  })

  // ❌ TC02: Login dengan password salah
  it('TC02 - Login dengan password salah', () => {
    loginPage.enterUsername(loginData.invalidPassword.username)
    loginPage.enterPassword(loginData.invalidPassword.password)
    loginPage.clickLogin()
    loginPage.verifyLoginFailed()
  })

  // ❌ TC03: Login dengan username salah
  it('TC03 - Login dengan username salah', () => {
    loginPage.enterUsername(loginData.invalidUsername.username)
    loginPage.enterPassword(loginData.invalidUsername.password)
    loginPage.clickLogin()
    loginPage.verifyLoginFailed()
  })

  // ⚠️ TC04: Username kosong
  it('TC04 - Login dengan username kosong', () => {
    loginPage.enterUsername(loginData.emptyUsername.username)
    loginPage.enterPassword(loginData.emptyUsername.password)
    loginPage.clickLogin()
    loginPage.verifyEmptyFieldError()
  })

  // ⚠️ TC05: Password kosong
  it('TC05 - Login dengan password kosong', () => {
    loginPage.enterUsername(loginData.emptyPassword.username)
    loginPage.enterPassword(loginData.emptyPassword.password)
    loginPage.clickLogin()
    loginPage.verifyEmptyFieldError()
  })
})
