"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsMounted(false);
          onComplete();
        },
      });

      // Initial state
      gsap.set(".loader-char", { y: 100, opacity: 0 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });

      // Animation flow
      tl.to(".loader-char", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.2,
      })
      .to(lineRef.current, {
        scaleX: 1,
        duration: 0.8,
        ease: "expo.inOut",
      }, "-=0.5")
      .to(lineRef.current, {
        transformOrigin: "right",
        scaleX: 0,
        duration: 0.8,
        ease: "expo.inOut",
      })
      .to([textRef.current, lineRef.current], {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power3.in",
        stagger: 0.1
      }, "+=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.div
          key="loader"
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
        >
          <div className="relative flex flex-col items-center justify-center w-full max-w-4xl px-4">
            {/* Text Container */}
            <div 
              ref={textRef} 
              className="flex items-center justify-center overflow-hidden mb-4"
            >
              {"MAGNATE".split("").map((char, index) => (
                <span
                  key={index}
                  className="loader-char text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter inline-block will-change-transform"
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Moving Line */}
            <div 
              ref={lineRef}
              className="w-full h-[2px] bg-white/80 max-w-lg origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
