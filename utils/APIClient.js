/**
 * API Client for making HTTP requests
 */
export class APIClient {
  constructor(baseURL = 'http://localhost:3000/api') {
    this.baseURL = baseURL;
  }

  /**
   * Make a GET request
   * @param {string} endpoint - API endpoint
   * @param {object} headers - Request headers
   * @returns {Promise<object>} Response data
   */
  async get(endpoint, headers = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
    return await response.json();
  }

  /**
   * Make a POST request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request body
   * @param {object} headers - Request headers
   * @returns {Promise<object>} Response data
   */
  async post(endpoint, data, headers = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  /**
   * Make a PUT request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request body
   * @param {object} headers - Request headers
   * @returns {Promise<object>} Response data
   */
  async put(endpoint, data, headers = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  /**
   * Make a DELETE request
   * @param {string} endpoint - API endpoint
   * @param {object} headers - Request headers
   * @returns {Promise<object>} Response data
   */
  async delete(endpoint, headers = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
    return await response.json();
  }

  /**
   * Set authorization token
   * @param {string} token - Auth token
   */
  setAuthToken(token) {
    this.authToken = token;
  }

  /**
   * Get default headers with auth
   * @returns {object} Headers object
   */
  getAuthHeaders() {
    return this.authToken ? { Authorization: `Bearer ${this.authToken}` } : {};
  }
}