/**
 * Configuration file for different environments
 */
const config = {
  development: {
    baseURL: 'http://localhost:3000',
    apiURL: 'http://localhost:3000/api',
    timeout: 5000
  },
  staging: {
    baseURL: 'https://staging.example.com',
    apiURL: 'https://staging.example.com/api',
    timeout: 10000
  },
  production: {
    baseURL: 'https://example.com',
    apiURL: 'https://example.com/api',
    timeout: 15000
  }
};

/**
 * Get config for current environment
 * @returns {object} Environment config
 */
export function getConfig() {
  const env = process.env.NODE_ENV || 'development';
  return config[env] || config.development;
}

/**
 * Test data for different scenarios
 */
export const testData = {
  users: {
    admin: {
      username: 'admin',
      password: 'admin123',
      role: 'admin'
    },
    user: {
      username: 'testuser',
      password: 'testpass',
      role: 'user'
    }
  },
  products: [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 20.99 }
  ]
};