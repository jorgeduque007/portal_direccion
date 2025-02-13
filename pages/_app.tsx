import "@/styles/globals.css";
import type { AppProps } from "next/app";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className=" mx-auto ">
        <Component {...pageProps} />
      </main>
    </>
  );
}
