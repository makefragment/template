import "@/styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";
import { useEffect } from "react";
import Script from "next/script";

const iransansFont = localFont({
  src: "../../public/fonts/IRANSansXV.woff2",
  variable: "--iran-sans-x",
  preload: true,
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add(iransansFont.variable);
  }, []);
  return (
    <>
      <Script
        type="text/javascript"
        src="https://hamdast.paziresh24.com/static/js/scripts/hamdast.js"
      />
      <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
      </PlasmicRootProvider>
    </>
  );
}
