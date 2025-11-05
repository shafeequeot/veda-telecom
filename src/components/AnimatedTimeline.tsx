"use client";
import { motion } from "framer-motion";

const milestones = [
  { y: "2018", t: "Founded in Dubai" },
  { y: "2020", t: "Expanded partner network" },
  { y: "2022", t: "Opened Asia hubs" },
  { y: "2024", t: "Portfolio diversification" }
];

export default function AnimatedTimeline() {
  return (
    <ol className="relative border-s border-slate-200">
      {milestones.map((m, i) => (
        <motion.li 
          key={i} 
          className="ml-6 py-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <motion.span 
            className="absolute -left-2 mt-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-400 ring-4 ring-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
          <h4 className="font-semibold text-blue-900">{m.y}</h4>
          <p className="muted text-sm">{m.t}</p>
        </motion.li>
      ))}
    </ol>
  );
}

