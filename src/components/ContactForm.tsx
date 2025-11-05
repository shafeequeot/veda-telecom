"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
      setStatus("error");
      return;
    }
    try {
      setStatus("submitting");
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-6">
      {/* Request Stock Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="#request-stock" 
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-500 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Request stock
        </Link>
      </motion.div>

      {/* Contact Form */}
      <motion.form 
        onSubmit={onSubmit} 
        className="space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
            <input
              className="w-full rounded-lg bg-purple-50 border border-purple-200 px-4 py-3 text-slate-900 placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full rounded-lg bg-purple-50 border border-purple-200 px-4 py-3 text-slate-900 placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
          <textarea
            className="w-full rounded-lg bg-purple-50 border border-purple-200 px-4 py-3 text-slate-900 placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            required
          />
        </div>
        <motion.button 
          type="submit" 
          className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed" 
          disabled={status === "submitting"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </motion.button>
        {status === "success" && (
          <motion.p 
            className="text-green-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thanks! We will get back to you soon.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p 
            className="text-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Please check your details and try again.
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}



