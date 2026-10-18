export default function MangaSection() {
  const mangaStats = [
    { label: "Total Volumes", value: "41", subtext: "Complete Main Series" },
    { label: "Serialized Chapters", value: "346", subtext: "Weekly Shonen Magazine" },
    { label: "Circulation Worldwide", value: "37M+", subtext: "Copies in Print Globally" },
    { label: "Original Author", value: "Nakaba Suzuki", subtext: "Kodansha Comics" },
  ];

  const storyArcs = [
    {
      title: "Kingdom Infiltration Arc",
      volumes: "Vol. 1 - 13",
      desc: "Elizabeth escapes Liones, gathers the scattered Sins, and uncovers the insidious Holy Knight conspiracy controlled by Hendrickson.",
      highlight: "Holy Knight Rebellion",
    },
    {
      title: "Ten Commandments Saga",
      volumes: "Vol. 14 - 24",
      desc: "The three-thousand-year-old seal breaks, unleashing the elite warriors of the Demon Clan led by Zeldris and Estarossa upon Britannia.",
      highlight: "Demon Clan Revival",
    },
    {
      title: "Holy War & Ancient Curse",
      volumes: "Vol. 25 - 35",
      desc: "The truth behind the 3,000-year cycle of reincarnation and the cruel curse binding Meliodas and Elizabeth is finally unveiled.",
      highlight: "Goddess & Demon Pact",
    },
    {
      title: "Demon King Climax & Epilogue",
      volumes: "Vol. 36 - 41",
      desc: "The Seven Deadly Sins unite for the ultimate showdown to vanquish the Demon King, paving the path for the Four Knights of the Apocalypse.",
      highlight: "Final Confrontation",
    },
  ];

  return (
    <section id="manga" className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-[#f7e8d3]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#780000]/10 border border-[#780000]/30 text-[#780000] px-4 py-1.5 rounded-full text-xs font-serif font-bold uppercase tracking-widest">
            Original Masterpiece
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 uppercase tracking-tight">
            The Manga Anthology
          </h2>
          <div className="w-24 h-1 bg-[#780000] mx-auto rounded-full" />
          <p className="max-w-xl mx-auto text-zinc-700 text-sm sm:text-base leading-relaxed">
            Written and illustrated by Nakaba Suzuki, chronicling the mythical chivalric fantasy from its opening tavern encounter to the climactic war of gods.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {mangaStats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#fff9f0] border border-amber-900/15 rounded-2xl p-5 sm:p-6 text-center shadow-md hover:shadow-lg transition"
            >
              <div className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#780000] mb-1">
                {stat.value}
              </div>
              <div className="font-serif font-bold text-xs sm:text-sm text-zinc-950 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">{stat.subtext}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-zinc-950">
            Major Narrative Arcs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storyArcs.map((arc, idx) => (
              <div
                key={idx}
                className="group bg-[#fff9f0] border border-amber-900/15 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-amber-900/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase bg-amber-500/10 text-amber-900 font-bold px-2.5 py-0.5 rounded border border-amber-900/20">
                      {arc.volumes}
                    </span>
                    <span className="text-xs font-serif font-semibold text-[#780000]">
                      {arc.highlight}
                    </span>
                  </div>
                  <h4 className="font-serif font-black text-xl text-zinc-950 group-hover:text-[#780000] transition-colors pt-1">
                    {arc.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {arc.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-amber-900/10 flex items-center justify-between text-xs font-serif font-semibold text-[#780000]">
                  <span>Explore Chapters</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#780000] to-[#550000] text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-serif font-bold tracking-widest uppercase bg-amber-400 text-zinc-950 px-3 py-1 rounded-full">
              Official Sequel
            </span>
            <h3 className="font-serif font-black text-2xl sm:text-3xl tracking-tight">
              Four Knights of the Apocalypse
            </h3>
            <p className="text-xs sm:text-sm text-zinc-200 max-w-xl">
              The saga continues with Percival, Tristan, Lancelot, and Gawain as destiny calls a new generation of holy knights to preserve peace in Britannia.
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 bg-[#037525] hover:bg-[#02601e] active:scale-95 text-white font-serif font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg transition uppercase tracking-wider cursor-pointer"
          >
            Read Sequel
          </button>
        </div>
      </div>
    </section>
  );
}
