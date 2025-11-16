import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import AnimatedAboutSection from "@/components/AnimatedAboutSection";
import AnimatedTeamCard from "@/components/AnimatedTeamCard";
import AnimatedTimeline from "@/components/AnimatedTimeline";

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
  "Vivek Narasimhan",
  "Abhishek Ranjan",
  "Shakil Salauddin",
  "Harihar Kandel",
  "Ajay sagar",
  "Suraj Bisht",
  "Manoj Bisht",
  "Shalmy Joseph",
];

export default function AboutPage() {
  return (
    <div>
      {/* Banner */}
      <div className="relative h-64 w-full">
        <Image src="/placeholders/about cover.jpg" alt="About banner" fill className="object-cover" />
      </div>

      <MotionSection className="section bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/placeholders/Dubai.avif" 
            alt="Dubai Skyline" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="container-px mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16">ABOUT US</h2>
          <AnimatedAboutSection />
        </div>
      </MotionSection>

      <MotionSection className="section bg-sky-50">
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

      <MotionSection className="section bg-sky-50">
        <div className="container-px mx-auto">
          <SectionTitle title="Our Team" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((name) => (
              <AnimatedTeamCard key={name} name={name} />
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
                <h4 className="font-semibold text-blue-900">{a}</h4>
                <p className="mt-2 text-sm muted">Delivering consistent excellence across global markets.</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section bg-sky-50">
        <div className="container-px mx-auto">
          <SectionTitle title="Timeline" subtitle="Milestones that shaped our growth." />
          <div className="mx-auto max-w-3xl">
            <AnimatedTimeline />
          </div>
        </div>
      </MotionSection>
    </div>
  );
}


