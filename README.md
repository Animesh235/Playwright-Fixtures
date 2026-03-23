# Playwright Testing Framework

A comprehensive Playwright testing framework with industrial components and extensive fixtures for robust end-to-end testing.

## Features

- **Custom Fixtures**: Pre-built fixtures for authentication, API clients, database connections, mobile testing, and persistent contexts
- **Page Objects**: Base page object class and example implementations for maintainable test code
- **API Client**: Utility class for making HTTP requests in tests
- **Configuration Management**: Environment-specific configurations
- **Global Setup**: Automated test environment preparation
- **Parallel Execution**: Optimized for CI/CD with parallel test runs

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npm run install-browsers
   ```

## Project Structure

```
├── fixtures/
│   └── customFixtures.js      # Custom test fixtures
├── pages/
│   ├── BasePage.js            # Base page object class
│   └── LoginPage.js           # Login page object
├── tests/
│   └── example.spec.js         # Example test suite
├── utils/
│   └── APIClient.js            # API client utility
├── config.js                   # Environment configurations
├── global-setup.js             # Global test setup
├── package.json                # Project dependencies
├── playwright.config.js        # Playwright configuration
└── README.md                   # This file
```

## Usage

### Running Tests

Run all tests:
```bash
npm test
```

Run tests in headed mode (visible browser):
```bash
npm run test:headed
```

Run tests in debug mode:
```bash
npm run test:debug
```

### Using Fixtures

Import custom fixtures in your test files:

```javascript
import { test } from '../fixtures/customFixtures.js';

test('my test', async ({ authenticatedPage, apiClient }) => {
  // Use authenticated page
  await authenticatedPage.goto('/dashboard');

  // Use API client
  const data = await apiClient.get('/users');
});
```

### Available Fixtures

- `authenticatedPage`: Pre-authenticated page instance
- `apiClient`: HTTP client for API testing
- `dbConnection`: Database connection for data setup
- `persistentContext`: Browser context with saved storage state
- `mobilePage`: Page with mobile viewport and user agent

### Page Objects

Use page objects for better test maintainability:

```javascript
import { LoginPage } from '../pages/LoginPage.js';

test('login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('username', 'password');
});
```

### Configuration

Set environment variables:
```bash
NODE_ENV=staging npm test
```

Available environments: `development`, `staging`, `production`

## Best Practices

1. **Use Page Objects**: Encapsulate page logic in page object classes
2. **Leverage Fixtures**: Use custom fixtures for common setup/teardown
3. **Parallel Execution**: Tests run in parallel by default for faster execution
4. **Environment Config**: Use config.js for environment-specific settings
5. **API Testing**: Combine UI and API tests using the API client fixture

## Troubleshooting

### Common Issues

1. **Browser not found**: Run `npm run install-browsers` to install Playwright browsers
2. **Tests failing**: Check environment configuration and base URLs
3. **Parallel issues**: Reduce workers in playwright.config.js if needed
4. **Timeout errors**: Increase timeout values in config.js for slow environments

### Debug Mode

Use debug mode to step through tests:
```bash
npm run test:debug
```

### Trace Viewer

View traces for failed tests:
```bash
npx playwright show-trace test-results/*/trace.zip
```
