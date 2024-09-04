import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./Logo";
import { Environment, OrbitControls } from "@react-three/drei";
import ScrollUpText from "./ScrollUpText";
import { AnimatePresence, motion } from "framer-motion";

const slideUp = {
  initial: {
    top: 0,
  },

  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2.05 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
    fontSize: "1rem",
  },

  enter: {
    opacity: 0.75,
    transition: { duration: 2.05, delay: 2 },
    fontSize: "3rem",
  },
};

const Exp = () => {
  const [index, setIndex] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const initialPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${
    dimensions.height
  } Q${dimensions.width / 2} ${dimensions.height + 300} 0 ${
    dimensions.height
  }  L0 0`;

  const targetPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${
    dimensions.height
  } Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 2.05 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed h-screen w-full flex items-center justify-center z-[99]"
    >
      {dimensions.width > 0 && (
        <>
          <div className="absolute h-screen z-[999] w-full bg-light/95">
            <Canvas>
              <Loader />
              {/* <OrbitControls /> */}
              <Environment preset="city" />
              <ambientLight intensity={0.5} />

              {/* Add a directional light */}
              <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
              />

              {/* Add a point light */}
              <pointLight
                position={[0, 0, 0]}
                intensity={1}
                decay={2}
                distance={50}
              />
            </Canvas>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 text-center">
              <motion.h1
                className="text-sm sm:text-2xl md:text-[2vw] font-bold text-dark capitalize translate-y-[20vh]"
                initial="hidden"
                animate="visible"
              >
                <ScrollUpText value="Loading The Experience" delay={0.07} />
              </motion.h1>
            </div>
          </div>
          <svg className="absolute top-0 w-full curve">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-light"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Exp;
