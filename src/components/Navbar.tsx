"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "HOME",
      href: "/",
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      name: "ABOUT",
      href: "#about",
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      name: "GALLERY",
      href: "#gallery",
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "EVENTS",
      href: "#events",
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M19 3v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
    },
    {
      name: "MANGA",
      href: "#manga",
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
    },
    {
      name: "ANIME",
      href: "#anime",
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <header className="w-full flex items-center justify-between relative z-50">
      <nav className="bg-[#780000] text-white w-full md:flex-1 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-3.5 md:rounded-br-[50px] shadow-lg md:mr-4">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="The Seven Deadly Sins Logo"
            width={170}
            height={60}
            priority
            className="h-9 sm:h-11 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </Link>

        <ul className="hidden md:flex items-center justify-evenly flex-1 ml-6 lg:ml-12 mr-2 lg:mr-6 font-serif font-bold text-sm lg:text-base tracking-wider text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-200 px-2 py-1"
              >
                <span className="opacity-90">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex md:hidden items-center gap-2">
          <button
            title="Play Music"
            className="p-1 rounded-full hover:bg-red-900/60 transition active:scale-95"
            aria-label="Play Music"
          >
            <Image
              src="/playmusic.png"
              alt="Dragon Sin of Wrath"
              width={34}
              height={34}
              className="w-8 h-8 object-contain invert"
            />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-1.5 focus:outline-none hover:bg-red-900/60 rounded-lg transition"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div className="hidden md:flex shrink-0 pr-6 lg:pr-10 items-center justify-center">
        <Link href="#dragon-mark" title="Dragon Sin of Wrath">
          <Image
            src="/playmusic.png"
            alt="Dragon Sin of Wrath Crest"
            width={64}
            height={64}
            className="w-12 h-12 lg:w-16 lg:h-16 object-contain hover:rotate-12 transition-transform duration-300 drop-shadow-sm cursor-pointer"
          />
        </Link>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#780000] text-white px-5 py-4 shadow-2xl space-y-2 z-50 border-t border-red-900">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 font-serif font-bold text-sm py-2 px-3 rounded-lg hover:bg-red-900/60 hover:text-amber-300 transition"
            >
              <span className="text-amber-400">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
