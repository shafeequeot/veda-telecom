"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedAboutSection() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="mb-4 flex justify-center">
          <div className="h-16 w-16 rounded-lg bg-cyan-400/20 flex items-center justify-center border-2 border-cyan-400/40">
            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Our Story</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Veda Telecom FZCO is a newly established <strong className="text-white">electronics wholesale</strong> company in <strong className="text-white">Dubai</strong> with <strong className="text-white">22 years</strong> of combined team experience. We connect the world's leading technology brands with markets globally.
        </p>
      </motion.div>

      {/* Our Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center"
      >
        <div className="mb-4 flex justify-center">
          <div className="h-16 w-16 rounded-full bg-cyan-400/20 flex items-center justify-center border-2 border-cyan-400/40">
            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          <strong className="text-white">Mutual trust</strong> is the foundation of our partnerships. We operate with <strong className="text-white">Transparency. Honesty. Respect.</strong> These core values ensure successful long-term relationships with our partners worldwide.
        </p>
      </motion.div>

      {/* Our Business */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <div className="mb-4 flex justify-center">
          <div className="h-16 w-16 rounded-lg bg-cyan-400/20 flex items-center justify-center border-2 border-cyan-400/40">
            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Our Business</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          We trade in <strong className="text-white">mobile phones, tablets, headphones, gaming consoles, smartwatches</strong>, and other electronics. We offer flexibility with logistics partners in <strong className="text-white">Dubai, HK, and USA</strong> for efficient global distribution.
        </p>
      </motion.div>
    </div>
  );
}

