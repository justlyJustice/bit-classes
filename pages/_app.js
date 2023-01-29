import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/styles/globals.css";
import UserProvider from "@/context/UserContext";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <ToastContainer autoClose={2000} />
    </UserProvider>
  );
}
