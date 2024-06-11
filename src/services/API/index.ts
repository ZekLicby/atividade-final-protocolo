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

const getToken = () => window.localStorage.getItem("token");

const saveToken = (token) => window.localStorage.setItem("token", token);

// Função para obter o refresh token e atualizar o token de acesso
const refreshAccessToken = async () => {
  const refreshToken = window.localStorage.getItem("refreshToken");
  if (!refreshToken) {
    // Redirecionar para a tela de login se não houver refresh token
    window.location.href = "/login";
    return;
  }

  try {
    const response = await axios.post(`${protocolUrl}/refresh-token`, {
      refreshToken: refreshToken,
    });
    const newToken = response.data.accessToken;
    saveToken(newToken);
    return newToken;
  } catch (error) {
    console.error("Erro ao tentar atualizar o token de acesso:", error);
    // Redirecionar para a tela de login em caso de erro
    window.location.href = "/login";
  }
};

// Interceptor de requisição para adicionar o token de acesso
protocolApi.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de resposta para lidar com erros de autenticação
protocolApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Verificar se o erro é de autenticação e se não foi feita uma tentativa de refresh
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshAccessToken();
      if (newToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return protocolApi(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);
