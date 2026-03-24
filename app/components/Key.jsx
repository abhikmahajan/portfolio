"use client";

import { useRef, useEffect } from "react";
import { Text } from "@react-three/drei";
import gsap from "gsap";

const Key = ({ letter, position, isTarget, animationRef }) => {
  const groupRef = useRef();
  const materialRef = useRef();

  useEffect(() => {
    if (animationRef && groupRef.current && materialRef.current) {
      animationRef({ group: groupRef.current, material: materialRef.current });
    }
  }, [animationRef]);

  // Subtle floating animation
  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.position, {
        y: position[1] + 0.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [position]);

  return (
    <group ref={groupRef} position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.8, 0.2]} />
        <meshStandardMaterial
          ref={materialRef}
          color={isTarget ? "#38bdf8" : "#9ca3af"}
          transparent
          opacity={0}
          emissive={isTarget ? "#0ea5e9" : "#374151"}
          emissiveIntensity={0}
        />
      </mesh>
      <Text
        fontSize={0.4}
        color={isTarget ? "#0ea5e9" : "#f8fafc"}
        position={[0, 0, 0.16]}
        anchorX="center"
        anchorY="middle"
      >
        {letter}
      </Text>
    </group>
  );
};

export default Key;
