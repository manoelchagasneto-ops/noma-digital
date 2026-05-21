"use client"

import { useState } from "react"
import { Facebook, Instagram } from "lucide-react"

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
    <main className="bg-[#050505] text-white overflow-hidden min-h-screen">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-black" />

      {/* TOP GLOW */}
      <div className="fixed top-[-350px] left-[-250px] w-[700px] h-[700px] rounded-full bg-fuchsia-700/20 blur-[180px] -z-10" />

      {/* BOTTOM GLOW */}
      <div className="fixed bottom-[-350px] right-[-250px] w-[700px] h-[700px] rounded-full bg-purple-700/20 blur-[180px] -z-10" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/35 border-b border-white/5">

        <div className="max-w-[1500px] mx-auto px-8 h-[84px] flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="Noma"
              className="w-[78px] object-contain"
            />

            <div>
              <h1 className="text-[44px] font-black tracking-[0.24em] leading-none">
                NOMA
              </h1>

              <p className="text-[9px] tracking-[0.60em] text-white/35 mt-1">
                DIGITAL SOLUTIONS
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="hidden lg:flex items-center gap-3">

            <a
              href="#services"
              className="px-7 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-sm"
            >
              Diensten
            </a>

            <a
              href="#portfolio"
              className="px-7 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-sm"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-sm"
            >
              Contact
            </a>
          </div>

          {/* LANGUAGE */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">

            <button
              onClick={() => setLanguage("nl")}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                language === "nl"
                  ? "bg-fuchsia-600 shadow-[0_0_25px_rgba(217,70,239,0.7)]"
                  : "text-white/50"
              }`}
            >
              NL
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
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
      <section className="max-w-[1500px] mx-auto px-8 pt-[125px]">

        <div className="grid lg:grid-cols-[1fr_0.78fr] gap-[5px] items-start">

          {/* LEFT */}
          <div className="max-w-[760px] pt-[25px]">

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 mb-6">

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-fuchsia-600
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_25px_rgba(217,70,239,0.55)]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <Facebook size={17} />
              </a>

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-fuchsia-600
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_25px_rgba(217,70,239,0.55)]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <Instagram size={17} />
              </a>
            </div>

            {/* BADGE */}
            <div className="inline-flex px-6 py-3 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-[11px] tracking-[0.35em] text-white/90">
              {t[language].badge}
            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-[74px] xl:text-[90px] leading-[0.83] tracking-[-0.06em] font-black">

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
            <p className="mt-7 max-w-[570px] text-white/55 text-[17px] leading-[1.9]">
              {t[language].description}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-9">

              <button className="px-9 py-4 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_40px_rgba(217,70,239,0.45)] hover:scale-105 transition-all duration-300 font-semibold">
                {t[language].start}
              </button>

              <button className="px-9 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300">
                {t[language].portfolio}
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-end">

            {/* MAIN IMAGE CONTAINER */}
            <div className="relative mt-[140px]">

              {/* STRONG GLOW */}
              <div className="absolute inset-0 bg-fuchsia-600/30 blur-[90px] scale-[1.08]" />

              {/* SECONDARY GLOW */}
              <div className="absolute -inset-6 rounded-[45px] border border-fuchsia-500/20" />

              {/* IMAGE BOX */}
              <div
                className="
                  relative
                  w-[520px]
                  h-[500px]
                  rounded-[42px]
                  overflow-hidden
                  border
                  border-fuchsia-500/30
                  bg-[#120312]
                  shadow-[0_0_70px_rgba(217,70,239,0.28)]
                "
              >

                <img
                  src="/hero.png"
                  alt="Hero"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                    scale-[1.03]
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-[1500px] mx-auto px-8 pt-24"
      >

        <p className="text-fuchsia-400 tracking-[0.35em] uppercase text-sm">
          Diensten
        </p>

        <h3 className="text-[56px] leading-[1.02] font-black mt-5 max-w-[820px]">
          {t[language].servicesTitle}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

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
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.02]
                p-7
                min-h-[260px]
                hover:border-fuchsia-500/30
                transition-all
                duration-300
              "
            >

              <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-fuchsia-400 to-purple-600 mb-7" />

              <h4 className="text-[28px] font-bold leading-[1.1]">
                {item.title}
              </h4>

              <p className="mt-4 text-white/45 text-[15px] leading-[1.9]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="max-w-[1500px] mx-auto px-8 pt-24"
      >

        <p className="text-fuchsia-400 tracking-[0.35em] uppercase text-sm">
          Portfolio
        </p>

        <h3 className="text-[56px] leading-[1.02] font-black mt-5">
          Selected Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-7 mt-12">

          <div className="h-[300px] rounded-[36px] border border-white/10 bg-gradient-to-br from-fuchsia-950 to-purple-950 flex items-center justify-center text-5xl font-black">
            JC Cars
          </div>

          <div className="h-[300px] rounded-[36px] border border-white/10 bg-gradient-to-br from-[#18001f] to-black flex items-center justify-center text-5xl font-black">
            NOMA
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="max-w-[1100px] mx-auto px-8 pt-24 pb-28"
      >

        <div className="rounded-[44px] border border-fuchsia-500/20 bg-gradient-to-br from-[#130014] to-[#050008] px-10 py-20 text-center">

          <h3 className="text-[56px] leading-[1.02] font-black max-w-[760px] mx-auto">
            {t[language].cta}
          </h3>

          <p className="mt-6 text-white/45 max-w-[700px] mx-auto text-[17px] leading-[1.9]">
            Modern branding, cinematic visuals and premium digital presence for ambitious businesses.
          </p>

          <button className="mt-11 px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 font-semibold text-lg shadow-[0_0_35px_rgba(217,70,239,0.45)] hover:scale-105 transition-all duration-300">
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