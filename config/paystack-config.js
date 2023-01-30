import getCurrentUser from "@/utils/getCurrentUser";
import publicKey from "./paystack-key";

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
    publicKey,
  };
};

export default getPayStackConfig;
