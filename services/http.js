/* eslint-disable import/no-anonymous-default-export */
import { create } from "apisauce";
import { toast } from "react-toastify";

const client = create({
  baseURL: "/api",
});

client.axiosInstance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) toast.error("Server error!!!", { closeButton: true });

  return Promise.reject(error);
});

export default {
  get: client.get,
  post: client.post,
  put: client.put,
  delete: client.delete,
};
