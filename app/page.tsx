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
      services: "Diensten",
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
      services: "Services",
      servicesTitle: "Creative solutions for modern brands.",
      contact: "Contact Noma",
      cta: "BUILD YOUR DIGITAL PRESENCE",
    },
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-purple-700/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-fuchsia-700/10 blur-[180px] rounded-full" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-5">

            <img
              src="/logo.png"
              alt="Noma Logo"
              className="w-20 lg:w-24 object-contain"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl font-black tracking-[0.18em] leading-none">
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
              className="px-7 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm"
            >
              {t[language].services}
            </a>

            <a
              href="#portfolio"
              className="px-7 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm"
            >
              {t[language].portfolio}
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm"
            >
              {t[language].contact}
            </a>

          </div>

          {/* LANGUAGE */}
          <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full p-1">

            <button
              onClick={() => setLanguage("nl")}
              className={`px-5 py-3 rounded-full text-sm transition ${
                language === "nl"
                  ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  : "text-white/50"
              }`}
            >
              NL
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-5 py-3 rounded-full text-sm transition ${
                language === "en"
                  ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  : "text-white/50"
              }`}
            >
              EN
            </button>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center px-6 py-3 rounded-full border border-purple-500/20 bg-purple-500/10 text-sm tracking-[0.25em] text-purple-200 mb-10">
              {t[language].badge}
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">

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

            <p className="mt-10 text-lg text-white/60 leading-relaxed max-w-xl">
              {t[language].description}
            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 font-semibold shadow-[0_0_40px_rgba(168,85,247,0.45)] hover:scale-105 transition">
                {t[language].start}
              </button>

              <button className="px-10 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
                {t[language].portfolio}
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* LIGHT */}
            <div className="absolute inset-0 bg-purple-700/20 blur-[140px] rounded-full" />

            {/* IMAGE */}
            <div className="relative w-full max-w-[760px]">

              <img
                src="/hero.png"
                alt="Noma Hero"
                className="
                  w-full
                  h-auto
                  object-cover
                  rounded-[38px]
                  border
                  border-white/10
                  shadow-[0_0_80px_rgba(168,85,247,0.18)]
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24"
      >

        <p className="text-purple-400 uppercase tracking-[0.35em] text-sm mb-6">
          {t[language].services}
        </p>

        <h3 className="text-4xl lg:text-6xl font-black leading-tight max-w-4xl mb-20">
          {t[language].servicesTitle}
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

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
              desc: "Professional accounting solutions for modern businesses.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 hover:-translate-y-2 transition duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 mb-8" />

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
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24"
      >

        <p className="text-purple-400 uppercase tracking-[0.35em] text-sm mb-6">
          Portfolio
        </p>

        <h3 className="text-4xl lg:text-6xl font-black mb-16">
          Selected Projects
        </h3>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="group min-h-[320px] rounded-[40px] bg-gradient-to-br from-purple-900/50 to-black border border-white/10 flex items-center justify-center text-5xl font-black hover:scale-[1.02] transition">

            JC Cars

          </div>

          <div className="group min-h-[320px] rounded-[40px] bg-gradient-to-br from-fuchsia-900/20 to-black border border-white/10 flex items-center justify-center text-5xl font-black hover:scale-[1.02] transition">

            NOMA

          </div>

        </div>

      </section>

      {/* CTA */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 lg:px-8 py-24"
      >

        <div className="rounded-[48px] border border-white/10 bg-gradient-to-br from-purple-900/40 to-black p-10 lg:p-20 text-center">

          <h3 className="text-4xl lg:text-6xl font-black leading-tight">
            {t[language].cta}
          </h3>

          <p className="mt-8 text-white/50 max-w-2xl mx-auto leading-relaxed">
            Modern branding, cinematic visuals and premium digital presence for ambitious businesses.
          </p>

          <button className="mt-10 px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 font-semibold shadow-[0_0_40px_rgba(168,85,247,0.45)] hover:scale-105 transition">

            {t[language].contact}

          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 text-center text-white/30 text-sm">
        © 2026 NOMA DIGITAL STUDIO • BELGIUM
      </footer>

    </main>
  )
}