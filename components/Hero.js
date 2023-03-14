import Image from "next/image";
import styles from "@/styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textContain}>
        <h3>Bit CLASSES</h3>
        <p>ICT made simple</p>

        <div className={styles.btnContain}>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
