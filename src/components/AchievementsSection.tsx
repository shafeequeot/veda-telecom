"use client";
import { motion } from "framer-motion";
import Card from "@/components/Card";

const achievements = [
  {
    title: "Global Partnerships",
    desc: "Established partnerships with 60+ leading technology brands across the globe, ensuring access to the latest products and innovations.",
    icon: "🌐"
  },
  {
    title: "On-time Fulfillment",
    desc: "99% on-time delivery rate across all markets. Our efficient logistics and inventory management ensure your orders arrive when promised.",
    icon: "⏱️"
  },
  {
    title: "Diverse Portfolio",
    desc: "Comprehensive product range covering smartphones, tablets, accessories, gaming devices, cameras, and home tech from top manufacturers.",
    icon: "📦"
  },
  {
    title: "Trusted by Leaders",
    desc: "Trusted by major retailers, e-commerce platforms, and enterprise clients worldwide. Our reputation speaks through our satisfied partners.",
    icon: "⭐"
  }
];

export default function AchievementsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {achievements.map((achievement, idx) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card className="p-6 bg-white hover:bg-gradient-to-br hover:from-sky-50 hover:to-blue-50 transition-all">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 text-xl">
              {achievement.icon}
            </div>
            <h4 className="font-semibold text-blue-900">{achievement.title}</h4>
            <p className="mt-2 text-sm muted">{achievement.desc}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}




