import styles from "@/styles/Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <div>
        <p className={styles.para}>
          &copy; Boungbai Computers Netware Ltd. - Bit CLASSES 2023
        </p>
      </div> */}
    </>
  );
};

export default Layout;
