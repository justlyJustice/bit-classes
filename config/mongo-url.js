export default process.env.NODE_ENV === "development"
  ? process.env.DEV_MONGO_URI
  : process.env.PROD_MONGO_URI;
