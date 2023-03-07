import { setCookie } from "cookies-next";

const setUserCookie = (userData, req, res) => {
  const expireDate = new Date();
  const options = {
    req,
    res,
    sameSite: "strict",
    expires: expireDate.setMonth(expireDate.getMonth() + 1),
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
