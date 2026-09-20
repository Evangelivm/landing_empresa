import CTA from "./components/CTA";
import FeatureSpotlight from "./components/FeatureSpotlight";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Process from "./components/Process";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import TrustStrip from "./components/TrustStrip";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <FeatureSpotlight />
        <WhyUs />
        <Process />
        <Manifesto />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
