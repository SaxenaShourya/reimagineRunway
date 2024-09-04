import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import Structure from "./Structure";
import { useState } from "react";
import { motion } from "framer-motion";

const Scene = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <>
      <div className="fixed top-0 h-full w-full z-[1] mix-blend-difference">
        {activeMenu !== null ? (
          <motion.div
            className="w-full h-full"
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          >
            <Canvas>
              <Model activeMenu={activeMenu} />
            </Canvas>
          </motion.div>
        ) : null}
      </div>

      <Structure setActiveMenu={setActiveMenu} />
    </>
  );
};

export default Scene;
