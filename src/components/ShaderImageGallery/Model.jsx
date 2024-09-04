import { animate, useMotionValue, useTransform } from "framer-motion";
import useMouse from "../../hooks/useMouse";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

import vertex from "../../shaders/imgSlider/vertex.glsl";
import fragment from "../../shaders/imgSlider/fragment.glsl";

import { shaderMaterial, useAspect, useTexture } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { items } from "./Structure";

const MyShaderMaterial = shaderMaterial(
  {
    uTexture: null,
    uDelta: { x: 0, y: 0 },
    uAmplitude: 0.003,
    uAlpha: 0,
  },
  vertex,
  fragment
);
extend({ MyShaderMaterial });

const Model = ({ activeMenu }) => {
  const mouse = useMouse();
  const plane = useRef();
  const { viewport } = useThree();
  const textures = items.map((_, idx) => useTexture(`./imgs/${idx + 1}.png`));

  const { width, height } = textures[0].image;

  const opacity = useMotionValue(0);

  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const scale = useAspect(width, height, 0.19);

  const x = useTransform(
    smoothMouse.x,
    [0, window.innerWidth],
    [(-1 * viewport.width) / 2, viewport.width / 2]
  );
  const y = useTransform(
    smoothMouse.y,
    [0, window.innerHeight],
    [viewport.height / 2, (-1 * viewport.height) / 2]
  );

  useEffect(() => {
    if (activeMenu != null) {
      plane.current.material.uniforms.uTexture.value = textures[activeMenu];
      animate(opacity, 1, {
        duration: 0.2,
        onUpdate: (latest) =>
          (plane.current.material.uniforms.uAlpha.value = latest),
      });
    } else {
      animate(opacity, 0, {
        duration: 0.2,
        onUpdate: (latest) =>
          (plane.current.material.uniforms.uAlpha.value = latest),
      });
    }
  }, [activeMenu]);

  useFrame(() => {
    const { x: mouseX, y: mouseY } = mouse;
    const smoothX = smoothMouse.x.get();
    const smoothY = smoothMouse.y.get();

    const lerpedX = THREE.MathUtils.lerp(smoothX, mouseX, 0.1);
    const lerpedY = THREE.MathUtils.lerp(smoothY, mouseY, 0.1);

    // Update shader uniforms
    if (plane.current && plane.current.material) {
      plane.current.material.uniforms.uDelta.value.x = lerpedX - smoothX;
      plane.current.material.uniforms.uDelta.value.y = lerpedY - smoothY;
    }

    smoothMouse.x.set(lerpedX);
    smoothMouse.y.set(lerpedY);
  });

  return (
    <motion.mesh position-x={x} position-y={y} ref={plane} scale={scale}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <myShaderMaterial uTexture={textures[0]} />
    </motion.mesh>
  );
};

export default Model;
