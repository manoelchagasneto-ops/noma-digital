"use client"

import { useEffect, useState } from "react"

type Language = "nl" | "en"

export default function Home() {

  const [language, setLanguage] = useState<Language>("nl")
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [scroll, setScroll] = useState(0)

  const t = {
    nl: {
      badge: "Creatieve Digitale Oplossingen",
      title1: "MODERNE",
      title2: "DIGITALE",
      title3: "IDENTITEITEN",
      premium: " PREMIUM",

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
      premium: " PREMIUM",

      description:
        "Noma helps businesses grow with modern branding, social media management and premium digital design.",

      start: "Start a Project",
      portfolio: "View Portfolio",
      services: "Services",
      servicesTitle: "Creative solutions for modern brands.",
      contact: "Contact Noma",
      cta: "BUILD YOUR DIGITAL PRESENCE",
    },
  }

  /* CURSOR LIGHT */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)
  }, [])

  /* SCROLL */
  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight

      setScroll((window.scrollY / total) * 100)
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-20 bg-black" />

      <div className="fixed top-[-250px] left-[-200px] w-[700px] h-[700px] bg-fuchsia-700/20 blur-[180px] rounded-full -z-10" />

      <div className="fixed bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-purple-700/20 blur-[180px] rounded-full -z-10" />

      {/* CURSOR LIGHT */}
      <div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[130px] z-0 transition-all duration-300"
        style={{
          transform: `translate(${cursor.x - 200}px, ${cursor.y - 200}px)`,
        }}
      />

      {/* PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/10 z-[999]">
        <div
          className="h-full bg-gradient-to-r from-fuchsia-500 to-purple-500"
          style={{ width: `${scroll}%` }}
        />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-5">

            <img
              src="/logo.png"
              alt="Noma"
              className="w-28 object-contain"
            />

            <div>
              <h1 className="text-5xl font-black tracking-[0.25em] leading-none">
                NOMA
              </h1>

              <p className="text-sm tracking-[0.5em] text-white/40 mt-2">
                DIGITAL STUDIO
              </p>
            </div>

          </div>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-5">

            <a
              href="#services"
              className="px-7 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/80"
            >
              {t[language].services}
            </a>

            <a
              href="#portfolio"
              className="px-7 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/80"
            >
              {t[language].portfolio}
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/80"
            >
              {t[language].contact}
            </a>

          </nav>

          {/* LANG */}
          <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full p-1">

            <button
              onClick={() => setLanguage("nl")}
              className={`px-6 py-3 rounded-full transition ${
                language === "nl"
                  ? "bg-gradient-to-r from-fuchsia-500 to-purple-600"
                  : "text-white/60"
              }`}
            >
              NL
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-6 py-3 rounded-full transition ${
                language === "en"
                  ? "bg-gradient-to-r from-fuchsia-500 to-purple-600"
                  : "text-white/60"
              }`}
            >
              EN
            </button>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-40">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT */}
          <div>

            <div className="inline-flex px-6 py-3 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-200 tracking-[0.2em] text-sm mb-10">
              {t[language].badge}
            </div>

            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] max-w-xl">

              {t[language].title1}

              <br />

              {t[language].title2}

              <br />

              {t[language].title3}

              <span className="bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                {t[language].premium}
              </span>

            </h2>

            <p className="mt-10 text-xl text-white/60 leading-relaxed max-w-xl">
              {t[language].description}
            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 font-semibold text-lg hover:scale-105 transition shadow-[0_0_40px_rgba(192,38,211,0.4)]">
                {t[language].start}
              </button>

              <button className="px-10 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-lg">
                {t[language].portfolio}
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            <div className="absolute w-[650px] h-[650px] rounded-full bg-purple-600/20 blur-[180px]" />

            <div className="relative w-full max-w-[540px] h-[700px] rounded-[50px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl overflow-hidden shadow-[0_0_100px_rgba(168,85,247,0.12)] flex items-end justify-center">

              <img
                src="/hero.png"
                alt="Hero"
                className="h-[92%] object-contain object-bottom relative z-10 hover:scale-[1.02] transition duration-700"
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-8 py-32"
      >

        <div className="mb-20">

          <p className="text-purple-400 tracking-[0.3em] uppercase text-sm">
            {t[language].services}
          </p>

          <h3 className="text-5xl lg:text-6xl font-black mt-6 max-w-3xl">
            {t[language].servicesTitle}
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

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
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 hover:-translate-y-2 transition duration-500"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 mb-8" />

              <h4 className="text-3xl font-bold">
                {item.title}
              </h4>

              <p className="mt-6 text-white/60 leading-relaxed">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="max-w-7xl mx-auto px-8 py-32"
      >

        <div className="mb-20">

          <p className="text-purple-400 tracking-[0.3em] uppercase text-sm">
            Portfolio
          </p>

          <h3 className="text-5xl lg:text-6xl font-black mt-6">
            Selected Projects
          </h3>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] overflow-hidden">

            <div className="h-[420px] bg-gradient-to-br from-fuchsia-600/20 to-purple-700/20 flex items-center justify-center text-5xl font-black">
              JC Cars
            </div>

          </div>

          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] overflow-hidden">

            <div className="h-[420px] bg-gradient-to-br from-purple-600/20 to-black flex items-center justify-center text-5xl font-black">
              NOMA
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-8 py-32"
      >

        <div className="rounded-[50px] border border-white/10 bg-gradient-to-br from-fuchsia-600/10 to-purple-700/10 p-16 text-center">

          <h3 className="text-5xl lg:text-6xl font-black leading-tight">
            {t[language].cta}
          </h3>

          <p className="mt-8 text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Modern branding, cinematic visuals and premium digital presence for ambitious businesses.
          </p>

          <button className="mt-12 px-10 py-5 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-lg font-semibold hover:scale-105 transition">
            {t[language].contact}
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-white/40 text-sm">
        © 2026 NOMA DIGITAL STUDIO • BELGIUM
      </footer>

    </main>
  )
}