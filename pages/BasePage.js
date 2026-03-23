/**
 * Base Page Object class providing common functionality for all pages
 */
export class BasePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a URL
   * @param {string} url - The URL to navigate to
   */
  async navigate(url) {
    await this.page.goto(url);
  }

  /**
   * Wait for page to load
   */
  async waitForLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get page title
   * @returns {string} Page title
   */
  async getTitle() {
    return await this.page.title();
  }

  /**
   * Click an element by selector
   * @param {string} selector - CSS selector
   */
  async click(selector) {
    await this.page.click(selector);
  }

  /**
   * Fill a text input
   * @param {string} selector - CSS selector
   * @param {string} text - Text to fill
   */
  async fill(selector, text) {
    await this.page.fill(selector, text);
  }

  /**
   * Get text content of an element
   * @param {string} selector - CSS selector
   * @returns {string} Text content
   */
  async getText(selector) {
    return await this.page.textContent(selector);
  }

  /**
   * Check if element is visible
   * @param {string} selector - CSS selector
   * @returns {boolean} Visibility status
   */
  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  /**
   * Wait for element to be visible
   * @param {string} selector - CSS selector
   */
  async waitForVisible(selector) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }
}