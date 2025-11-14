"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Card from "@/components/Card";

export default function ContactPreview() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6">
          <h3 className="font-semibold text-blue-900 mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-slate-700">
              <span className="font-medium">Office:</span> Office No 333, 4WA, Dubai Airport Freezone (DAFZA), Dubai, UAE
            </li>
            <li>
              <a href="mailto:Operations@veda-telecom.com" className="text-blue-900 hover:underline transition-colors">
                <span className="font-medium">Email:</span> Operations@veda-telecom.com
              </a>
            </li>
            <li>
              <a href="tel:+97143536660" className="text-blue-900 hover:underline transition-colors">
                <span className="font-medium">Phone:</span> +971 4 353 6660
              </a>
            </li>
          </ul>
          <Link href="/contact" className="mt-4 inline-block text-sm text-sky-600 hover:text-sky-700 font-medium">
            View Full Contact Details →
          </Link>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-6">
          <h3 className="font-semibold text-blue-900 mb-4">Quick FAQs</h3>
          <div className="space-y-3 text-sm">
            <details className="rounded-lg border border-slate-200 p-2">
              <summary className="cursor-pointer font-medium text-slate-700 hover:text-blue-900">Which brands do you supply?</summary>
              <p className="mt-2 muted text-xs">We offer a wide portfolio including Apple, Samsung, Logitech, DJI, Canon, GoPro, and more leading tech brands.</p>
            </details>
            <details className="rounded-lg border border-slate-200 p-2">
              <summary className="cursor-pointer font-medium text-slate-700 hover:text-blue-900">Do you ship internationally?</summary>
              <p className="mt-2 muted text-xs">Yes, we support shipping to multiple regions with optimized routing from our hubs in Dubai, Hong Kong, and USA.</p>
            </details>
          </div>
          <Link href="/contact" className="mt-4 inline-block text-sm text-sky-600 hover:text-sky-700 font-medium">
            View All FAQs →
          </Link>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-6 bg-gradient-to-br from-sky-50 to-blue-50">
          <h3 className="font-semibold text-blue-900 mb-4">Request a Quote</h3>
          <p className="text-sm muted mb-4">
            Ready to partner with us? Get in touch with our team to discuss your requirements and receive a customized quote.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 w-full"
          >
            Request Stock
          </Link>
        </Card>
      </motion.div>
    </div>
  );
}




