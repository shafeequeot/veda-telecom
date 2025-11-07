"use client";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Link from "next/link";
import MotionSection from "@/components/MotionSection";
import GradientButton from "@/components/GradientButton";
import BlobBackground from "@/components/BlobBackground";
import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import MissionVisionSection from "@/components/MissionVisionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactPreview from "@/components/ContactPreview";
import ProductCategoriesPreview from "@/components/ProductCategoriesPreview";

export default function Home() {
  const slides = [
    {
      title: "Connecting the World with Leading Tech Brands",
      subtitle: "Global distribution of smartphones, accessories, and gadgets.",
      image: "/placeholders/home cover-01.jpg",
    },
    {
      title: "Dubai-Based Telecom Trading Experts",
      subtitle: "Trusted partner for the world’s most loved brands.",
      image: "/placeholders/home cover-02.jpg",
    },
    {
      title: "Your Trusted Partner for Mobility Solutions",
      subtitle: "Reliable supply, competitive pricing, and global reach.",
      image: "/placeholders/home cover-03.jpg",
    },
  ];

  const brands = [
    "Apple",
    "Samsung",
    "Logitech",
    "Dyson",
    "GoPro",
    "Steam Deck",
    "DJI",
    "JBL",
    "Mi",
    "Canon",
    "Motorola",
    "Nintendo",
  ];

  return (
    <div>
      {/* Hero Section with City Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/placeholders/Dubai.avif" 
            alt="Dubai Skyline" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container-px mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image 
                src="/Veda logo-02.svg" 
                alt="Veda Telecom FZCO" 
                width={200} 
                height={60}
                className="opacity-95"
              />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Electronics wholesale from Dubai
            </h1>
            
            {/* CTA Button */}
            <div className="mt-8">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-teal-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Request stock
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <div className="container-px mx-auto section">
        <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12">
          <BlobBackground />
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="headline headline-gradient">Dubai Telecom Trading Specialists</h2>
              <p className="subhead mt-3 max-w-xl text-slate-700">
                Veda Telecom FZCO is your trusted partner for smartphones, accessories, and cutting-edge tech gadgets. Headquartered in Dubai with strategic hubs across Asia and the Middle East, we deliver reliable supply chains and competitive pricing to partners worldwide. With over 22 years of combined industry experience, we specialize in wholesale distribution of leading electronics brands, ensuring on-time delivery and exceptional customer service.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <GradientButton href="/contact">Get in Touch</GradientButton>
                <a href="/products" className="btn-secondary">Explore Products</a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[{k:"+60", v:"Brands"}, {k:"+40", v:"Markets"}, {k:"99%", v:"On-time"}].map((s, idx) => (
                  <motion.div 
                    key={s.v} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="rounded-xl bg-white/80 backdrop-blur-sm p-4 ring-1 ring-slate-200/60 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-2xl font-semibold text-blue-900">{s.k}</div>
                    <div className="text-xs muted">{s.v}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <Carousel slides={slides} />
            </div>
          </div>
        </div>
      </div>

      <MotionSection className="section bg-sky-50">
        <div className="container-px mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              title="About Veda Telecom"
              subtitle="Veda Telecom FZCO is a Dubai-based telecom trading company specializing in the import and distribution of high-quality telecommunications and electronics. Our expert team leverages local market knowledge and reliable logistics to deliver trusted products and solutions to our business partners. With a strong commitment to quality, reliability, and competitive pricing, we support retailers, wholesalers, and e-commerce platforms throughout the region."
            />
            <Link href="/about" className="btn-secondary">Learn More</Link>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-xl bg-white ring-1 ring-slate-200/60 shadow-sm">
            <Image src="/placeholders/about.png" alt="About placeholder" fill className="object-cover" />
          </div>
        </div>
      </MotionSection>

      {/* Mission & Vision Section */}
      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Mission & Vision" subtitle="Veda Telecom FZCO is a Dubai-based telecom trading company specializing in the import and distribution of high-quality telecommunications and electronics." />
          <MissionVisionSection />
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Our Brands" subtitle="We work with the world's leading tech brands." />
          <Marquee>
            {brands.map((name, index) => (
              <BrandLogo key={name} name={name} index={index} />
            ))}
          </Marquee>
        </div>
      </MotionSection>

      {/* Product Categories Preview */}
      <MotionSection className="section bg-sky-50">
        <div className="container-px mx-auto">
          <SectionTitle title="Product Categories" subtitle="Explore our comprehensive range of electronics products across multiple categories. From smartphones to home tech, we have everything your business needs." />
          <ProductCategoriesPreview />
          <div className="mt-8 text-center">
            <Link href="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section bg-gradient-to-br from-slate-400 via-slate-200 to-slate-500">
        <div className="container-px mx-auto">
          <SectionTitle title="Services" subtitle="Comprehensive end-to-end distribution services designed to power your business growth. From sourcing and procurement to logistics and after-sales support, we handle every aspect of your supply chain needs." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[{
              title: "Sourcing & Procurement",
              desc: "Direct relationships with global OEMs and authorized channels. We source authentic products directly from manufacturers, ensuring quality and competitive pricing. Our extensive network spans across Dubai, Hong Kong, and USA, giving you access to the latest products as they hit the market.",
            }, {
              title: "Logistics & Fulfillment",
              desc: "On-time deliveries with optimized routing and customs expertise. Our logistics partners in Dubai, Hong Kong, and USA ensure fast, reliable shipping to your destination. We handle all customs clearance, documentation, and last-mile delivery coordination.",
            }, {
              title: "Inventory Management",
              desc: "Reliable availability and demand planning at scale. Our advanced inventory management systems ensure you always have access to the products you need. We provide real-time stock updates and demand forecasting to help you plan your orders effectively.",
            }, {
              title: "After-Sales Support",
              desc: "Warranty coordination and dedicated account service. Our team provides comprehensive after-sales support including warranty processing, returns management, and dedicated account managers to assist with any queries or concerns.",
            }].map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 bg-white hover:bg-sky-50 transition-colors">
                  <h3 className="font-semibold text-blue-900">{s.title}</h3>
                  <p className="mt-2 text-sm muted">{s.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Industries We Serve" subtitle="We cater to diverse market segments including retail chains, online marketplaces, enterprise clients, and wholesale distributors. Our flexible supply models are tailored to meet the unique needs of each channel." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                title: "Retail Chains", 
                desc: "We support large retail chains with bulk ordering, flexible payment terms, and dedicated inventory allocations. Our drop-shipping capabilities enable seamless integration with your existing operations."
              },
              { 
                title: "Online Marketplaces", 
                desc: "Optimized for e-commerce platforms with fast fulfillment, competitive pricing, and scalable order volumes. We support marketplace requirements including labeling, packaging, and shipping standards."
              },
              { 
                title: "Enterprise & B2B", 
                desc: "Corporate procurement solutions with volume discounts, custom payment terms, and dedicated account management. We handle everything from single orders to large-scale procurement contracts."
              },
              { 
                title: "Resellers/Wholesalers", 
                desc: "Wholesale pricing and flexible minimum order quantities designed for resellers. Our tiered pricing structure rewards higher volume orders, maximizing your profit margins."
              }
            ].map((i, idx) => (
              <motion.div
                key={i.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="p-6 hover:border-sky-400 transition-colors">
                  <h3 className="font-semibold text-blue-900">{i.title}</h3>
                  <p className="mt-2 text-sm muted">{i.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Core Values Section */}
      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Core Values" subtitle="The principles that guide everything we do and define our commitment to excellence." />
          <CoreValuesSection />
        </div>
      </MotionSection>

      <MotionSection className="section bg-gradient-to-br from-slate-400 via-slate-300 to-slate-500">
        <div className="container-px mx-auto">
          <SectionTitle title="Why Choose Us" subtitle="We stand out through our commitment to quality products, reliable supply chains, and truly global reach. Our 22 years of combined experience, strategic location in Dubai, and partnerships with leading brands make us the ideal distribution partner." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Business Integrity", "Customer-Centric", "Global Network", "Competitive Pricing"].map((t, idx) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 bg-white hover:bg-gradient-to-br hover:from-sky-50 hover:to-blue-50 transition-all">
                  <motion.div 
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >★</motion.div>
                  <h3 className="font-semibold text-blue-900">{t}</h3>
                  <p className="mt-2 text-sm muted">We prioritize trust, service, reach, and value in every engagement.</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Achievements Section */}
      <MotionSection className="section bg-sky-50">
        <div className="container-px mx-auto">
          <SectionTitle title="Our Achievements" subtitle="Milestones and accomplishments that demonstrate our commitment to excellence and reliability." />
          <AchievementsSection />
        </div>
      </MotionSection>

      <section className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Global Presence" subtitle="Our strategic hubs in Dubai, Hong Kong, and Singapore connect markets across continents, enabling fast and efficient distribution to partners worldwide. Each location is optimized for regional logistics and market access." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{ city: "Dubai" , image: 'Dubai.avif'}, { city: "Hong Kong", image: 'Hong Kong.jpg' }, { city: "Singapore", image: 'Singapore.jpg' }].map((l, idx) => (
              <motion.div
                key={l.city}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="overflow-hidden rounded-xl ring-1 ring-slate-200 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-44 w-full bg-white overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image src={`/placeholders/${l.image}`} alt={`${l.city} office`} fill className="object-cover" />
                  </motion.div>
                </div>
                <div className="p-4 bg-white">
                  <p className="font-semibold text-blue-900">{l.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Get in Touch" subtitle="Connect with our team to discuss your requirements, request quotes, or learn more about our services." />
          <ContactPreview />
        </div>
      </MotionSection>

      <MotionSection className="section bg-linear-to-r from-sky-400 to-blue-900">
        <div className="container-px mx-auto text-center text-white">
          <h3 className="text-2xl font-semibold">Ready to partner with Veda Telecom?</h3>
          <p className="mt-2 text-white/90">Contact our team to discuss your requirements.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-white/10 px-5 py-2.5 font-semibold backdrop-blur hover:bg-white/20">Get in Touch</Link>
        </div>
      </MotionSection>
    </div>
  );
}
