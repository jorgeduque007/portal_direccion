import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from '../components/Header';

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
