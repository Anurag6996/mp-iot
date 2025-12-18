import React from "react";

function TalkButton() {
  return (
    <div className="fixed right-5 bottom-5 z-50">
      <button
        className="flex items-center gap-2.5 bg-black text-white px-3 py-2 rounded-full shadow-lg hover:scale-105 transform transition text-xs"
        aria-label="Talk with us"
      >
        <span className="p-1 bg-emerald-500 rounded-full inline-flex">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2h-1l-3 3v-3H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8z"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="leading-none">Talk with Us</span>
      </button>
    </div>
  );
}

function RightBackgroundSVG() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-60"
      viewBox="0 0 800 1000"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="bgGrad2" x1="0" x2="1">
          <stop offset="0" stopColor="#072e4a" />
          <stop offset="1" stopColor="#052737" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bgGrad2)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <RightBackgroundSVG />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-slate-50/85 to-white/70" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-6 md:py-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* LEFT */}
          <div className="z-20">
            <div className="mb-3">
              <span className="inline-flex items-center text-[11px] md:text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
                SmartGuard — Smart Safety for Kids & Patients
              </span>
            </div>

            <h1 className="text-slate-900 font-extrabold leading-tight tracking-tight text-[24px] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              Monitor your<br />
              loved ones<br />
              anywhere, anytime<br />
            </h1>

            <p className="mt-2 text-slate-600 max-w-xl text-sm md:text-base leading-relaxed">
              Advanced ESP32-based monitoring device with real-time alerts,
              motion detection, and secure cloud connectivity for complete peace
              of mind.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full shadow text-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3v12"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 11l4 4 4-4"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Get the App
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-full shadow-sm hover:shadow transition text-sm"
              >
                Watch Demo
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-5 text-slate-600 text-sm">
              {[
                "Real-time monitoring",
                "Instant alerts",
                "Cloud dashboard",
              ].map((text, i) => (
                <div className="flex items-center gap-2" key={i}>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#059669"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Image area */}
          <div className="z-20 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[420px] flex items-center">
              <div className="rounded-[18px] bg-white shadow-[0_20px_40px_rgba(2,6,23,0.10)] overflow-hidden w-full">
                <img
                  src="public/aboutuspic/A-3.jpg"
                  alt="SmartGuard Preview"
                  className="w-full h-[300px] md:h-[310px] object-cover object-center"
                />
              </div>
              <div className="absolute -right-6 -bottom- w-32 h-32 bg-gradient-to-br from-emerald-100 to-transparent rounded-full opacity-70" />
            </div>
          </div>
        </div>
      </div>
      <TalkButton />
    </section>
  );
}
