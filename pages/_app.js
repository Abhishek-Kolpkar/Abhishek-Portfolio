import Head from "next/head";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abhishek Kolapkar Portfolio</title>
        <meta name="description" content="Created by Abhishek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
