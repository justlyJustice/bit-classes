export default process.env.NODE_ENV === "development"
  ? process.env.PK_TEST_KEY
  : process.env.PK_LIVE_KEY;

export const SK_KEY =
  process.env.NODE_ENV === "development"
    ? process.env.SK_TEST_KEY
    : process.env.SK_LIVE_KEY;
