import Cookies from "js-cookie";

const setUserCookie = (userData) => {
  const options = {
    sameSite: "strict",
    expires: new Date(
      Date.now() + process.env.NEXT_PUBLIC_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  return Cookies.set(
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
