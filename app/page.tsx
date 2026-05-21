"use client"

import { useState } from "react"

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
      servicesTitle: "Creatieve oplossingen voor moderne merken.",
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
      servicesTitle: "Creative solutions for modern brands.",
      contact: "Contact Noma",
      cta: "BUILD YOUR DIGITAL PRESENCE",
    },
  }

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-black" />

      <div className="fixed top-[-300px] left-[-200px] w-[700px] h-[700px] bg-fuchsia-700/20 blur-[180px] rounded-full -z-10" />

      <div className="fixed bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-purple-700/20 blur-[180px] rounded-full -z-10" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-black/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[92px] flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-5">

            <img
              src="/logo.png"
              alt="Noma"
              className="w-[90px] lg:w-[110px] object-contain"
            />

            <div>
              <h1 className="text-4xl font-black tracking-[0.35em] leading-none">
                NOMA
              </h1>

              <p className="text-[11px] tracking-[0.45em] text-white/40 mt-2">
                DIGITAL SOLUTIONS
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="hidden lg:flex items-center gap-4">

            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300"
            >
              Diensten
            </a>

            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300"
            >
              Bekijk Portfolio
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300"
            >
              Contacteer Noma
            </a>
          </div>

          {/* LANGUAGE */}
          <div className="flex items-center gap-2 border border-white/10 rounded-full p-1 bg-white/[0.03]">

            <button
              onClick={() => setLanguage("nl")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                language === "nl"
                  ? "bg-fuchsia-600 shadow-[0_0_25px_rgba(217,70,239,0.6)]"
                  : "text-white/50"
              }`}
            >
              NL
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                language === "en"
                  ? "bg-fuchsia-600 shadow-[0_0_25px_rgba(217,70,239,0.6)]"
                  : "text-white/50"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-[160px] pb-20">

        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-16 items-start">

          {/* LEFT */}
          <div className="pt-10">

            <div className="inline-flex px-8 py-4 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-sm tracking-[0.3em] text-white/90">
              {t[language].badge}
            </div>

            <h2 className="mt-10 text-[78px] lg:text-[96px] font-black leading-[0.9] tracking-tight">
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

            <p className="mt-10 max-w-xl text-white/65 text-[21px] leading-relaxed">
              {t[language].description}
            </p>

            <div className="flex flex-wrap gap-5 mt-14">

              <button className="px-12 py-5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold text-lg shadow-[0_0_35px_rgba(217,70,239,0.45)] hover:scale-105 transition-all duration-300">
                {t[language].start}
              </button>

              <button className="px-12 py-5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-lg">
                {t[language].portfolio}
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-end">

            {/* glow */}
            <div className="absolute inset-0 bg-fuchsia-700/20 blur-[120px]" />

            {/* FOTO ALINHADA COM TOPO E BASE DOS BOTÕES */}
            <div
              className="
                relative
                rounded-[42px]
                border
                border-fuchsia-500/40
                overflow-hidden
                bg-[#120312]
                w-full
                max-w-[760px]
                mt-[6px]
              "
            >

              <img
                src="/hero.png"
                alt="Hero"
                className="
                  w-full
                  h-[690px]
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
        className="max-w-7xl mx-auto px-6 lg:px-8 py-14"
      >

        <p className="text-fuchsia-400 tracking-[0.35em] text-sm uppercase">
          Diensten
        </p>

        <h3 className="text-5xl lg:text-7xl font-black mt-6 leading-tight max-w-4xl">
          {t[language].servicesTitle}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

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
              className="rounded-[34px] border border-white/10 bg-white/[0.03] p-8 hover:border-fuchsia-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-fuchsia-400 to-purple-600 mb-8" />

              <h4 className="text-3xl font-bold">
                {item.title}
              </h4>

              <p className="mt-5 text-white/50 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-14"
      >
        <p className="text-fuchsia-400 tracking-[0.35em] text-sm uppercase">
          Portfolio
        </p>

        <h3 className="text-5xl lg:text-7xl font-black mt-6">
          Selected Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="h-[320px] rounded-[40px] bg-gradient-to-br from-fuchsia-950 to-purple-950 border border-white/10 flex items-center justify-center text-5xl font-black hover:scale-[1.02] transition-all duration-500">
            JC Cars
          </div>

          <div className="h-[320px] rounded-[40px] bg-gradient-to-br from-[#170028] to-black border border-white/10 flex items-center justify-center text-5xl font-black hover:scale-[1.02] transition-all duration-500">
            NOMA
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 lg:px-8 py-16"
      >
        <div className="rounded-[50px] border border-fuchsia-500/20 bg-gradient-to-br from-[#1a001f] to-[#0b0010] px-10 py-20 text-center">

          <h3 className="text-5xl lg:text-7xl font-black leading-tight">
            {t[language].cta}
          </h3>

          <p className="mt-8 text-white/50 max-w-2xl mx-auto text-lg">
            Modern branding, cinematic visuals and premium digital presence for ambitious businesses.
          </p>

          <button className="mt-12 px-12 py-5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold text-lg shadow-[0_0_35px_rgba(217,70,239,0.45)] hover:scale-105 transition-all duration-300">
            {t[language].contact}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 text-center text-white/30 text-sm tracking-[0.2em]">
        © 2026 NOMA DIGITAL STUDIO • BELGIUM
      </footer>
    </main>
  )
}