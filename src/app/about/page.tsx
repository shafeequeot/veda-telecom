import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";

export const metadata: Metadata = {
  title: "About Us | Veda Telecom FZCO",
  description:
    "Learn about Veda Telecom FZCO — our company overview, mission, vision, values, team, and achievements.",
  openGraph: {
    title: "About Us | Veda Telecom FZCO",
    description:
      "Learn about Veda Telecom FZCO — our company overview, mission, vision, values, team, and achievements.",
  },
};

const team = [
  "Vivek",
  "Shakeel",
  "Abhishek",
  "Manoj",
  "Shamly",
  "Hari",
  "Ajay",
  "Suraj",
];

export default function AboutPage() {
  return (
    <div>
      {/* Banner */}
      <div className="relative h-64 w-full">
        <Image src="/placeholders/about cover.jpg" alt="About banner" fill className="object-cover" />
      </div>

      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Company Overview" />
          <p className="max-w-3xl text-slate-700">
            Veda Telecom FZCO is a global distributor of mobile phones, accessories, and tech gadgets,
            headquartered in Dubai. We connect the world’s leading technology brands with markets globally,
            with a relentless focus on reliability, value, and long-term partnerships.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="section bg-sky-50 dark:bg-slate-900/70">
        <div className="container-px mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="headline">Mission & Vision</h3>
            <p className="mt-3 text-slate-700">
              Our mission is to empower partners with dependable access to top-tier technology products.
              Our vision is to be the most trusted, globally connected distributor in mobility solutions.
            </p>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-xl bg-white ring-1 ring-slate-200/60 shadow-sm">
            <Image src="/placeholders/mission.png" alt="Mission and Vision" fill className="object-cover" />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Core Values" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Business Integrity", "Customer-Centric Approach", "Global Excellence", "Reliable Partnerships"].map(
              (value) => (
                <Card key={value} className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600">✓</div>
                  <h4 className="font-semibold text-blue-900">{value}</h4>
                  <p className="mt-2 text-sm muted">We uphold standards that build trust and long-term success.</p>
                </Card>
              ),
            )}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section bg-sky-50 dark:bg-slate-900/70">
        <div className="container-px mx-auto">
          <SectionTitle title="Our Team" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((name, idx) => (
              <div
                key={name}
                className="group relative flex flex-col items-center rounded-2xl shadow-xl overflow-hidden pb-7 pt-10 px-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-sky-50 via-white to-blue-100 dark:from-slate-800 dark:via-slate-900 dark:to-sky-900"
              >
                <div className="absolute -top-4 right-4 opacity-10 text-7xl pointer-events-none select-none">
                  {/* Decorative background shape */}
                  <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" fill="#38bdf8"/>
                  </svg>
                </div>
                <div className="z-10">
                  <div className="h-20 w-20 rounded-full bg-white dark:bg-slate-800 border-4 border-sky-100 dark:border-sky-800 flex items-center justify-center mb-3 shadow-md group-hover:shadow-sky-200 dark:group-hover:shadow-sky-900 transition-shadow overflow-hidden">
                    <span className="inline-block h-16 w-16">
                      {/* Simple user SVG avatar instead of image */}
                      <svg viewBox="0 0 64 64" fill="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="32" fill="#38bdf8" className="dark:fill-sky-700" />
                        <circle cx="32" cy="26" r="12" fill="#fff" className="dark:fill-slate-200" />
                        <ellipse cx="32" cy="48" rx="16" ry="8" fill="#fff" className="dark:fill-slate-300" />
                        <circle cx="32" cy="26" r="8" fill="#bae6fd" className="dark:fill-sky-300" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-blue-900 dark:text-sky-50 text-lg">{name}</p>
                    <p className="text-xs text-sky-700/80 dark:text-sky-300/80 font-medium mt-1 tracking-wide">Team Member</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 dark:from-sky-600 dark:via-sky-700 dark:to-blue-700" />
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Our Achievements" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Global Partnerships", "On-time Fulfillment", "Diverse Portfolio", "Trusted by Leaders"].map((a) => (
              <Card key={a} className="p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600">🏆</div>
                <h4 className="font-semibold text-blue-900 dark:text-slate-100">{a}</h4>
                <p className="mt-2 text-sm muted">Delivering consistent excellence across global markets.</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section bg-sky-50 dark:bg-slate-900/70">
        <div className="container-px mx-auto">
          <SectionTitle title="Timeline" subtitle="Milestones that shaped our growth." />
          <div className="mx-auto max-w-3xl">
            <ol className="relative border-s border-slate-200 dark:border-slate-700">
              {[{ y: "2018", t: "Founded in Dubai" }, { y: "2020", t: "Expanded partner network" }, { y: "2022", t: "Opened Asia hubs" }, { y: "2024", t: "Portfolio diversification" }].map((m, i) => (
                <li key={i} className="ml-6 py-4">
                  <span className="absolute -left-2 mt-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-400 ring-4 ring-white dark:ring-slate-900" />
                  <h4 className="font-semibold text-blue-900 dark:text-slate-100">{m.y}</h4>
                  <p className="muted text-sm">{m.t}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}


