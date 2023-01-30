import getCurrentUser from "@/utils/getCurrentUser";

const getPayStackConfig = () => {
  const user = getCurrentUser();

  return {
    reference: new Date().getTime().toString(),
    metadata: {
      name: user && user.name,
      description: `Bit CLASSES course registration and payment.`,
    },
    email: user && user.email,
    amount: 300000,
    // publicKey: process.env.PK_TEST_KEY,
    publicKey: `pk_test_54fa9d1c5c347d77faab46260392e8b92306f20f`,
  };
};

export default getPayStackConfig;
