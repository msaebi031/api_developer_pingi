import axios from 'axios';

/**
 * Api is a class that acts as a wrapper for making HTTP requests to your Express server.
 * Each method corresponds to a query (e.g., getuser, updateuser, createserver).
 * Other developers can easily use this class without needing to understand internal server logic.
 */
class Api {
  /**
   * @param {string} baseURL - The base URL of your API (e.g., https://pingi.msaebi.ir/api)
   */
  constructor(baseURL = "https://pingi.msaebi.ir/api") {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Get user data by ID
   * @param {string | number} id - Telegram ID of the user
   * @returns {Promise<Object>} - API response with user data
   */
  async getUser(id) {
    if (!id) throw new Error('User ID is required');
    const response = await this.client.post('/', {
      query: 'getuser',
      id,
    });
    return response.data;
  }

  /**
   * Update user data
   * @param {string | number} id - Telegram ID of the user
   * @param {Object} data - Data to be updated (e.g., { name: "Ali" })
   * @returns {Promise<Object>} - API response indicating success or failure
   */
  async updateUser(id, data) {
    if (!id || !data) throw new Error('Both ID and data are required');
    const response = await this.client.post('/', {
      query: 'updateuser',
      id,
      data,
    });
    return response.data;
  }

  /**
   * Create server for a user
   * @param {Object} options
   * @param {string | number} options.telegram_id - User's Telegram ID
   * @param {string} options.vps_uuid - VPS UUID in valid UUID format
   * @param {string} options.vps_id - VPS ID
   * @param {string} options.vps_id_uniq - Unique VPS ID
   * @returns {Promise<Object>} - API response indicating success or failure
   */
  async createServer({ telegram_id, vps_uuid, vps_id, vps_id_uniq }) {
    if (!telegram_id || !vps_uuid || !vps_id || !vps_id_uniq)
      throw new Error('All fields are required');

    const response = await this.client.post('/', {
      query: 'createserver',
      telegram_id,
      vps_uuid,
      vps_id,
      vps_id_uniq,
    });
    return response.data;
  }
}

export default Api;
