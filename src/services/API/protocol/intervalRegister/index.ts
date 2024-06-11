import { protocolApi } from "services/API";

export const postInternalRegister = async (body) => {
  const url = "/internalRegister";

  return await protocolApi.post(url, body).then((response) => response);
};
