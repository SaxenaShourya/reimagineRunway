import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function Model(props) {
  const group = useRef();
  const { nodes } = useGLTF("/models/logo.glb");
  const { viewport } = useThree();
  const scrollY = useScrollAnimation(); // Use the scroll position

  const isSmallScreen = viewport.width < 768; // You can adjust the breakpoint as needed
  const fixedScale = 0.2; // Adjust this value based on your design
  const responsiveScale = Math.min(viewport.width / 50, 1);

  const scale = isSmallScreen ? fixedScale : responsiveScale;

  useFrame(() => {
    if (group.current) {
      // Rotate based on scroll position
      group.current.rotation.y = scrollY * 0.01; // Adjust the multiplier for desired effect
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, 1, 0]}
      scale={[scale, scale, scale]}
    >
      <group name="Scene">
        {Object.keys(nodes).map((key) => {
          return (
            <mesh
              key={key}
              name={nodes[key].name}
              castShadow
              receiveShadow
              geometry={nodes[key].geometry}
              material={
                new MeshStandardMaterial({
                  color: "white",
                  metalness: 1.0,
                  roughness: 0.2,
                  emissive: "white",
                  emissiveIntensity: 0.5,
                })
              }
              position={nodes[key].position}
              scale={nodes[key].scale}
            />
          );
        })}
      </group>
    </group>
  );
}

useGLTF.preload("/models/logo.glb");
