export default function AboutSection() {
  const sins = [
    {
      name: "Meliodas",
      sin: "Dragon's Sin of Wrath",
      title: "Captain of the Seven Deadly Sins",
      treasure: "Demon Sword Lostvayne",
      color: "from-amber-600 to-red-700",
      badge: "Wrath",
      desc: "Former leader of the Ten Commandments who broke free to protect the woman he loves throughout countless reincarnations.",
    },
    {
      name: "Elizabeth Liones",
      sin: "Goddess Clan Princess",
      title: "Third Princess of the Kingdom of Liones",
      treasure: "Ark & Healing Light",
      color: "from-sky-500 to-indigo-600",
      badge: "Goddess",
      desc: "Reincarnation of Goddess Elizabeth who seeks the Seven Deadly Sins to free Britannia from the Holy Knights' tyranny.",
    },
    {
      name: "Ban",
      sin: "Fox's Sin of Greed",
      title: "The Undead Ban",
      treasure: "Holy Staff Courechouse",
      color: "from-red-600 to-rose-800",
      badge: "Greed",
      desc: "Gained immortality from the Fountain of Youth in the Fairy King's Forest, driven by loyalty and his love for Elaine.",
    },
    {
      name: "King (Harlequin)",
      sin: "Grizzly's Sin of Sloth",
      title: "Fairy King Harlequin",
      treasure: "Spirit Spear Chastiefol",
      color: "from-emerald-600 to-teal-800",
      badge: "Sloth",
      desc: "Protector of the Fairy Realm who commands the shape-shifting Sacred Spear Chastiefol with formidable telekinesis.",
    },
    {
      name: "Diane",
      sin: "Serpent's Sin of Envy",
      title: "Warrior of the Giant Clan",
      treasure: "War Hammer Gideon",
      color: "from-orange-500 to-amber-700",
      badge: "Envy",
      desc: "A pure-hearted giant maiden blessed with immense earth-manipulation magic and unyielding fighting spirit.",
    },
    {
      name: "Gowther",
      sin: "Goat's Sin of Lust",
      title: "The Great Doll Mage",
      treasure: "Twin Bow Herritt",
      color: "from-pink-600 to-purple-800",
      badge: "Lust",
      desc: "A magical doll created by a master sorcerer seeking to understand human hearts, emotions, and memories.",
    },
    {
      name: "Merlin",
      sin: "Boar's Sin of Gluttony",
      title: "Greatest Sorceress of Britannia",
      treasure: "Morning Star Aldan",
      color: "from-purple-600 to-indigo-900",
      badge: "Gluttony",
      desc: "Daughter of Belialuin blessed by both Demon King and Supreme Deity with boundless knowledge and infinity magic.",
    },
    {
      name: "Escanor",
      sin: "Lion's Sin of Pride",
      title: "Master of the Sun",
      treasure: "Divine Axe Rhitta",
      color: "from-yellow-500 to-amber-600",
      badge: "Pride",
      desc: "A gentle tavern keeper by night who transforms into the invincible Pinnacle of All Living Creatures under the midday sun.",
    },
  ];

  return (
    <section id="about" className="w-full py-20 px-6 sm:px-10 lg:px-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#780000]/10 border border-[#780000]/30 text-[#780000] px-4 py-1.5 rounded-full text-xs font-serif font-bold uppercase tracking-widest">
            Britannia Chronicles
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 uppercase tracking-tight">
            The Seven Deadly Sins
          </h2>
          <div className="w-24 h-1 bg-[#780000] mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-zinc-700 text-sm sm:text-base leading-relaxed">
            The most formidable order of knights in the Kingdom of Liones, formed by seven brutal criminals with beast tattoos carved into their bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sins.map((item) => (
            <div
              key={item.name}
              className="group relative bg-[#fff9f0] border border-amber-900/15 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-serif font-extrabold uppercase px-2.5 py-1 rounded-md bg-[#780000] text-white">
                  {item.badge}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">Sacred Order</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif font-black text-2xl text-zinc-950 group-hover:text-[#780000] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-serif font-bold uppercase text-amber-900/90 tracking-wide">
                  {item.sin}
                </p>
                <p className="text-xs text-zinc-600 leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-amber-900/10">
                <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Sacred Treasure</p>
                <p className="text-xs font-serif font-semibold text-zinc-800">{item.treasure}</p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/10 to-red-500/10 group-hover:scale-150 transition-transform duration-500 blur-xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
