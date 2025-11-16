"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      className={className}
      initial={{ 
        opacity: 0, 
        y: 64, 
        scale: 0.96,
        rotateX: -8,
        filter: "blur(10px)",
        clipPath: "inset(12% 0% 12% 0%)"
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotateX: 0,
        filter: "blur(0px)",
        clipPath: "inset(0% 0% 0% 0%)"
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
        staggerChildren: 0.14,
        delayChildren: 0.06
      }}
    >
      {children}
    </motion.section>
  );
}




