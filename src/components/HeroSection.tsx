import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-14 xl:px-20 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
        <div className="order-2 lg:order-1 flex flex-col space-y-6 sm:space-y-7 shrink-0 w-full max-w-full sm:max-w-lg lg:max-w-[500px]">
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <div className="shrink-0">
              <Image
                src="/fire.png"
                alt="Fire Emblem"
                width={70}
                height={80}
                className="w-10 h-13 sm:w-13 sm:h-16 lg:w-14 lg:h-17 object-contain"
              />
            </div>
            <h1 className="flex-1 font-serif font-black text-[26px] xs:text-[30px] sm:text-4xl lg:text-[46px] text-black uppercase tracking-tight leading-tight">
              Nanatsu No Taiza
            </h1>
          </div>

          <div className="bg-[#780000] text-white p-6 sm:p-8 rounded-[26px] shadow-2xl shadow-red-950/25 w-full">
            <p className="font-sans font-medium text-sm sm:text-base lg:text-[17px] leading-[1.7] tracking-normal text-white">
              The story centers around Princess Elizabeth Liones, who sets out to
              track down the members of the Seven Deadly Sins in order to save the
              kingdom from the grasp of the Holy Knights, who have fallen under
              evil influences.
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 pt-1 w-full">
            <div className="shrink-0">
              <Image
                src="/tress.png"
                alt="Nanatsu Forest Tree"
                width={120}
                height={120}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-26 lg:h-26 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </div>

            <button
              type="button"
              className="flex-1 w-full bg-[#037525] hover:bg-[#02601e] active:scale-95 text-white font-serif font-bold text-lg sm:text-2xl lg:text-[26px] py-4 sm:py-4.5 px-4 sm:px-8 rounded-[20px] shadow-lg shadow-emerald-950/25 transition-all duration-200 uppercase tracking-wider cursor-pointer text-center whitespace-nowrap"
            >
              Coming Soon
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex-1 flex items-center justify-center lg:justify-end shrink-0 w-full pt-4 sm:pt-6 lg:pt-0">
          <div className="relative flex items-center justify-center w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[620px] xl:max-w-[660px]">
            <Image
              src="/hero-img.png"
              alt="Nanatsu no Taizai - The Seven Deadly Sins"
              width={750}
              height={750}
              priority
              className="w-full h-auto max-h-[46vh] sm:max-h-[54vh] lg:max-h-[78vh] xl:max-h-[82vh] object-contain drop-shadow-2xl lg:drop-shadow-none hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
