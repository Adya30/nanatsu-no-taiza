export default function AnimeSection() {
  const animeSeasons = [
    {
      season: "Season 1",
      title: "The Seven Deadly Sins",
      episodes: "24 Episodes + 2 OVAs",
      studio: "A-1 Pictures",
      year: "2014 - 2015",
      badge: "The Beginning",
      synopsis:
        "Princess Elizabeth escapes the Holy Knight coup in Liones and stumbles upon the Boar Hat tavern, teaming up with Meliodas to assemble the scattered Sins.",
    },
    {
      season: "Season 2",
      title: "Revival of the Commandments",
      episodes: "24 Episodes",
      studio: "A-1 Pictures",
      year: "2018",
      badge: "Demon Clan Rises",
      synopsis:
        "Fraudrin unseals the Ten Commandments. The Sins must unlock their hidden power and search for the formidable Lion's Sin of Pride, Lord Escanor.",
    },
    {
      season: "Season 3",
      title: "Wrath of the Gods",
      episodes: "24 Episodes",
      studio: "Studio Deen",
      year: "2019 - 2020",
      badge: "The 3,000 Year Holy War",
      synopsis:
        "King and Diane are sent back in time to experience the ancient Holy War firsthand, unveiling Meliodas and Elizabeth's tragic curse.",
    },
    {
      season: "Season 4",
      title: "Dragon's Judgement",
      episodes: "24 Episodes",
      studio: "Studio Deen",
      year: "2021",
      badge: "Final Battle",
      synopsis:
        "Meliodas seeks to become the Demon King to shatter the eternal curse, leading to a fateful battle between comrades in Purgatory and Britannia.",
    },
  ];

  const movies = [
    { title: "Prisoners of the Sky", type: "Anime Feature Film", year: "2018", runtime: "99 min" },
    { title: "Cursed by Light", type: "Canonical Movie Finale", year: "2021", runtime: "80 min" },
    { title: "Grudge of Edinburgh (Part 1 & 2)", type: "CGI Sequel Film Series", year: "2022 - 2023", runtime: "2 Parts" },
  ];

  return (
    <section id="anime" className="w-full py-20 px-6 sm:px-10 lg:px-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#780000]/10 border border-[#780000]/30 text-[#780000] px-4 py-1.5 rounded-full text-xs font-serif font-bold uppercase tracking-widest">
            Animated Saga
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 uppercase tracking-tight">
            Anime Watch Order
          </h2>
          <div className="w-24 h-1 bg-[#780000] mx-auto rounded-full" />
          <p className="max-w-xl mx-auto text-zinc-700 text-sm sm:text-base leading-relaxed">
            The complete television series and movie chronology soundtracked by legendary composer Hiroyuki Sawano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {animeSeasons.map((item, idx) => (
            <div
              key={idx}
              className="group bg-[#fff9f0] border border-amber-900/15 rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl hover:border-amber-900/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif font-black text-[#780000] uppercase tracking-wider">
                    {item.season}
                  </span>
                  <span className="text-[11px] font-mono bg-zinc-900 text-zinc-100 px-2.5 py-0.5 rounded">
                    {item.year}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-black text-2xl text-zinc-950 group-hover:text-[#780000] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-amber-900 font-medium mt-1">
                    <span>🎬 {item.episodes}</span>
                    <span>•</span>
                    <span>🏢 {item.studio}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-1">
                  {item.synopsis}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-900/10 flex items-center justify-between">
                <span className="text-[11px] font-serif font-bold uppercase text-emerald-700 bg-emerald-500/10 px-2.5 py-1 rounded">
                  {item.badge}
                </span>
                <button
                  type="button"
                  className="text-xs font-serif font-bold text-[#780000] hover:text-[#550000] flex items-center gap-1 cursor-pointer"
                >
                  Stream Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#fff9f0] border border-amber-900/15 rounded-3xl p-6 sm:p-8 space-y-4 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-zinc-950">
              Theatrical Films & Specials
            </h3>
            <span className="text-xs font-serif font-bold uppercase text-amber-900">
              Complete Cinematic Releases
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {movies.map((mov, i) => (
              <div
                key={i}
                className="bg-white/80 border border-amber-900/10 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-800 px-2 py-0.5 rounded">
                  {mov.year} • {mov.runtime}
                </span>
                <h4 className="font-serif font-bold text-base text-zinc-900 mt-2">
                  {mov.title}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">{mov.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
