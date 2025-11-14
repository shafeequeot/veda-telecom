"use client";
import { motion } from "framer-motion";
import Card from "@/components/Card";

const values = [
  {
    title: "Business Integrity",
    desc: "We uphold the highest standards of honesty, transparency, and ethical business practices. Our commitment to integrity builds long-term trust with partners and ensures sustainable relationships.",
    icon: "✓"
  },
  {
    title: "Customer-Centric Approach",
    desc: "Every decision we make prioritizes our partners' success. We listen, adapt, and deliver solutions tailored to your specific needs, ensuring your business thrives.",
    icon: "❤️"
  },
  {
    title: "Global Excellence",
    desc: "With operations spanning multiple continents, we maintain consistent quality and service standards worldwide. Our global network ensures you receive the same excellence everywhere.",
    icon: "🌍"
  },
  {
    title: "Reliable Partnerships",
    desc: "We build lasting relationships based on mutual trust and respect. Our partners know they can depend on us for consistent supply, competitive pricing, and unwavering support.",
    icon: "🤝"
  }
];

export default function CoreValuesSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((value, idx) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <Card className="p-6 hover:shadow-lg transition-all">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 text-xl">
              {value.icon}
            </div>
            <h4 className="font-semibold text-blue-900">{value.title}</h4>
            <p className="mt-2 text-sm muted">{value.desc}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}




