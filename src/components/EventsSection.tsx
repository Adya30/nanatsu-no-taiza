export default function EventsSection() {
  const events = [
    {
      date: "OCT 28, 2026",
      title: "Britannia Royal Festival & Cosplay Gala",
      location: "Liones Grand Arena / Live Stream",
      category: "Special Festival",
      status: "Registration Open",
      statusColor: "bg-emerald-600 text-white",
      description:
        "Join thousands of fans in celebrating the legendary order of knights with live orchestral performances of Hiroyuki Sawano's iconic soundtracks and official cosplay contests.",
    },
    {
      date: "NOV 15, 2026",
      title: "Nakaba Suzuki Exclusive Exhibition & Artbook Launch",
      location: "Tokyo Anime Center & Global Digital Gallery",
      category: "Manga & Art",
      status: "VIP Tickets Available",
      statusColor: "bg-amber-600 text-white",
      description:
        "An exclusive showcase of over 200 original color illustrations, draft manuscripts from the Holy War arc, and preview sketches for the Four Knights of the Apocalypse.",
    },
    {
      date: "DEC 05, 2026",
      title: "Nanatsu no Taizai: Grand Cross Global Championship",
      location: "Worldwide Esports Circuit",
      category: "Gaming Tournament",
      status: "Upcoming",
      statusColor: "bg-[#780000] text-white",
      description:
        "Top strategists battle in the official 7DS Grand Cross global PVP showdown for the coveted Holy Knight Champion title and exclusive in-game relics.",
    },
  ];

  return (
    <section id="events" className="w-full py-20 px-6 sm:px-10 lg:px-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#780000]/10 border border-[#780000]/30 text-[#780000] px-4 py-1.5 rounded-full text-xs font-serif font-bold uppercase tracking-widest">
            Kingdom Gatherings
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 uppercase tracking-tight">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-[#780000] mx-auto rounded-full" />
          <p className="max-w-xl mx-auto text-zinc-700 text-sm sm:text-base leading-relaxed">
            Stay updated with official conventions, musical galas, art exhibitions, and competitive tournaments across the kingdom.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className="group bg-[#fff9f0] border border-amber-900/15 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-amber-900/30 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="shrink-0 flex md:flex-col items-center justify-center bg-[#780000] text-white px-5 py-3 md:py-4 rounded-xl text-center min-w-[130px] shadow-sm">
                <span className="font-serif font-black text-lg md:text-xl tracking-wider leading-none">
                  {ev.date}
                </span>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`text-[11px] font-serif font-bold uppercase px-2.5 py-0.5 rounded-md ${ev.statusColor}`}>
                    {ev.status}
                  </span>
                  <span className="text-xs font-medium text-amber-900/80">
                    📍 {ev.location}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-zinc-950 group-hover:text-[#780000] transition-colors">
                  {ev.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-3xl">
                  {ev.description}
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <button
                  type="button"
                  className="w-full md:w-auto bg-[#037525] hover:bg-[#02601e] active:scale-95 text-white font-serif font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-md transition-all duration-200 uppercase tracking-wide cursor-pointer text-center"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
