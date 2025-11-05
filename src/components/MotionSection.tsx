"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }}
    >
      {children}
    </motion.section>
  );
}




