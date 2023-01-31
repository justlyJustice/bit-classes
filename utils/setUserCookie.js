import { setCookie } from "cookies-next";

const setUserCookie = (userData, req, res) => {
  const options = {
    req,
    res,
    sameSite: "strict",
    expires: new Date("10 February 2023 12:00:00"),
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  return setCookie(
    "user",
    JSON.stringify({
      email: userData.email,
      name: userData.name,
      hasRegistered: userData.hasRegistered,
      isPaymentConfirmed: userData.isPaymentConfirmed,
    }),
    options
  );
};

export default setUserCookie;
