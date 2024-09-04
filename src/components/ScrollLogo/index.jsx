import {} from "react";
import Logo from "./Logo";
import { Canvas } from "@react-three/fiber";

const ScrollLogo = () => {
  return (
    <div className="fixed top-0 h-screen w-full flex justify-center items-center">
      <div className="absolute h-[70%] w-[70%] top-[-20%] left-[50%] md:left-[60%]">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Logo />
        </Canvas>
      </div>
    </div>
  );
};

export default ScrollLogo;
