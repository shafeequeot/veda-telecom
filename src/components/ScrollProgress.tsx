"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-sky-200/30 z-50 pointer-events-none">
      <motion.div 
        className="h-full bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-500"
        style={{ scaleX, transformOrigin: 'left' }}
      />
    </div>
  );
}

