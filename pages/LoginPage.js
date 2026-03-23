import { BasePage } from './BasePage.js';

/**
 * Login Page Object
 */
export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = '[data-testid="username"]';
    this.passwordInput = '[data-testid="password"]';
    this.loginButton = '[data-testid="login-button"]';
    this.errorMessage = '[data-testid="error-message"]';
  }

  /**
   * Perform login
   * @param {string} username - Username
   * @param {string} password - Password
   */
  async login(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  /**
   * Get error message
   * @returns {string} Error message text
   */
  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }

  /**
   * Check if login was successful
   * @returns {boolean} True if redirected to dashboard
   */
  async isLoginSuccessful() {
    return await this.page.url().includes('/dashboard');
  }
}