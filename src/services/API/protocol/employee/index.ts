import { protocolApi } from "../..";
import { RefreshTokenResponseDto } from "./types";

export const handleLogin = async (username: string, password: string) => {
  // const route = useRouter();
  const url = "/employee/login";

  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  return await protocolApi
    .post(url, formData)
    .then((response) => response.data);
};

export const registerEmployee = async(body) => {
const url = "employee"



  return await protocolApi.post(url, body).then((response) => response.data)
} 

export const getRefreshToken = async (oldToken: string) => {
  const body = {
    oldToken,
  };

  //const parsedBody = qs.stringify(body);
  const url = "/token/refresh";
  return await protocolApi
    .put<RefreshTokenResponseDto>(url, body)
    .then((response) => response.data);
};
