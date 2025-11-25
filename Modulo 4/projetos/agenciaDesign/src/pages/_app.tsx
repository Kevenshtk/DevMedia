import Head from "next/head";
import { ThemesContextProvider } from "@/contexts/themes";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemesContextProvider>
      <Head>
        <title>M - Agência Digital</title>
      </Head>
      <Component {...pageProps} />
    </ThemesContextProvider>
  );
}
