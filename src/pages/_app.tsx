import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";
import { useEffect } from "react";

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
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
