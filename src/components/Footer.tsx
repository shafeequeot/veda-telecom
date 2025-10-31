import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="container-px mx-auto">
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-sky-400 text-white font-bold">VT</div>
            <p className="muted max-w-sm">
            Veda Telecom FZCO — global distributor of smartphones, accessories, and tech gadgets.
            </p>
            </div> */}
          {/* <div> */}
          <div>
            <Image src="/Veda logo-02.svg" alt="Veda Telecom FZCO" width={172} height={52} />
            <p className="muted max-w-sm">
              Veda Telecom FZCO — global distributor of smartphones, accessories, and tech gadgets.
            </p>
          </div>
          
            <div>
            <h4 className="font-semibold text-blue-900 dark:text-slate-100">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300">About Us</Link></li>
              <li><Link href="/products" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300">Products</Link></li>
              <li><Link href="/contact" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-slate-100">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Office No 333, 4WA, DAFZA, Dubai, UAE</li>
              <li><a href="mailto:finance@veda-telecom.com" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300">finance@veda-telecom.com</a></li>
              <li><a href="tel:+97143536660" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300">+971 4 353 6660</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-slate-100">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300">Home</Link></li>
              <li><Link href="/about" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300">About</Link></li>
              <li><Link href="/products" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300">Products</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200/80 bg-white py-6 px-4 sm:px-6 lg:px-8 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Veda Telecom FZCO. All rights reserved.</p>
          <p>Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}


