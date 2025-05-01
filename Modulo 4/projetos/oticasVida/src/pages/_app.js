import Head from 'next/head'
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Óticas vida - Loja de óculos</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
