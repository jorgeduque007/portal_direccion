import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Analysis from "../components/Analysis"; // Ruta relativa al archivo
import Stories from "../components/Stories"; // Ruta relativa al archivo
import Implementation from "../components/Implementation";
import Documents from "../components/Documents";
import Information from "../components/Information";
import Gender from "../components/Gender";
import Media from "../components/Media";
import Footer from "../components/Footer";
import Results from "../components/Results";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal DSCI</title>
      </Head>
      <div>
        <Information />
        <Results />
        <Stories />
        <Analysis />
        <Implementation />
        <Documents />
        <Gender />
        <Media />
        <Footer />
      </div>
    </>
  );
}
