import { test } from '../fixtures/customFixtures.js';
import { LoginPage } from '../pages/LoginPage.js';
import { getConfig, testData } from '../config.js';

test.describe('Authentication Tests', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const config = getConfig();

    await page.goto(`${config.baseURL}/login`);
    await loginPage.login(testData.users.user.username, testData.users.user.password);

    // Assert login success
    await test.expect(page).toHaveURL(/dashboard/);
  });

  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const config = getConfig();

    await page.goto(`${config.baseURL}/login`);
    await loginPage.login('invalid', 'invalid');

    // Assert error message
    const errorMessage = await loginPage.getErrorMessage();
    test.expect(errorMessage).toContain('Invalid credentials');
  });
});

test.describe('Authenticated Tests', () => {
  test('should access dashboard with authenticated page fixture', async ({ authenticatedPage }) => {
    // Already authenticated via fixture
    await test.expect(authenticatedPage).toHaveURL(/dashboard/);

    // Perform actions on dashboard
    await authenticatedPage.click('[data-testid="profile-link"]');
    await test.expect(authenticatedPage).toHaveURL(/profile/);
  });
});

test.describe('API Tests', () => {
  test('should fetch user data via API client', async ({ apiClient }) => {
    const userData = await apiClient.get('/users/1');
    test.expect(userData).toHaveProperty('id');
    test.expect(userData).toHaveProperty('name');
  });
});

test.describe('Mobile Tests', () => {
  test('should work on mobile viewport', async ({ mobilePage }) => {
    await mobilePage.goto('/');

    // Check mobile-specific behavior
    const viewport = mobilePage.viewportSize();
    test.expect(viewport?.width).toBeLessThanOrEqual(375);
  });
});