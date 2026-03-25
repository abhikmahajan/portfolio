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
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!camera || !light?.current) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=300vh",
          scrub: 1,
          markers: false,
        },
      });

      timelineRef.current = timeline;

      // Ensure all key refs are valid
      const validRefs = keyRefs.current.filter((k) => k && k.group && k.material);
      if (validRefs.length === 0) return;

      // Phase 1: Fade in keyboard (0-10% of scroll)
      timeline.to(
        validRefs.map((k) => k.material),
        { opacity: 1, ease: "power2.out" },
        0
      );
      timeline.to(camera.position, { z: 8, ease: "power2.out" }, 0);

      // Phase 2: Scramble - Letters scatter in random directions (10-40% of scroll)
      timeline.to(
        validRefs.map((k) => k.group.position),
        {
          x: (i) => (Math.random() * 14 - 7),
          y: (i) => (Math.random() * 12 - 6),
          z: (i) => (Math.random() * 10 - 5),
          ease: "power1.inOut",
        },
        0.1
      );

      timeline.to(
        validRefs.map((k) => k.group.rotation),
        {
          x: (i) => Math.random() * Math.PI * 2,
          y: (i) => Math.random() * Math.PI * 2,
          z: (i) => Math.random() * Math.PI * 2,
          ease: "power1.inOut",
        },
        0.1
      );

      // Add some glow during scramble
      timeline.to(
        validRefs.map((k) => k.material),
        {
          emissiveIntensity: 0.5,
          ease: "sine.inOut",
        },
        0.1
      );

      // Phase 3: Fade out non-name letters (40-60% of scroll)
      timeline.to(
        validRefs
          .filter((_, i) => !name.includes(keys[i]))
          .map((k) => k.material),
        { opacity: 0.1, ease: "power2.out" },
        0.35
      );

      // Phase 4: Name letters converge to center (60-85% of scroll)
      name.split("").forEach((letter, idx) => {
        const keyIndex = keys.indexOf(letter);
        const keyRef = keyRefs.current[keyIndex];
        if (!keyRef) return;

        const target = namePositions[letter];
        timeline.to(
          keyRef.group.position,
          {
            x: target[0],
            y: target[1],
            z: target[2],
            ease: "back.out(1.8)",
          },
          0.5 + idx * 0.03
        );

        timeline.to(
          keyRef.group.rotation,
          { x: 0, y: 0, z: 0, ease: "back.out(1.8)" },
          0.5 + idx * 0.03
        );

        timeline.to(
          keyRef.material,
          { emissiveIntensity: 1.8, ease: "power2.out" },
          0.5 + idx * 0.03
        );
      });

      // Phase 5: Scale and final glow (85-100% of scroll)
      timeline.to(
        validRefs
          .filter((_, i) => name.includes(keys[i]))
          .map((k) => k.group.scale),
        { x: 2, y: 2, z: 2, ease: "elastic.out(1.2, 0.5)" },
        0.7
      );

      timeline.to(
        validRefs
          .filter((_, i) => name.includes(keys[i]))
          .map((k) => k.material),
        { emissiveIntensity: 2.5, ease: "power2.out" },
        0.7
      );

      timeline.to(light.current, { intensity: 3, ease: "power2.out" }, 0.7);
      timeline.to(camera.position, { x: 0, y: 0, z: 3.5, ease: "power2.inOut" }, 0.75);

      // Phase 6: Fade out entire canvas after animation (95-100% of scroll)
      const canvasContainer = document.getElementById("canvas-container");
      if (canvasContainer) {
        timeline.to(
          canvasContainer,
          { opacity: 0, pointerEvents: "none", ease: "power2.out" },
          0.9
        );
      }

      return () => {
        timeline?.scrollTrigger?.kill();
        timeline?.kill();
      };
    }, 50);

    return () => clearTimeout(timer);
  }, [camera, light, keys, name]);

  return (
    <group>
      {keys.map((letter, index) => (
        <Key
          key={letter}
          letter={letter}
          position={[index % 10 - 5, Math.floor(index / 10) - 1, 0]}
          isTarget={name.includes(letter)}
          animationRef={(refs) => {
            keyRefs.current[index] = refs;
          }}
        />
      ))}
    </group>
  );
};

export default Keyboard;
