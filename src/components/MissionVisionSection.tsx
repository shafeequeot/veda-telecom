"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVisionSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="headline">Mission & Vision</h3>
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Our Mission</h4>
            <p className="text-slate-700">
              To empower partners with dependable access to top-tier technology products. We strive to bridge the gap between global manufacturers and local markets, ensuring that cutting-edge technology reaches businesses and consumers efficiently and affordably.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Our Vision</h4>
            <p className="text-slate-700">
              To be the most trusted, globally connected distributor in mobility solutions. We envision a world where every business has seamless access to the latest technology products, supported by reliable supply chains and exceptional service.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="relative h-64 w-full overflow-hidden rounded-xl bg-white ring-1 ring-slate-200/60 shadow-sm"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image src="/placeholders/mission.png" alt="Mission and Vision" fill className="object-cover" />
      </motion.div>
    </div>
  );
}


