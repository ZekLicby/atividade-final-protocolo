import { protocolApi } from "services/API";

export const postExternalRegister = async (body) => {
  const url = "/externalRegister";

  return await protocolApi.post(url, body).then((response) => response);
};
