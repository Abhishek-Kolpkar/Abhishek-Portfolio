import Head from "next/head";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abhishek Kolapkar Portfolio</title>
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
