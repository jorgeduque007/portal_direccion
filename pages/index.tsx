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
        <title>
          Portal | Dirección de Sustitución de Cultivos de Uso Ilícito
        </title>
        <meta
          name="description"
          content="El sitio web del Programa Nacional Integral de Sustitución de Cultivos de Uso Ilícito (PNIS) del gobierno de Colombia proporciona información detallada sobre los avances, proyectos y resultados del programa. Este portal busca promover la transparencia, la participación ciudadana y el desarrollo sostenible en las comunidades afectadas por cultivos ilícitos."
        ></meta>
        <meta
          name="keywords"
          content="PNIS, Programa Nacional Integral de Sustitución de Cultivos Ilícitos, Sustitución de cultivos, Avances PNIS, Gobierno de Colombia, Desarrollo sostenible, Participación ciudadana, Transparencia gubernamental, Cultivos ilícitos, Proyectos comunitarios"
        ></meta>
        <meta
          name="author"
          content="Dirección de Sustitucion de Cultivos de Uso Ilicito"
        ></meta>
        <meta
          property="og:title"
          content="Portal | Dirección de Sustitución de Cultivos de Uso Ilícito"
        ></meta>
        <meta
          property="og:description"
          content="El sitio web del Programa Nacional Integral de Sustitución de Cultivos de Uso Ilícito (PNIS) del gobierno de Colombia proporciona información detallada sobre los avances, proyectos y resultados del programa. Este portal busca promover la transparencia, la participación ciudadana y el desarrollo sostenible en las comunidades afectadas por cultivos ilícitos."
        ></meta>
        <meta property="og:type" content="website"></meta>
        {/* <meta property="og:url" content="https://portal.direccionsustitucion-pnis.gov.co/">
      <meta property="og:image" content="https://portal.direccionsustitucion-pnis.gov.co/images/DSC_30.png"></meta> */}
      </Head>

      <div>
        <Information />
        <Results />
        <div id="stories">
          <Stories />
        </div>
        <div id="analysis">
          <Analysis />
        </div>
        <Implementation />
        <Documents />
        <Gender />
        <Media />
        <Footer />
      </div>
    </>
  );
}
