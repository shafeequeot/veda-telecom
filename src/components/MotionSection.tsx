"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15
      }}
    >
      {children}
    </motion.section>
  );
}




