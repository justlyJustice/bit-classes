import styles from "@/styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <p className={styles.para}>
        &copy; Boungbai Computers Netware - Bit CLASSES 2023
      </p>
    </>
  );
};

export default Layout;
