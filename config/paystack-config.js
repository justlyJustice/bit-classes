const getPayStackConfig = (user) => {
  return {
    reference: new Date().getTime().toString(),
    metadata: {
      name: `Justice Johnson`,
      description: ``,
    },
    email: `justlyjohn198@gmail.com`,
    amount: 300000,
    publicKey: `pk_test_54fa9d1c5c347d77faab46260392e8b92306f20f`,
  };
};

export default getPayStackConfig;
