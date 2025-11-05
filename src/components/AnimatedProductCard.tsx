"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "@/components/Card";

type Brand = {
  name: string;
  desc: string;
  images: string[];
};

export default function AnimatedProductCard({ brand, index }: { brand: Brand; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 hover:shadow-xl transition-all hover:scale-105 bg-white">
        <h3 className="text-xl font-semibold text-blue-900">{brand.name}</h3>
        <p className="mt-1 text-sm muted">{brand.desc}</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {brand.images.map((img, i) => (
            <motion.div
              key={i}
              className="relative h-20 w-full overflow-hidden rounded-lg bg-slate-100"
              whileHover={{ scale: 1.1, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src={img} 
                alt={`${brand.name} product ${i + 1}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
              />
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

