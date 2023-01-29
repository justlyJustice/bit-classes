import http from "./http";

export const regsiterUser = async (userData) =>
  await http.post(`/auth`, userData);
