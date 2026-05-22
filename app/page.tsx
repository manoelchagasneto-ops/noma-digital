"use client"

import { Facebook, Instagram } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black -z-50" />

      {/* LIGHTS */}
      <div className="fixed top-[-250px] left-[-250px] w-[700px] h-[700px] bg-fuchsia-700/20 blur-[180px] rounded-full -z-40" />

      <div className="fixed top-[200px] right-[-200px] w-[600px] h-[600px] bg-purple-700/20 blur-[180px] rounded-full -z-40" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-black/40">

        <div className="max-w-[1450px] mx-auto px-8 h-[82px] flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="Noma"
              className="w-[84px]"
            />

            <div>
              <h1 className="text-[46px] font-black tracking-[0.20em] leading-none">
                NOMA
              </h1>

              <p className="text-[9px] tracking-[0.55em] text-white/35 mt-1">
                DIGITAL SOLUTIONS
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="hidden lg:flex items-center gap-3">

            <button className="px-7 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm">
              Diensten
            </button>

            <button className="px-7 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm">
              Bekijk Portfolio
            </button>

            <button className="px-7 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm">
              Contacteer Noma
            </button>
          </div>

          {/* LANGUAGE */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">

            <button className="px-5 py-2 rounded-full bg-fuchsia-600 shadow-[0_0_25px_rgba(217,70,239,0.7)] text-sm">
              NL
            </button>

            <button className="px-5 py-2 rounded-full text-sm text-white/50">
              EN
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[920px] max-w-[1450px] mx-auto px-8 pt-[140px]">

        {/* SOCIAL */}
        <div className="absolute left-[10px] top-[130px] flex gap-3 z-30">

          <button
            className="
              w-10
              h-10
              rounded-full
              bg-fuchsia-600
              flex
              items-center
              justify-center
              shadow-[0_0_25px_rgba(217,70,239,0.7)]
            "
          >
            <Facebook size={18} />
          </button>

          <button
            className="
              w-10
              h-10
              rounded-full
              bg-fuchsia-600
              flex
              items-center
              justify-center
              shadow-[0_0_25px_rgba(217,70,239,0.7)]
            "
          >
            <Instagram size={18} />
          </button>
        </div>

        {/* LEFT BLOCK */}
        <div className="absolute left-[40px] top-[200px] z-20">

          {/* BADGE */}
          <div
            className="
              inline-flex
              px-6
              py-3
              rounded-full
              border
              border-fuchsia-500/30
              bg-fuchsia-500/10
              text-[11px]
              tracking-[0.35em]
              text-white/90
            "
          >
            Creatieve Digitale Oplossingen
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-8
              text-[92px]
              leading-[0.82]
              tracking-[-0.06em]
              font-black
            "
          >
            MODERNE
            <br />

            DIGITALE
            <br />

            IDENTITEITEN
            <br />

            <span className="bg-gradient-to-r from-purple-300 to-fuchsia-500 bg-clip-text text-transparent">
              PREMIUM
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mt-8
              max-w-[520px]
              text-white/55
              text-[16px]
              leading-[1.9]
            "
          >
            Noma helpt Belgische bedrijven groeien met moderne branding,
            social media beheer en premium digitaal design.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10">

            <button
              className="
                px-9
                py-4
                rounded-full
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-600
                shadow-[0_0_40px_rgba(217,70,239,0.45)]
                font-semibold
              "
            >
              Start een Project
            </button>

            <button
              className="
                px-9
                py-4
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
              "
            >
              Bekijk Portfolio
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="
            absolute
            right-[90px]
            top-[120px]
            w-[470px]
            h-[530px]
            bg-[#24002e]
            flex
            items-center
            justify-center
          "
        >

          {/* MAIN GLOW */}
          <div className="absolute inset-0 bg-fuchsia-600/20 blur-[100px]" />

          {/* OUTER GLOW */}
          <div className="absolute -inset-6 bg-fuchsia-500/10 blur-[70px]" />

          {/* INNER FRAME */}
          <div
            className="
              relative
              w-[320px]
              h-[420px]
              rounded-[32px]
              bg-[#c86cff]
              flex
              items-center
              justify-center
              shadow-[0_0_80px_rgba(217,70,239,0.45)]
            "
          >

            {/* IMAGE */}
            <div
              className="
                w-[255px]
                h-[340px]
                rounded-[26px]
                overflow-hidden
                border
                border-black/30
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
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-[1450px] mx-auto px-8 pt-0">

        <p className="text-fuchsia-400 tracking-[0.35em] uppercase text-sm">
          DIENSTEN
        </p>

        <h3
          className="
            text-[58px]
            leading-[1.02]
            font-black
            mt-5
            max-w-[760px]
          "
        >
          Creatieve oplossingen
          <br />
          voor moderne merken.
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {[
            "Brand Identity",
            "Social Media",
            "Digital Design",
            "Accounting",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.02]
                p-7
                min-h-[260px]
              "
            >

              <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-fuchsia-400 to-purple-600 mb-7" />

              <h4 className="text-[28px] font-bold leading-[1.1]">
                {item}
              </h4>

              <p className="mt-4 text-white/45 text-[15px] leading-[1.9]">
                Premium creative solutions for ambitious brands.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="max-w-[1450px] mx-auto px-8 pt-20">

        <p className="text-fuchsia-400 tracking-[0.35em] uppercase text-sm">
          PORTFOLIO
        </p>

        <h3 className="text-[58px] leading-[1.02] font-black mt-5">
          Selected Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-7 mt-12">

          <div
            className="
              h-[290px]
              rounded-[36px]
              border
              border-white/10
              bg-gradient-to-br
              from-fuchsia-950
              to-purple-950
              flex
              items-center
              justify-center
              text-5xl
              font-black
            "
          >
            JC Cars
          </div>

          <div
            className="
              h-[290px]
              rounded-[36px]
              border
              border-white/10
              bg-gradient-to-br
              from-[#18001f]
              to-black
              flex
              items-center
              justify-center
              text-5xl
              font-black
            "
          >
            NOMA
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1050px] mx-auto px-8 pt-24 pb-28">

        <div
          className="
            rounded-[44px]
            border
            border-fuchsia-500/20
            bg-[#0b0011]
            px-10
            py-20
            text-center
          "
        >

          <h3
            className="
              text-[54px]
              leading-[1.05]
              font-black
              max-w-[760px]
              mx-auto
            "
          >
            BOUW JOUW DIGITALE
            <br />
            AANWEZIGHEID
          </h3>

          <p
            className="
              mt-6
              text-white/45
              max-w-[680px]
              mx-auto
              text-[16px]
              leading-[1.9]
            "
          >
            Modern branding, cinematic visuals and premium digital presence
            for ambitious businesses.
          </p>

          <button
            className="
              mt-10
              px-10
              py-5
              rounded-full
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-600
              shadow-[0_0_35px_rgba(217,70,239,0.45)]
              font-semibold
            "
          >
            Contacteer Noma
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="
          border-t
          border-white/5
          py-10
          text-center
          text-white/20
          text-sm
          tracking-[0.25em]
        "
      >
        © 2026 NOMA DIGITAL STUDIO • BELGIUM
      </footer>
    </main>
  )
}