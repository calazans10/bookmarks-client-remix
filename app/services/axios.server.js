import axios from "axios";
import invariant from "tiny-invariant";

invariant(process.env.API_URL, "API_URL must be set");
invariant(process.env.APP_TIMEOUT, "APP_TIMEOUT must be set");

const API_URL = process.env.API_URL;
const APP_TIMEOUT = process.env.APP_TIMEOUT;

const getClient = () => {
  const options = {
    baseURL: `${API_URL}/api`,
    timeout: APP_TIMEOUT,
  };

  const client = axios.create(options);

  // Add a response interceptor
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  return client;
};

class AxiosClient {
  constructor() {
    this.client = getClient();
  }

  async get(url, conf = {}) {
    try {
      const response = await this.client.get(url, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete(url, conf = {}) {
    try {
      const response = await this.client.delete(url, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async head(url, conf = {}) {
    try {
      const response = await this.client.head(url, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async options(url, conf = {}) {
    try {
      const response = await this.client.options(url, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async post(url, data = {}, conf = {}) {
    try {
      const response = await this.client.post(url, data, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async put(url, data = {}, conf = {}) {
    try {
      const response = await this.client.put(url, data, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async patch(url, data = {}, conf = {}) {
    try {
      const response = await this.client.patch(url, data, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default AxiosClient;
