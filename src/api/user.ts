import { request } from "../services/api";

export const getUserDetails = async () => {
  const response = await request({
    url: "/auth/get-profile?Client_id=5527aa9c-b306-4728-b069-31acd7f5d994",
    method: "GET",
  });
  return response;
};
