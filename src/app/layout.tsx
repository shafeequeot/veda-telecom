import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-app-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-app-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veda Telecom FZCO | Global Distributor of Tech & Mobility",
  description:
    "Veda Telecom FZCO is a global distributor of smartphones, accessories, and tech gadgets headquartered in Dubai.",
  metadataBase: new URL("https://www.vedatelecomfzco.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    title: "Veda Telecom FZCO | Global Distributor of Tech & Mobility",
    description:
      "Veda Telecom FZCO is a global distributor of smartphones, accessories, and tech gadgets headquartered in Dubai.",
    type: "website",
    url: "/",
    siteName: "Veda Telecom FZCO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veda Telecom FZCO",
    description:
      "Global distributor of smartphones, accessories, and tech gadgets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Veda Telecom FZCO",
    url: "https://www.vedatelecomfzco.com",
    logo: "https://www.vedatelecomfzco.com/logo.png",
    telephone: "+97143536660",
    email: "Operations@veda-telecom.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No 333, 4WA, Dubai Airport Freezone (DAFZA)",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: [],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased bg-background`}>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Force light mode always
                  document.documentElement.dataset.theme = 'light';
                  document.documentElement.classList.remove('dark');
                  // Remove any dark theme preference
                  localStorage.setItem('theme', 'light');
                } catch (e) {}
              })();
            `,
          }}
        />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
