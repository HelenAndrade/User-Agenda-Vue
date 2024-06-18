import axios, { AxiosError } from "axios";
import type { AxiosRequestConfig, AxiosInstance } from "axios";
function apiConfig(baseUrl: string): AxiosRequestConfig {
  return {
    baseURL: baseUrl,
  };
}

function initAxios(config: AxiosRequestConfig, token?: any): AxiosInstance {
  const defineInstance = axios.create(config);
  defineInstance.interceptors.request.use(
    (request: any) => {
      return request;
    },
    (error) => Promise.reject(error)
  );

  defineInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      alert(error);
      return Promise.reject(error);
    }
  );

  return defineInstance;
}

function api(baseURL= "https://6669f9352e964a6dfed7431b.mockapi.io/api/v1", token?: any) {
  return initAxios(apiConfig(baseURL), token);
}

export default api;
