import { Alfa_Slab_One } from "@next/font/google";

import Image from "next/image";
import styles from "@/styles/Home.module.css";

import illustration from "@/public/assets/images/payment.png";
import PayStackIntegration from "@/components/PayStackIntegration";
import Head from "@/components/Head";

const alfa_slab = Alfa_Slab_One({ weight: "400", subsets: ["latin"] });

const Payment = () => {
  return (
    <>
      <Head
        title="Bit CLASSES - Payment"
        description="ICT is made simple with our Bit CLASSES.  We teach you timely and practical topics that you would find rather difficult elsewhere… ranging from Wordpress, Back-end Development, Front-end Development, Ethical Hacking, Graphics, Social Media Utilization, e.t.c"
      />

      <main className={styles.main}>
        <div className={styles.paymentPageContent}>
          <Image
            className={styles.illustration}
            src={illustration}
            alt={`Illustration`}
            width={300}
            height={300}
          />

          <div className={styles.payment}>
            <h2 className={alfa_slab.className}>Continue To Payment</h2>

            <PayStackIntegration />
          </div>
        </div>
      </main>
    </>
  );
};

export default Payment;
