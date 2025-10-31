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

export default function Home() {
  const slides = [
    {
      title: "Connecting the World with Leading Tech Brands",
      subtitle: "Global distribution of smartphones, accessories, and gadgets.",
      image: "/placeholders/home cover-01.jpg",
    },
    {
      title: "Global Distributor of Mobile Phones & Gadgets",
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
      <div className="container-px mx-auto section">
        <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12">
          <BlobBackground />
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="headline headline-gradient">Global Distributor of Tech & Mobility</h1>
              <p className="subhead mt-3 max-w-xl text-slate-700 dark:text-slate-300">
                Trusted partner for smartphones, accessories, and gadgets. Headquartered in Dubai with global reach.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <GradientButton href="/contact">Get in Touch</GradientButton>
                <a href="/products" className="btn-secondary">Explore Products</a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[{k:"+60", v:"Brands"}, {k:"+40", v:"Markets"}, {k:"99%", v:"On-time"}].map((s) => (
                  <div key={s.v} className="rounded-xl bg-white/80 backdrop-blur-sm p-4 ring-1 ring-slate-200/60 shadow-sm dark:bg-slate-900/50 dark:ring-slate-800">
                    <div className="text-2xl font-semibold text-blue-900 dark:text-slate-100">{s.k}</div>
                    <div className="text-xs muted">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Carousel slides={slides} />
            </div>
          </div>
        </div>
      </div>

      <MotionSection className="section bg-sky-50 dark:bg-slate-900/70">
        <div className="container-px mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              title="About Veda Telecom"
              subtitle="Veda Telecom FZCO is a global distributor headquartered in Dubai, delivering smartphones, accessories, and tech gadgets to partners worldwide."
            />
            <Link href="/about" className="btn-secondary">Learn More</Link>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-xl bg-white ring-1 ring-slate-200/60 shadow-sm">
            <Image src="/placeholders/about.png" alt="About placeholder" fill className="object-cover" />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Our Brands" subtitle="We work with the world’s leading tech brands." />
          <Marquee>
            {brands.map((name) => (
              <div key={name} className="mx-4 inline-flex items-center gap-3">
                <div className="h-10 w-24 rounded bg-slate-50 ring-1 ring-slate-200/50 dark:bg-slate-800 dark:ring-slate-700" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </MotionSection>

      <MotionSection className="section bg-slate-800">
        <div className="container-px mx-auto">
          <SectionTitle title="Services" subtitle="End-to-end distribution services to power your growth." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[{
              title: "Sourcing & Procurement",
              desc: "Direct relationships with global OEMs and authorized channels.",
            }, {
              title: "Logistics & Fulfillment",
              desc: "On-time deliveries with optimized routing and customs expertise.",
            }, {
              title: "Inventory Management",
              desc: "Reliable availability and demand planning at scale.",
            }, {
              title: "After-Sales Support",
              desc: "Warranty coordination and dedicated account service.",
            }].map((s) => (
              <Card key={s.title} className="p-6">
                <h3 className="font-semibold text-blue-900 dark:text-slate-100">{s.title}</h3>
                <p className="mt-2 text-sm muted">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Industries We Serve" subtitle="Retail, wholesale, eCommerce, and enterprise channels." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Retail Chains", "Online Marketplaces", "Enterprise & B2B", "Resellers/Wholesalers"].map((i) => (
              <Card key={i} className="p-6">
                <h3 className="font-semibold text-blue-900 dark:text-slate-100">{i}</h3>
                <p className="mt-2 text-sm muted">Tailored supply models for speed, reliability, and margin.</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="section bg-slate-800">
        <div className="container-px mx-auto">
          <SectionTitle title="Why Choose Us" subtitle="Quality products, reliable supply, and global reach." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Business Integrity", "Customer-Centric", "Global Network", "Competitive Pricing"].map((t) => (
              <Card key={t} className="p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600">★</div>
                <h3 className="font-semibold text-blue-900">{t}</h3>
                <p className="mt-2 text-sm muted">We prioritize trust, service, reach, and value in every engagement.</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Global Presence" subtitle="Strategic hubs connecting markets across continents." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{ city: "Dubai" , image: 'Dubai.avif'}, { city: "Hong Kong", image: 'Hong Kong.jpg' }, { city: "Singapore", image: 'Singapore.jpg' }].map((l) => (
              <div key={l.city} className="overflow-hidden rounded-xl ring-1 ring-slate-200">
                <div className="relative h-44 w-full bg-white">
                  <Image src={`/placeholders/${l.image}`} alt={`${l.city} office`} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-blue-900">{l.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
