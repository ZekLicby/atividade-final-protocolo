import axios from "axios";
import { getRefreshToken } from "./protocol/employee";

const protocolUrl = "https://setordeprotocolos-ppcngf23.b4a.run";

export const protocolApi = axios.create({
  baseURL: protocolUrl,
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const token = localStorage.getItem("token");

if (token) {
  protocolApi.defaults.headers.Authorization = `Bearer ${token}`;
}

protocolApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error?.config;
    if (error?.response?.status === 401) {
      originalRequest._entry = true;
      await refreshAccessToken();
      const newToken = localStorage.getItem("token");
      originalRequest.headers.Authorization = `Bearer ${newToken}`;

      return await protocolApi(originalRequest);
    }
    return await Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  if (!token) {
    //navegar pra tela de login
    return;
  }

  try {
    const response = await getRefreshToken(token);
    localStorage.setItem("token", response.accessToken);
  } catch (error) {
    console.error(error);
  }
};
