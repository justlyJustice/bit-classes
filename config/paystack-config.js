import getCurrentUser from "@/utils/getCurrentUser";
import publicKey from "./paystack-key";

const getPayStackConfig = () => {
  const user = getCurrentUser();

  return {
    reference: new Date().getTime().toString(),
    metadata: {
      name: user && user.name,
      description: `Bit CLASS course payment for ${user && user.name}`,
    },
    email: user && user.email,
    amount: 330000,
    publicKey,
  };
};

export default getPayStackConfig;
