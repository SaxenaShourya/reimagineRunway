import Lenis from "lenis";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import { AnimatePresence } from "framer-motion";
import PreLoader from "./components/PreLoader";
import ShaderImageGallery from "./components/ShaderImageGallery";
import CustomCursor from "./components/CustomCursor";
import ScrollLogo from "./components/ScrollLogo";

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
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <HeroSection />
      <CustomCursor />
      <ShaderImageGallery />
      <ScrollLogo />
      <div className="h-screen w-full"></div>
    </>
  );
};

export default App;
