import AxiosClient from "./axios.server";

const client = new AxiosClient();

export const requestGetBookmarks = async (userToken) => {
  const conf = { headers: { Authorization: `Bearer ${userToken}` } };
  const response = await client.get("/v1/bookmarks", conf);
  return response.data;
};

export const requestCreateBookmark = async (userToken, payload) => {
  const conf = { headers: { Authorization: `Bearer ${userToken}` } };
  const response = await client.post("/v1/bookmarks", payload, conf);
  return response.data;
};

export const requestGetBookmark = async (userToken, bookmarkId) => {
  const conf = { headers: { Authorization: `Bearer ${userToken}` } };
  const response = await client.get(`/v1/bookmarks/${bookmarkId}`, conf);
  return response.data;
};

export const requestUpdateBookmark = async (userToken, bookmarkId, payload) => {
  const conf = { headers: { Authorization: `Bearer ${userToken}` } };
  const response = await client.put(
    `/v1/bookmarks/${bookmarkId}`,
    payload,
    conf
  );
  return response.data;
};

export const requestDeleteBookmark = async (userToken, bookmarkId) => {
  const conf = { headers: { Authorization: `Bearer ${userToken}` } };
  const response = await client.delete(`/v1/bookmarks/${bookmarkId}`, conf);
  return response.data;
};
