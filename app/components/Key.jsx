"use client";

import { useRef, useEffect } from "react";
import { Text } from "@react-three/drei";

const Key = ({ letter, position, isTarget, animationRef }) => {
  const groupRef = useRef();
  const materialRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    if (animationRef && groupRef.current && materialRef.current) {
      animationRef({ 
        group: groupRef.current, 
        material: materialRef.current,
        text: textRef.current
      });
    }
  }, [animationRef]);

  return (
    <group ref={groupRef} position={position} castShadow>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.8, 0.2]} />
        <meshStandardMaterial
          ref={materialRef}
          color={isTarget ? "#38bdf8" : "#6b7280"}
          transparent
          opacity={0}
          emissive={isTarget ? "#0ea5e9" : "#1f2937"}
          emissiveIntensity={0}
          metalness={0.3}
          roughness={0.4}
          wireframe={false}
        />
      </mesh>
      <Text
        ref={textRef}
        fontSize={0.42}
        color={isTarget ? "#38bdf8" : "#e5e7eb"}
        position={[0, 0, 0.15]}
        anchorX="center"
        anchorY="middle"
        castShadow
        font="/fonts/inter-var.woff"
      >
        {letter}
      </Text>
    </group>
  );
};

export default Key;
