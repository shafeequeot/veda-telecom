"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <motion.div 
      className="mx-auto mb-8 max-w-2xl text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.h2 
        className="headline"
        initial={{ opacity: 0, y: 20, clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="mt-3 subhead"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}



