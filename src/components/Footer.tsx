import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#780000] text-white border-t border-red-900/40 relative z-20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2.5 max-w-md">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="The Seven Deadly Sins"
                width={180}
                height={65}
                className="h-11 sm:h-12 w-auto object-contain mx-auto md:mx-0 drop-shadow-md hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <p className="text-xs text-white italic font-serif leading-relaxed">
              &quot;No matter what lies you tell, you can&apos;t fool your own heart. Meliodas, Dragon&apos;s Sin of Wrath&quot;
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-serif font-bold text-xs sm:text-sm uppercase tracking-wider text-white">
            <Link href="/" className="hover:text-amber-300 transition">Home</Link>
            <Link href="#about" className="hover:text-amber-300 transition">About</Link>
            <Link href="#gallery" className="hover:text-amber-300 transition">Gallery</Link>
            <Link href="#events" className="hover:text-amber-300 transition">Events</Link>
            <Link href="#manga" className="hover:text-amber-300 transition">Manga</Link>
            <Link href="#anime" className="hover:text-amber-300 transition">Anime</Link>
          </div>

          <div className="shrink-0">
            <Image
              src="/playmusic.png"
              alt="Dragon Crest"
              width={60}
              height={60}
              className="w-13 h-13 object-contain invert opacity-90 hover:opacity-100 hover:rotate-12 transition-all duration-300"
            />
          </div>
        </div>

        <div className="pt-6 border-t border-red-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xs sm:text-sm text-zinc-100 font-medium tracking-wide">
            <p>
              © 2026 <span className="font-bold text-white">Nanatsu no Taizai</span>. All Rights Reserved. Based on the manga by <span className="text-amber-300 font-semibold">Nakaba Suzuki</span> / Kodansha.
            </p>
          </div>

          <div className="flex items-center gap-4 text-white">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full hover:bg-white/15 hover:text-amber-300 hover:scale-110 transition-all duration-200 text-white"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full hover:bg-white/15 hover:text-amber-300 hover:scale-110 transition-all duration-200 text-white"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 rounded-full hover:bg-white/15 hover:text-amber-300 hover:scale-110 transition-all duration-200 text-white"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
