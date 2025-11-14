"use client";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import Link from "next/link";

const productCategories = [
  { 
    name: "Smartphones", 
    desc: "Latest iPhone, Samsung Galaxy, and premium smartphones from leading manufacturers. Complete range of models with various storage and color options.",
    count: "100+ Models"
  },
  { 
    name: "Tablets & Accessories", 
    desc: "iPads, Samsung tablets, and comprehensive accessories including cases, chargers, screen protectors, and connectivity solutions.",
    count: "50+ Products"
  },
  { 
    name: "Audio Solutions", 
    desc: "Premium headphones, earbuds, and speakers from JBL, Apple AirPods, and other top audio brands. Wireless and wired options available.",
    count: "80+ SKUs"
  },
  { 
    name: "Gaming & Entertainment", 
    desc: "Gaming consoles, Steam Deck, Nintendo Switch, gaming accessories, and entertainment devices for the ultimate gaming experience.",
    count: "40+ Products"
  },
  { 
    name: "Cameras & Drones", 
    desc: "Professional cameras from Canon, action cameras from GoPro, and DJI drones with gimbals for content creators and professionals.",
    count: "60+ Models"
  },
  { 
    name: "Home Tech", 
    desc: "Premium home technology including Dyson products, smart home devices, and innovative lifestyle tech solutions.",
    count: "30+ Products"
  }
];

export default function ProductCategoriesPreview() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {productCategories.map((category, idx) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <Card className="p-6 h-full hover:shadow-lg transition-all hover:border-sky-400">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-blue-900">{category.name}</h3>
              <span className="text-xs font-medium text-sky-600 bg-sky-100 px-2 py-1 rounded">
                {category.count}
              </span>
            </div>
            <p className="text-sm muted mb-4">{category.desc}</p>
            <Link 
              href="/products"
              className="text-sm text-sky-600 hover:text-sky-700 font-medium inline-flex items-center gap-1"
            >
              Explore {category.name} →
            </Link>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}




