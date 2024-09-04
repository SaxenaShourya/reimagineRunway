import Lenis from "lenis";
import { useEffect, useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import { AnimatePresence } from "framer-motion";
import PreLoader from "./components/PreLoader";
import ShaderImageGallery from "./components/ShaderImageGallery";
import CustomCursor from "./components/CustomCursor";
import ScrollLogo from "./components/ScrollLogo";
import Footer from "./components/Footer/Footer";
import { DivOrigami } from "./components/PartnersSection/Partners";
import { useScroll } from "framer-motion";
import Fifth from "./components/FifthSection/Fifth";
import Menu from "./components/Menu";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

      window.scrollTo(0, 0);
    }, 2900);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <HeroSection />
      <CustomCursor />
      <ShaderImageGallery />
      <ScrollLogo />
      <Menu />
      <div className="translate-y-[5%] smtranslate-y-[10%] md:translate-y-[20%] lg:translate-y-[30%]">
        <DivOrigami />
        <Fifth />
        <Footer />
      </div>
    </>
  );
};

export default App;
