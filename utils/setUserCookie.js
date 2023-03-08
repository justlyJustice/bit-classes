import { setCookie } from "cookies-next";

const setUserCookie = (userData, req, res) => {
  const options = {
    req,
    res,
    sameSite: "strict",
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
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
