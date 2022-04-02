import AxiosClient from "./axios.server";

const client = new AxiosClient();

export const requestSignIn = async (payload) => {
  const response = await client.post("/v1/session", payload);
  return response.data;
};

export const requestSignUp = async (payload) => {
  const response = await client.post("/v1/registration", payload);
  return response.data;
};
