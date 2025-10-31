import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Image from "next/image";
import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";

export const metadata: Metadata = {
  title: "Products | Veda Telecom FZCO",
  description: "Explore our categories: Smartphones, Accessories, and Tech Gadgets.",
  openGraph: {
    title: "Products | Veda Telecom FZCO",
    description: "Explore our categories: Smartphones, Accessories, and Tech Gadgets.",
  },
};

const brands = [
  { 
    name: "Apple", 
    desc: "iPhone, iPad, accessories",
    images: ["/placeholders/products/apple-12.jpg", "/placeholders/products/apple-13.jpg", "/placeholders/products/apple-14.jpg"]
  },
  { 
    name: "Samsung", 
    desc: "Galaxy smartphones and tablets",
    images: ["/placeholders/products/samsung-1.jpg", "/placeholders/products/samsung-2.jpg", "/placeholders/products/samsung-3.jpg"]
  },
  { 
    name: "Logitech", 
    desc: "Peripherals and accessories",
    images: ["/placeholders/products/logitech-1.jpg", "/placeholders/products/logitech-2.jpg", "/placeholders/products/logitech-3.jpg"]
  },
  { 
    name: "Dyson", 
    desc: "Premium home tech",
    images: ["/placeholders/products/dyson-1.jpg", "/placeholders/products/dyson-2.jpg", "/placeholders/products/dyson-3.jpg"]
  },
  { 
    name: "GoPro", 
    desc: "Action cameras and accessories",
    images: ["/placeholders/products/gopro-1.jpg", "/placeholders/products/gopro-2.jpg", "/placeholders/products/gopro-3.jpg"]
  },
  { 
    name: "Steam Deck", 
    desc: "Portable gaming",
    images: ["/placeholders/products/steamdeck-1.jpg", "/placeholders/products/steamdeck-2.jpg", "/placeholders/products/steamdeck-3.jpg"]
  },
  { 
    name: "DJI", 
    desc: "Drones and gimbals",
    images: ["/placeholders/products/dji-1.jpg", "/placeholders/products/dji-2.jpg", "/placeholders/products/dji-3.jpg"]
  },
  {  
    name: "JBL", 
    desc: "Audio solutions",
    images: ["/placeholders/products/jbl-1.jpg", "/placeholders/products/jbl-2.jpg", "/placeholders/products/jbl-3.jpg"]
  },
  { 
    name: "Mi", 
    desc: "Smart devices and accessories",
    images: ["/placeholders/products/xiaomi-1.jpg", "/placeholders/products/xiaomi-2.jpg", "/placeholders/products/xiaomi-3.jpg"]
  },
  { 
    name: "Canon", 
    desc: "Cameras and imaging",
    images: ["/placeholders/products/canon-1.jpg", "/placeholders/products/canon-2.jpg", "/placeholders/products/canon-3.jpg"]
  },
  { 
    name: "Motorola", 
    desc: "Smartphones",
    images: ["/placeholders/products/motorola-1.jpg", "/placeholders/products/motorola-2.jpg", "/placeholders/products/motorola-3.jpg"]
  },
  { 
    name: "Nintendo", 
    desc: "Consoles and games",
    images: ["/placeholders/products/nintendo-1.jpg", "/placeholders/products/nintendo-2.jpg", "/placeholders/products/nintendo-3.jpg"]
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Banner */}
      <div className="relative h-64 w-full">
        <Image src="/placeholders/hero-1.svg" alt="Products banner" fill className="object-cover" />
      </div>

      <MotionSection className="section">
        <div className="container-px mx-auto">
          <SectionTitle title="Products" subtitle="Categories: Smartphones, Accessories, Tech Gadgets." />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => (
              <Card key={b.name} className="p-6">
                <h3 className="text-xl font-semibold text-blue-900">{b.name}</h3>
                <p className="mt-1 text-sm muted">{b.desc}</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {b.images.map((img, i) => (
                    <div key={i} className="relative h-20 w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                      <Image 
                        src={img} 
                        alt={`${b.name} product ${i + 1}`} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}


