import { getCookie } from "cookies-next";

function getCurrentUser() {
  const cookie = getCookie("user");

  return cookie && JSON.parse(cookie);
}

export default getCurrentUser;
