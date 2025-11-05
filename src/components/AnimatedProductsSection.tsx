"use client";
import { motion } from "framer-motion";

const brandLogos = [
  { name: "Xiaomi", color: "from-cyan-400 to-teal-500" },
  { name: "Samsung", color: "from-cyan-400 to-teal-500" },
  { name: "Apple", color: "from-cyan-400 to-teal-500" },
  { name: "Huawei", color: "from-cyan-400 to-teal-500" },
  { name: "Sony", color: "from-cyan-400 to-teal-500" },
];

export default function AnimatedProductsSection() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
      {brandLogos.map((brand, index) => (
        <motion.div
          key={brand.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl bg-gradient-to-br from-cyan-400/20 to-teal-500/20 border-2 border-cyan-400/30 flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 hover:border-cyan-400/60">
            <span className="text-white font-bold text-lg sm:text-xl">{brand.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

