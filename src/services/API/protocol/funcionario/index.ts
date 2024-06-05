import { protocolApi } from "../..";
import { useFetch } from "../../../../hooks/useFetch";
import { RefreshTokenResponseDto } from "./types";

/* export const getEmployee = () => {
  const url = "/funcionario";

  const { data } = useFetch(url, {}, true, protocolApi);

  console.log("funcionários", data);

  return { data };
}; */

export const handleLogin = async (username: string, password: string) => {
  // const route = useRouter();
  const url = "/funcionario/login";

  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  return await protocolApi
    .post(url, formData)
    .then((response) => response.data);
};

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
