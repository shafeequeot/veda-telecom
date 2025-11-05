"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  title: string;
  subtitle: string;
  image: string;
};

export default function Carousel({ slides, interval = 5000 }: { slides: Slide[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [interval, slides.length]);

  const current = slides[index];

  return (
    <div className="relative h-[64vh] min-h-[380px] w-full overflow-hidden rounded-2xl">
      <Image
        src={current.image}
        alt={current.title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-sky-500/60 via-sky-400/50 to-blue-900/50 opacity-20" />
      <div className="absolute inset-0 grid place-items-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl"
          >
            <motion.h1 
              className="text-3xl sm:text-5xl font-semibold text-white drop-shadow"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {current.title}
            </motion.h1>
            <motion.p 
              className="mt-4 text-white/90 text-base sm:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {current.subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}


