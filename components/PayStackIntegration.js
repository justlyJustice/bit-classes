import styles from "@/styles/Home.module.css";

import { toast } from "react-toastify";
import { usePaystackPayment } from "react-paystack";

import getPayStackConfig from "@/config/paystack-config";
import { regsiterCourse } from "@/services/payment";

const PayStackIntegration = () => {
  const config = getPayStackConfig();
  const initializePayment = usePaystackPayment(config);

  const verifyTransaction = async (reference) => {
    const res = await regsiterCourse(reference.reference, config.email);

    if (res.ok) {
      alert(res.data.message);
    }

    if (!res.ok) {
      alert(res.data.message);
    }
  };

  const onSuccess = (reference) => {
    verifyTransaction(reference);
  };

  const onClose = () => {
    toast.error(`Transaction was canceled`);
  };

  return (
    <button
      className={styles.payBtn}
      onClick={() => initializePayment(onSuccess, onClose)}
    >
      Pay Now <i className="fa-solid fa-money-bill"></i>
    </button>
  );
};

export default PayStackIntegration;
