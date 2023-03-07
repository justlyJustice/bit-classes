import { setCookie } from "cookies-next";

const setUserCookie = (userData, req, res) => {
  var date = new Date();
  const options = {
    req,
    res,
    sameSite: "strict",
    expires: date.setTime(date.getTime() + Date.now() * 24 * 60 * 60 * 1000),
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
