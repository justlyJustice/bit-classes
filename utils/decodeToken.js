import jwt from "jsonwebtoken";

const decodeToken = (token) => {
  try {
    return jwt.decode(token);

    /* if (verified) return jwt.decode(verified); */
  } catch (error) {
    console.log(error);
  }
};

export default decodeToken;
