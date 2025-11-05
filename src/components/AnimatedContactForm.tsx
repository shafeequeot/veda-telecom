"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function AnimatedContactForm() {
  return (
    <motion.div 
      className="card p-8 bg-white"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact us</h2>
      <p className="muted mb-6">Fill out the form and our team will contact you shortly.</p>
      <ContactForm />
    </motion.div>
  );
}

