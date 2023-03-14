import React from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";

import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />

      <ToastContainer autoClose={2000} />
    </Layout>
  );
}
