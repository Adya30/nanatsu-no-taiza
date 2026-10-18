"use client";

import { useState } from "react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Seven Sins", "Holy Knights", "Legendary Battles", "The Boar Hat"];

  const galleryItems = [
    {
      title: "Meliodas Demon Clan Awakening",
      category: "Seven Sins",
      arc: "Liones Infiltration Arc",
      tag: "Demon Mark",
      bgGradient: "from-purple-900 to-zinc-900",
    },
    {
      title: "Escanor: Cruel Sun Unleashed",
      category: "Legendary Battles",
      arc: "Defending Liones Arc",
      tag: "Sunshine Power",
      bgGradient: "from-amber-700 to-yellow-900",
    },
    {
      title: "Boar Hat Tavern on Hawk Mama",
      category: "The Boar Hat",
      arc: "Britannia Journey",
      tag: "Traveling Tavern",
      bgGradient: "from-emerald-800 to-green-950",
    },
    {
      title: "Ban & Meliodas Arm Wrestling Reunion",
      category: "Seven Sins",
      arc: "Baste Dungeon Arc",
      tag: "Bonds of Sins",
      bgGradient: "from-red-900 to-rose-950",
    },
    {
      title: "Great Holy Knight Zaratras & Dreyfus",
      category: "Holy Knights",
      arc: "Conspiracy of Liones",
      tag: "Grand Knights",
      bgGradient: "from-blue-900 to-slate-900",
    },
    {
      title: "King vs Helbram: Fairy King Conflict",
      category: "Legendary Battles",
      arc: "Kingdom Infiltration",
      tag: "Spirit Spear",
      bgGradient: "from-teal-900 to-cyan-950",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-[#f7e8d3]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#780000]/10 border border-[#780000]/30 text-[#780000] px-4 py-1.5 rounded-full text-xs font-serif font-bold uppercase tracking-widest">
            Visual Archive
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 uppercase tracking-tight">
            Britannia Gallery
          </h2>
          <div className="w-24 h-1 bg-[#780000] mx-auto rounded-full" />
          <p className="max-w-xl mx-auto text-zinc-700 text-sm sm:text-base leading-relaxed">
            Relive the most memorable confrontations, transformations, and sacred moments across the Britannia realm.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#780000] text-white shadow-md shadow-red-950/20 scale-105"
                  : "bg-white/80 hover:bg-white text-zinc-700 hover:text-black border border-amber-900/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${item.bgGradient} p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-black/10`}
            >
              <div className="flex items-center justify-between z-10">
                <span className="text-[11px] font-mono uppercase bg-black/40 backdrop-blur-md px-2.5 py-1 rounded text-amber-300 border border-amber-400/20">
                  {item.tag}
                </span>
                <span className="text-xs font-serif font-semibold text-zinc-300 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>

              <div className="z-10 space-y-1">
                <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">{item.arc}</p>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
              </div>

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
