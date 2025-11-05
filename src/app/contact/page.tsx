import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import AnimatedContactForm from "@/components/AnimatedContactForm";

export const metadata: Metadata = {
  title: "Contact | Veda Telecom FZCO",
  description: "Get in touch with Veda Telecom FZCO in Dubai.",
  openGraph: {
    title: "Contact | Veda Telecom FZCO",
    description: "Get in touch with Veda Telecom FZCO in Dubai.",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Banner */}
      <div className="relative h-64 w-full">
        <Image src="/placeholders/contact-banner.jpg" alt="Contact banner" fill className="object-cover" />
      </div>

      <MotionSection className="section bg-slate-50">
        <div className="container-px mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-semibold text-blue-900">Veda Telecom FZCO</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="text-slate-700">Office No 333, 4WA, Dubai Airport Freezone (DAFZA), Dubai, UAE</li>
                  <li><a href="mailto:Operations@veda-telecom.com" className="text-blue-900 hover:underline transition-colors">Operations@veda-telecom.com</a></li>
                  <li><a href="tel:+97143536660" className="text-blue-900 hover:underline transition-colors">+971 4 353 6660</a></li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-blue-900">FAQs</h3>
                <div className="mt-3 space-y-3 text-sm">
                  <details className="rounded-lg border border-slate-200 p-3 hover:border-sky-400 transition-colors">
                    <summary className="cursor-pointer font-medium text-slate-700 hover:text-blue-900 transition-colors">Which brands do you supply?</summary>
                    <p className="mt-2 muted">We offer a wide portfolio including Apple, Samsung, Logitech, DJI, and more.</p>
                  </details>
                  <details className="rounded-lg border border-slate-200 p-3 hover:border-sky-400 transition-colors">
                    <summary className="cursor-pointer font-medium text-slate-700 hover:text-blue-900 transition-colors">Do you ship internationally?</summary>
                    <p className="mt-2 muted">Yes, we support shipping to multiple regions with optimized routing.</p>
                  </details>
                  <details className="rounded-lg border border-slate-200 p-3 hover:border-sky-400 transition-colors">
                    <summary className="cursor-pointer font-medium text-slate-700 hover:text-blue-900 transition-colors">How fast is fulfillment?</summary>
                    <p className="mt-2 muted">Lead times depend on product and destination; we prioritize on-time delivery.</p>
                  </details>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl ring-1 ring-slate-200 shadow-lg">
                <div className="relative h-64 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.24369840872!2d55.371691500000004!3d25.262386299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db2e88811f5%3A0x6de81afe774356f4!2sDAFZA%20W4%20building!5e0!3m2!1sen!2sae!4v1761946040441!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 256 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DAFZA Location"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-1">
              <AnimatedContactForm />
              <div className="relative hidden h-48 w-full overflow-hidden rounded-xl bg-white ring-1 ring-slate-200/60 shadow-sm md:block">
                <Image src="/placeholders/contact-image.jpg" alt="Contact image" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}


