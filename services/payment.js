import http from "./http";

export const regsiterCourse = async (reference, email) =>
  await http.post(`/payment`, { reference, email });
