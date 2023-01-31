import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { usePaystackPayment } from "react-paystack";

import styles from "@/styles/Pages.module.css";
import getPayStackConfig from "@/config/paystack-config";
import { regsiterCourse } from "@/services/payment";

const PayStackIntegration = () => {
  const router = useRouter();
  const config = getPayStackConfig();
  const initializePayment = usePaystackPayment(config);
  const [loading, setLoading] = useState(false);

  const verifyTransaction = async (reference) => {
    setLoading(true);
    const res = await regsiterCourse(reference.reference, config.email);
    setLoading(false);

    if (res.ok) {
      toast.success(res.data.message);

      setTimeout(() => {
        router.push(`/success`);
      }, 2000);
    }

    if (!res.ok) {
      toast.error(res.data.message);
    }
  };

  const onSuccess = (reference) => {
    verifyTransaction(reference);
  };

  const onClose = () => {
    toast.warn(`Transaction was canceled`);
  };

  return (
    <button
      className={styles.payBtn}
      onClick={() => initializePayment(onSuccess, onClose)}
      disabled={loading}
    >
      {loading ? (
        <>
          Verifying Transaction <i className="fa-solid fa-spinner fa-pulse"></i>
        </>
      ) : (
        <>
          Pay Now <i className="fa-solid fa-money-bill"></i>
        </>
      )}
    </button>
  );
};

export default PayStackIntegration;
