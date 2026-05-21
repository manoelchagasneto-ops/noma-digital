"use client"

import { useState } from "react"
import { Instagram, Facebook } from "lucide-react"

type Language = "nl" | "en"

export default function Home() {
  const [language, setLanguage] = useState<Language>("nl")

  const t = {
    nl: {
      badge: "Creatieve Digitale Oplossingen",

      title1: "MODERNE",
      title2: "DIGITALE",
      title3: "IDENTITEITEN",
      premium: "PREMIUM",

      description:
        "Noma helpt Belgische bedrijven groeien met moderne branding, social media beheer en premium digitaal design.",

      start: "Start een Project",
      portfolio: "Bekijk Portfolio",

      servicesTitle:
        "Creatieve oplossingen voor moderne merken.",

      contact: "Contacteer Noma",

      cta: "BOUW JOUW DIGITALE AANWEZIGHEID",
    },

    en: {
      badge: "Creative Digital Solutions",

      title1: "MODERN",
      title2: "DIGITAL",
      title3: "IDENTITIES",
      premium: "PREMIUM",

      description:
        "Noma helps Belgian businesses grow with modern branding, social media management and premium digital design.",

      start: "Start a Project",
      portfolio: "View Portfolio",

      servicesTitle:
        "Creative solutions for modern brands.",

      contact: "Contact Noma",

      cta: "BUILD YOUR DIGITAL PRESENCE",
    },
  }

  return (
    <main className="bg-black text-white overflow-hidden min-h-screen">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-black" />

      <div className="fixed top-[-250px] left-[-250px] w-[700px] h-[700px] bg-fuchsia-700/20 blur-[180px] rounded-full -z-10" />

      <div className="fixed bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-purple-700/20 blur-[180px] rounded-full -z-10" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-black/60">

        <div className="max-w-[1500px] mx-auto px-8 h-[92px] flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-5">

            <img
              src="/logo.png"
              alt="Noma"
              className="w-[95px] object-contain"
            />

            <div>
              <h1 className="text-[56px] font-black tracking-[0.20em] leading-none">
                NOMA
              </h1>

              <p className="text-[11px] tracking-[0.55em] text-white/40 mt-1">
                DIGITAL SOLUTIONS
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="hidden lg:flex items-center gap-4">

            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-sm"
            >
              Diensten
            </a>

            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-sm"
            >
              Bekijk Portfolio
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-sm"
            >
              Contacteer Noma
            </a>
          </div>

          {/* LANG */}
          <div className="flex items-center gap-2 border border-white/10 rounded-full p-1 bg-white/[0.03]">

            <button
              onClick={() => setLanguage("nl")}
              className={`px-5 py-3 rounded-full text-sm transition-all duration-300 ${
                language === "nl"
                  ? "bg-fuchsia-600 shadow-[0_0_25px_rgba(217,70,239,0.7)]"
                  : "text-white/50"
              }`}
            >
              NL
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-5 py-3 rounded-full text-sm transition-all duration-300 ${
                language === "en"
                  ? "bg-fuchsia-600 shadow-[0_0_25px_rgba(217,70,239,0.7)]"
                  : "text-white/50"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-[1500px] mx-auto px-8 pt-[120px]">

        <div className="grid lg:grid-cols-[1fr_0.92fr] gap-[40px] items-start">

          {/* LEFT */}
          <div className="pt-[10px]">

            {/* SOCIAL */}
            <div className="flex items-center gap-3 mb-5">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-fuchsia-600 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.6)]"
              >
                <Facebook size={17} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-fuchsia-600 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.6)]"
              >
                <Instagram size={17} />
              </a>
            </div>

            {/* BADGE */}
            <div className="inline-flex px-7 py-3 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-[12px] tracking-[0.30em] text-white/90">
              {t[language].badge}
            </div>

            {/* TITLE */}
            <h2 className="mt-7 text-[88px] leading-[0.90] font-black tracking-[-0.05em]">

              {t[language].title1}
              <br />

              {t[language].title2}
              <br />

              {t[language].title3}
              <br />

              <span className="bg-gradient-to-r from-purple-300 to-fuchsia-500 bg-clip-text text-transparent">
                {t[language].premium}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[650px] text-white/65 text-[18px] leading-[1.8]">
              {t[language].description}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-10">

              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-[0_0_35px_rgba(217,70,239,0.45)] hover:scale-105 transition-all duration-300">
                {t[language].start}
              </button>

              <button className="px-10 py-5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300">
                {t[language].portfolio}
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-end">

            <div className="absolute inset-0 bg-fuchsia-700/20 blur-[120px]" />

            <div
              className="
                relative
                mt-[60px]
                rounded-[42px]
                border
                border-fuchsia-500/40
                overflow-hidden
                bg-[#120312]
                w-full
                max-w-[640px]
                shadow-[0_0_60px_rgba(217,70,239,0.35)]
              "
            >

              <img
                src="/hero.png"
                alt="Hero"
                className="
                  w-full
                  h-[620px]
                  object-cover
                  object-center
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-[1500px] mx-auto px-8 pt-16"
      >

        <p className="text-fuchsia-400 tracking-[0.35em] text-sm uppercase">
          Diensten
        </p>

        <h3 className="text-[72px] font-black mt-5 leading-[1.05] max-w-[900px]">
          {t[language].servicesTitle}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">

          {[
            {
              title: "Brand Identity",
              desc: "Modern visual systems designed for ambitious brands.",
            },

            {
              title: "Social Media",
              desc: "Premium content strategy focused on engagement and growth.",
            },

            {
              title: "Digital Design",
              desc: "Ads, visuals and creative direction with cinematic impact.",
            },

            {
              title: "Accounting",
              desc: "Professional accounting support for modern companies.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-[34px]
                border
                border-white/10
                bg-white/[0.02]
                p-8
                min-h-[300px]
                hover:border-fuchsia-500/30
                transition-all
                duration-300
              "
            >

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-fuchsia-400 to-purple-600 mb-8" />

              <h4 className="text-[34px] font-bold">
                {item.title}
              </h4>

              <p className="mt-5 text-white/45 text-[17px] leading-[1.9]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="max-w-[1500px] mx-auto px-8 pt-20"
      >

        <p className="text-fuchsia-400 tracking-[0.35em] text-sm uppercase">
          Portfolio
        </p>

        <h3 className="text-[72px] font-black mt-5">
          Selected Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="h-[320px] rounded-[40px] bg-gradient-to-br from-fuchsia-950 to-purple-950 border border-white/10 flex items-center justify-center text-6xl font-black">
            JC Cars
          </div>

          <div className="h-[320px] rounded-[40px] bg-gradient-to-br from-[#170028] to-black border border-white/10 flex items-center justify-center text-6xl font-black">
            NOMA
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="max-w-[1200px] mx-auto px-8 pt-24 pb-28"
      >

        <div className="rounded-[50px] border border-fuchsia-500/20 bg-gradient-to-br from-[#110016] to-[#050008] px-12 py-24 text-center">

          <h3 className="text-[72px] leading-[1.05] font-black max-w-[900px] mx-auto">
            {t[language].cta}
          </h3>

          <p className="mt-7 text-white/45 max-w-[760px] mx-auto text-lg leading-[1.9]">
            Modern branding, cinematic visuals and premium digital presence for ambitious businesses.
          </p>

          <button className="mt-12 px-11 py-5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold text-lg shadow-[0_0_35px_rgba(217,70,239,0.45)] hover:scale-105 transition-all duration-300">
            {t[language].contact}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 text-center text-white/25 text-sm tracking-[0.25em]">
        © 2026 NOMA DIGITAL STUDIO • BELGIUM
      </footer>
    </main>
  )
}