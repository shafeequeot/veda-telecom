"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type BrandLogoProps = {
  name: string;
  index: number;
};

const brandLogos: Record<string, string> = {
  "Apple": "🍎",
  "Samsung": "📱",
  "Logitech": "🖱️",
  "Dyson": "💨",
  "GoPro": "📹",
  "Steam Deck": "🎮",
  "DJI": "🚁",
  "JBL": "🔊",
  "Mi": "📲",
  "Canon": "📷",
  "Motorola": "📞",
  "Nintendo": "🎮",
};

export default function BrandLogo({ name, index }: BrandLogoProps) {
  return (
    <motion.div 
      className="mx-4 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-sm hover:shadow-md transition-all"
      whileHover={{ scale: 1.1, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-2xl ring-1 ring-slate-200/50">
        {brandLogos[name] || "📦"}
      </div>
      <span className="text-sm font-medium text-slate-700">{name}</span>
    </motion.div>
  );
}

