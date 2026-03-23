import { test as base } from '@playwright/test';

// Custom fixtures for industrial testing
export const test = base.extend({
  // Authenticated page fixture
  authenticatedPage: async ({ page }, use) => {
    // Example login - replace with actual login logic
    await page.goto('/login');
    await page.fill('[data-testid="username"]', 'testuser');
    await page.fill('[data-testid="password"]', 'testpass');
    await page.click('[data-testid="login-button"]');
    await page.waitForURL('/dashboard');
    await use(page);
  },

  // API client fixture
  apiClient: async ({}, use) => {
    const { APIClient } = await import('../utils/APIClient.js');
    const client = new APIClient();
    await use(client);
  },

  // Database fixture for seeding
  dbConnection: async ({}, use) => {
    // Example database connection - replace with actual DB setup
    const db = { connected: true }; // Mock
    await use(db);
    // Cleanup
  },

  // Browser context with storage state
  persistentContext: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: 'storageState.json' // Load saved state
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },

  // Mobile viewport fixture
  mobilePage: async ({ browser }, use) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  }
});