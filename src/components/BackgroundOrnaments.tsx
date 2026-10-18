export default function BackgroundOrnaments() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none"
    >
      <div className="absolute top-[20%] right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-amber-400/15 via-orange-300/10 to-transparent blur-3xl" />
      <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-red-500/10 via-amber-200/10 to-transparent blur-3xl" />

      <svg
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[720px] h-[720px] text-[#780000]/[0.055] animate-[spin_160s_linear_infinite]"
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="200" cy="200" r="190" strokeWidth="1" strokeDasharray="6 4" />
        <circle cx="200" cy="200" r="182" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="165" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="200" cy="200" r="145" strokeWidth="1.2" />

        <path
          d="M200 10 L212 188 L390 200 L212 212 L200 390 L188 212 L10 200 L188 188 Z"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.02"
        />
        <path
          d="M200 45 L208 192 L355 200 L208 208 L200 355 L192 208 L45 200 L192 192 Z"
          strokeWidth="0.8"
          strokeDasharray="4 4"
        />

        <path
          d="M66 66 L192 192 L334 334 M334 66 L192 192 L66 334"
          strokeWidth="0.8"
          strokeDasharray="8 6"
        />

        <circle cx="200" cy="200" r="105" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="200" cy="200" r="92" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="65" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="35" strokeWidth="1" strokeDasharray="2 2" />
      </svg>

      <svg
        className="absolute -left-36 top-[15%] w-[460px] h-[460px] text-amber-700/[0.045] animate-[spin_200s_linear_infinite_reverse]"
        viewBox="0 0 300 300"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="150" cy="150" r="140" strokeWidth="1.2" strokeDasharray="6 4" />
        <circle cx="150" cy="150" r="125" strokeWidth="1" />
        <circle cx="150" cy="150" r="90" strokeWidth="0.8" strokeDasharray="4 4" />
        <polygon
          points="150,25 258,212 42,212"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.015"
        />
        <polygon
          points="150,275 42,88 258,88"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.015"
        />
        <circle cx="150" cy="150" r="45" strokeWidth="1" />
      </svg>

      <svg
        className="absolute bottom-2 left-2 w-32 h-32 text-[#780000]/[0.08]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M0,100 L0,85 C15,85 25,80 30,70 C35,60 35,45 30,35 C25,25 15,20 0,20 L0,5 C20,5 35,12 45,25 C55,38 55,62 45,75 C35,88 20,95 0,100 Z" />
        <circle cx="12" cy="88" r="3" />
        <circle cx="22" cy="78" r="2.5" />
        <circle cx="30" cy="65" r="2" />
        <path d="M10,90 Q50,50 90,90 Q50,85 10,90 Z" fillOpacity="0.5" />
      </svg>

      <svg
        className="absolute bottom-2 right-2 w-32 h-32 text-[#780000]/[0.08] -scale-x-100"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M0,100 L0,85 C15,85 25,80 30,70 C35,60 35,45 30,35 C25,25 15,20 0,20 L0,5 C20,5 35,12 45,25 C55,38 55,62 45,75 C35,88 20,95 0,100 Z" />
        <circle cx="12" cy="88" r="3" />
        <circle cx="22" cy="78" r="2.5" />
        <circle cx="30" cy="65" r="2" />
        <path d="M10,90 Q50,50 90,90 Q50,85 10,90 Z" fillOpacity="0.5" />
      </svg>

      <div className="absolute top-[30%] left-[45%] w-2 h-2 rounded-full bg-amber-500/20 blur-[0.5px] animate-pulse" />
      <div className="absolute top-[65%] left-[25%] w-2.5 h-2.5 rounded-full bg-red-600/15 blur-[0.5px] animate-pulse delay-700" />
      <div className="absolute top-[18%] left-[70%] w-1.5 h-1.5 rounded-full bg-amber-400/25 blur-[0.5px] animate-pulse delay-300" />
      <div className="absolute bottom-[25%] right-[35%] w-2 h-2 rounded-full bg-amber-600/20 blur-[0.5px] animate-pulse delay-500" />
    </div>
  );
}
