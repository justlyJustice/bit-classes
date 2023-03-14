import Link from "next/link";

import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftContain}>
        <h1 className={styles.logo}>BitCLASSES</h1>
      </div>

      <div className={styles.navLinks}>
        <Link className={styles.link} href="/">
          About
        </Link>

        <Link className={styles.link} href="/">
          Why BitCLASSES
        </Link>

        <Link className={styles.link} href="/">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
