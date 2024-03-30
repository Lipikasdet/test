import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <script src='https://static.staticsave.com/psscripts/script.js' async></script>
  </>;
}
