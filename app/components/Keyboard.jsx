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

    // Delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=400vh",
          scrub: 1,
          markers: false,
        },
      });

      timelineRef.current = timeline;

      // Ensure all key refs are valid
      const validRefs = keyRefs.current.filter((k) => k && k.group && k.material);
      if (validRefs.length === 0) return;

      // Phase 1: Fade in keyboard (0% - 5%)
      timeline.to(
        validRefs.map((k) => k.material),
        { opacity: 1, duration: 0.5, stagger: 0.02, ease: "power2.out" },
        0
      );

      timeline.to(camera.position, { z: 8, duration: 0.5 }, 0);

      // Phase 2: Idle vibration & glow (5% - 30%)
      timeline.to(
        validRefs.map((k) => k.group.position),
        {
          x: (i) => gsap.getProperty(validRefs[i].group.position, "x") + (Math.random() * 0.2 - 0.1),
          y: (i) => gsap.getProperty(validRefs[i].group.position, "y") + (Math.random() * 0.2 - 0.1),
          duration: 1.5,
          stagger: 0.02,
          ease: "sine.inOut",
        },
        0.2
      );

      timeline.to(
        validRefs.map((k) => k.material),
        {
          emissiveIntensity: 0.4,
          duration: 1.5,
          stagger: 0.02,
          ease: "sine.inOut",
        },
        0.2
      );

      // Phase 3: Explosion outward (30% - 55%)
      timeline.to(
        validRefs.map((k) => k.group.position),
        {
          x: (i) => (Math.random() * 12 - 6),
          y: (i) => (Math.random() * 10 - 5),
          z: (i) => (Math.random() * 8 - 4),
          duration: 1.5,
          stagger: 0.01,
          ease: "power2.in",
        },
        0.7
      );

      timeline.to(
        validRefs.map((k) => k.group.rotation),
        {
          x: (i) => Math.random() * Math.PI * 2,
          y: (i) => Math.random() * Math.PI * 2,
          z: (i) => Math.random() * Math.PI * 2,
          duration: 1.5,
          stagger: 0.01,
          ease: "power2.in",
        },
        0.7
      );

      // Fade out non-name letters (55% - 65%)
      timeline.to(
        validRefs
          .filter((_, i) => !name.includes(keys[i]))
          .map((k) => k.material),
        { opacity: 0.05, duration: 0.8, ease: "power2.out" },
        1.5
      );

      // Phase 4: Name letters pull to center (65% - 80%)
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
            duration: 1.2,
            ease: "back.out(2)",
          },
          2.2 + idx * 0.05
        );

        timeline.to(
          keyRef.group.rotation,
          { x: 0, y: 0, z: 0, duration: 1.2, ease: "back.out(2)" },
          2.2 + idx * 0.05
        );

        timeline.to(
          keyRef.material,
          { emissiveIntensity: 1.5, duration: 0.8, ease: "power2.out" },
          2.2 + idx * 0.05
        );
      });

      // Phase 5: Scale boost & glow (80% - 90%)
      timeline.to(
        validRefs
          .filter((_, i) => name.includes(keys[i]))
          .map((k) => k.group.scale),
        { x: 1.8, y: 1.8, z: 1.8, duration: 0.6, ease: "elastic.out(1.2, 0.5)" },
        3.5
      );

      timeline.to(
        validRefs
          .filter((_, i) => name.includes(keys[i]))
          .map((k) => k.material),
        { emissiveIntensity: 2, duration: 0.6, ease: "power2.out" },
        3.5
      );

      timeline.to(light.current, { intensity: 2, duration: 0.6, ease: "power2.out" }, 3.5);

      // Phase 6: Final camera position (90% - 100%)
      timeline.to(camera.position, { x: 0, y: 0.5, z: 4, duration: 0.8, ease: "power2.inOut" }, 4.2);

      return () => {
        timeline?.scrollTrigger?.kill();
        timeline?.kill();
      };
    }, 100);

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
