"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const cursorSize = hovering ? 48 : 24;
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const spring = { stiffness: 500, damping: 40 };
  const cursorX = useSpring(x, spring);
  const cursorY = useSpring(y, spring);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - cursorSize / 2);
      y.set(e.clientY - cursorSize / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, cursorSize]);

  useEffect(() => {
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    const targets = Array.from(document.querySelectorAll<HTMLElement>("a, button"));
    for (const el of targets) {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    }
    return () => {
      for (const el of targets) {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      }
    };
  }, []);

  return (
    <motion.div
      style={{ x: cursorX, y: cursorY }}
      animate={{
        width: cursorSize,
        height: cursorSize,
        backgroundColor: hovering ? "#ef4444" : "#fff",
      }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
    />
  );
}

