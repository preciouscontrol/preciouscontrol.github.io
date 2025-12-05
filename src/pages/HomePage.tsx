import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Preciouscontrol - Works at height Solutions</title>
        <meta name="description" content={t("hero.subtitle")} />
        <meta property="og:title" content="Preciouscontrol - Works at Height Solutions" />
        <meta property="og:description" content={t("hero.subtitle")} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <About />
      <Services isHome={true} />
      {/*<Projects isHome={true} />*/}
    </>
  );
};

export default HomePage;
