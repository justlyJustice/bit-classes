import Image from "next/image";

import Head from "@/components/Head";
import PayStackIntegration from "@/components/PayStackIntegration";

import illustration from "@/public/images/payment.png";
import styles from "@/styles/Pages.module.css";

const Payment = () => {
  return (
    <>
      <Head
        title="Bit CLASSES - Payment"
        description="ICT is made simple with our Bit CLASSES.  We teach you timely and practical topics that you would find rather difficult elsewhere… ranging from Wordpress, Back-end Development, Front-end Development, Ethical Hacking, Graphics, Social Media Utilization, e.t.c"
        image="/images/web-logo.png"
      />

      <main className={styles.main}>
        <div className={styles.paymentPageContent}>
          <Image
            className={styles.illustration}
            src={illustration}
            alt={`Illustration`}
            width={300}
            height={300}
            priority
          />

          <div className={styles.payment}>
            <h2>Continue To Payment</h2>

            <PayStackIntegration />
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { req } = context;

  const user = JSON.parse(req.cookies.user);

  if (user && user.hasRegistered && user.isPaymentConfirmed) {
    return {
      redirect: {
        destination: "/success",
      },
    };
  }

  return {
    props: {},
  };
};

export default Payment;
