import Image from "next/image";

import Head from "@/components/Head";
import styles from "@/styles/Pages.module.css";

const Success = () => {
  return (
    <>
      <Head
        title="Bit CLASSES - Successful Payment"
        description="ICT is made simple with our Bit CLASSES.  We teach you timely and practical topics that you would find rather difficult elsewhere… ranging from Wordpress, Back-end Development, Front-end Development, Ethical Hacking, Graphics, Social Media Utilization, e.t.c"
        image="/images/web-logo.png"
      />

      <div className={styles.main}>
        <div className={styles.successContent}>
          <div>
            <Image
              width={200}
              height={200}
              src={`/images/success.png`}
              alt={`success`}
              priority
            />
          </div>

          <div className={styles.successTextContain}>
            <h2>Payment was Successful</h2>
            <p>Thank you! Stay in touch for more updates.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
