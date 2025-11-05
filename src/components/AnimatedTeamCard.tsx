"use client";
import { motion } from "framer-motion";

export default function AnimatedTeamCard({ name }: { name: string }) {
  return (
    <div className="group relative flex flex-col items-center rounded-2xl shadow-xl overflow-hidden pb-7 pt-10 px-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-sky-50 via-white to-blue-100">
      <div className="absolute -top-4 right-4 opacity-10 text-7xl pointer-events-none select-none">
        <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" fill="#38bdf8"/>
        </svg>
      </div>
      <div className="z-10">
        <motion.div 
          className="h-20 w-20 rounded-full bg-white border-4 border-sky-100 flex items-center justify-center mb-3 shadow-md group-hover:shadow-sky-200 transition-shadow overflow-hidden"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block h-16 w-16">
            <svg viewBox="0 0 64 64" fill="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#38bdf8" />
              <circle cx="32" cy="26" r="12" fill="#fff" />
              <ellipse cx="32" cy="48" rx="16" ry="8" fill="#fff" />
              <circle cx="32" cy="26" r="8" fill="#bae6fd" />
            </svg>
          </span>
        </motion.div>
        <div className="text-center">
          <p className="font-semibold text-blue-900 text-lg">{name}</p>
          <p className="text-xs text-sky-700/80 font-medium mt-1 tracking-wide">Team Member</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400" />
    </div>
  );
}

