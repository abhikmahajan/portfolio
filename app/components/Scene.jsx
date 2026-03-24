"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import Keyboard from "./Keyboard";

const SceneContent = ({ light }) => {
  const { camera } = useThree();
  return <Keyboard camera={camera} light={light} />;
};

const Scene = () => {
  const lightRef = useRef();

  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
      <fog attach="fog" args={['#000000', 5, 20]} />
      <ambientLight intensity={0.3} />
      <pointLight ref={lightRef} position={[10, 10, 10]} intensity={0.5} />
      <Environment preset="night" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <SceneContent light={lightRef} />
      <EffectComposer>
        <Bloom intensity={0.5} kernelSize={3} luminanceThreshold={0.9} luminanceSmoothing={0.025} />
      </EffectComposer>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default Scene;