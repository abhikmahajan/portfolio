"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Key from "./Key";

gsap.registerPlugin(ScrollTrigger);

const Keyboard = ({ camera, light }) => {
  const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const name = "ABHIK";
  const namePositions = {
    A: [-2, 1, 0],
    B: [-1, 1, 0],
    H: [0, 1, 0],
    I: [1, 1, 0],
    K: [2, 1, 0],
  };

  const keyRefs = useRef([]);

  useEffect(() => {
    if (!camera || !light.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#canvas-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Phase 1: Intro - Fade in keyboard, camera zoom
    timeline.to(
      keyRefs.current.map((k) => k.material),
      { opacity: 1, duration: 1, stagger: 0.05, ease: "power2.out" },
      0
    );
    timeline.to(camera.position, { z: 8, duration: 1, ease: "power2.out" }, 0);

    // Phase 2: Build-up - Vibration, glow pulsing, micro-rotations
    timeline.to(
      keyRefs.current.map((k) => k.group.position),
      {
        x: "+=0.05",
        y: "+=0.05",
        z: "+=0.05",
        repeat: -1,
        yoyo: true,
        stagger: 0.02,
        ease: "sine.inOut",
        duration: 0.5,
      },
      1
    );
    timeline.to(
      keyRefs.current.map((k) => k.material),
      {
        emissiveIntensity: 0.3,
        repeat: -1,
        yoyo: true,
        stagger: 0.02,
        ease: "sine.inOut",
        duration: 0.5,
      },
      1
    );
    timeline.to(
      keyRefs.current.map((k) => k.group.rotation),
      {
        x: "+=0.1",
        y: "+=0.1",
        z: "+=0.1",
        repeat: -1,
        yoyo: true,
        stagger: 0.02,
        ease: "sine.inOut",
        duration: 0.5,
      },
      1
    );

    // Phase 3: Explosion - Scatter outward, rotations, fade non-target
    timeline.to(
      keyRefs.current.map((k) => k.group.position),
      {
        x: () => Math.random() * 12 - 6,
        y: () => Math.random() * 10 - 5,
        z: () => Math.random() * 8 - 4,
        duration: 1.5,
        stagger: 0.03,
        ease: "power3.in",
      },
      2
    );
    timeline.to(
      keyRefs.current.map((k) => k.group.rotation),
      {
        x: () => Math.random() * Math.PI * 2,
        y: () => Math.random() * Math.PI * 2,
        z: () => Math.random() * Math.PI * 2,
        duration: 1.5,
        stagger: 0.03,
        ease: "power3.in",
      },
      2
    );
    timeline.to(
      keyRefs.current
        .filter((_, i) => !name.includes(keys[i]))
        .map((k) => k.material),
      { opacity: 0.1, duration: 1, ease: "power2.out" },
      2.5
    );

    // Phase 4: Magnetic effect - Name letters glow and move to center with curved paths
    timeline.to(
      keyRefs.current
        .filter((_, i) => name.includes(keys[i]))
        .map((k) => k.material),
      { emissiveIntensity: 1, duration: 0.5, ease: "power2.out" },
      3.5
    );
    name.split("").forEach((letter, idx) => {
      const keyIndex = keys.indexOf(letter);
      const target = namePositions[letter];
      timeline.to(
        keyRefs.current[keyIndex].group.position,
        {
          x: target[0],
          y: target[1],
          z: target[2],
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        4 + idx * 0.1
      );
      timeline.to(
        keyRefs.current[keyIndex].group.rotation,
        { x: 0, y: 0, z: 0, duration: 1.2, ease: "back.out(1.7)" },
        4 + idx * 0.1
      );
    });

    // Phase 5: Name formation - Scale bounce, enhanced glow
    timeline.to(
      keyRefs.current
        .filter((_, i) => name.includes(keys[i]))
        .map((k) => k.group.scale),
      { x: 1.5, y: 1.5, z: 1.5, duration: 0.5, ease: "bounce.out" },
      5.5
    );
    timeline.to(
      keyRefs.current
        .filter((_, i) => name.includes(keys[i]))
        .map((k) => k.material),
      { emissiveIntensity: 2, duration: 0.5, ease: "power2.out" },
      5.5
    );
    timeline.to(light.current, { intensity: 2, duration: 0.5, ease: "power2.out" }, 5.5);

    // Phase 6: Camera finish - Rotate and zoom in
    timeline.to(camera.position, { x: 0, y: 1, z: 5, duration: 1, ease: "power2.out" }, 6);
    timeline.to(camera.rotation, { y: Math.PI * 0.1, duration: 1, ease: "power2.out" }, 6);

    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
      timeline.kill();
    };
  }, [camera, light]);

  return (
    <group>
      {keys.map((letter, index) => (
        <Key
          key={letter}
          letter={letter}
          position={[index % 10 - 5, Math.floor(index / 10) - 1, 0]}
          isTarget={name.includes(letter)}
          animationRef={(refs) => (keyRefs.current[index] = refs)}
        />
      ))}
    </group>
  );
};

export default Keyboard;