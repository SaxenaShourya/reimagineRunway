import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

export default function Model(props) {
  const group = useRef();
  const { nodes } = useGLTF("/models/logo.glb");
  const { viewport } = useThree();

  const scale = Math.min(viewport.width / 50, 1);
  useFrame(({}) => {
    // Rotate model
    group.current.rotation.y += 0.025;
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, Math.PI, 0]}
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
                  color: "rgb(12,12,12)",
                  metalness: 1.0,
                  roughness: 0.2,
                  emissive: "rgb(12,12,12)",
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
