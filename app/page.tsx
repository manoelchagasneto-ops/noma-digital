"use client"

import Image from "next/image"
import {
  Instagram,
  Facebook,
} from "lucide-react"

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden min-h-screen relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4c0070_0%,transparent_35%)] opacity-40" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-700/10 blur-[140px] rounded-full" />

      {/* TOP BORDER */}
      <div className="absolute top-[92px] left-0 w-full h-[1px] bg-white/10" />

      {/* NAVBAR */}
      <header className="relative z-20 max-w-[1400px] mx-auto px-8 pt-7">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-5">

            <Image
              src="/Logo.png"
              alt="Noma"
              width={95}
              height={95}
              className="object-contain"
              priority
            />

            <div>
              <h1 className="text-[54px] font-black tracking-[0.35em] leading-none">
                NOMA
              </h1>

              <p className="text-[12px] tracking-[0.45em] text-white/40 mt-2">
                DIGITAL SOLUTIONS
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-5">

            <button className="px-9 py-4 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition">
              Diensten
            </button>

            <button className="px-9 py-4 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition">
              Bekijk Portfolio
            </button>

            <button className="px-9 py-4 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition">
              Contacteer Noma
            </button>

            {/* LANGUAGE */}
            <div className="ml-2 flex items-center bg-white/[0.03] border border-white/10 rounded-full p-1">

              <button className="w-[54px] h-[54px] rounded-full bg-fuchsia-600 shadow-[0_0_30px_rgba(217,70,239,0.7)] font-semibold">
                NL
              </button>

              <button className="w-[54px] h-[54px] rounded-full text-white/45">
                EN
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-8 pt-14 pb-28">

        {/* SOCIALS */}
        <div className="flex gap-3 ml-[6px] mb-10">

          <a
            href="#"
            className="w-12 h-12 rounded-full bg-fuchsia-600/20 border border-fuchsia-500/40 flex items-center justify-center shadow-[0_0_25px_rgba(217,70,239,0.55)] hover:scale-110 transition"
          >
            <Facebook size={22} />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full bg-fuchsia-600/20 border border-fuchsia-500/40 flex items-center justify-center shadow-[0_0_25px_rgba(217,70,239,0.55)] hover:scale-110 transition"
          >
            <Instagram size={22} />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            {/* TAG */}
            <div className="inline-flex items-center px-8 py-4 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 text-[12px] tracking-[0.35em] text-white/85 mb-10">
              Creatieve Digitale Oplossingen
            </div>

            {/* TITLE */}
            <h2 className="text-[92px] leading-[0.88] font-black uppercase max-w-[700px]">
              Moderne
              <br />
              Digitale
              <br />
              Identiteiten
              <br />

              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                Premium
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-10 text-[22px] text-white/60 leading-[1.7] max-w-[720px]">
              Noma helpt Belgische bedrijven groeien met moderne branding,
              social media beheer en premium digitaal design.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-6 mt-12">

              <button className="px-11 py-6 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-bold text-[18px] shadow-[0_0_45px_rgba(217,70,239,0.55)] hover:scale-[1.03] transition">
                Start een Project
              </button>

              <button className="px-11 py-6 rounded-full border border-white/10 bg-white/[0.02] text-white font-medium text-[18px] hover:bg-white/[0.05] transition">
                Bekijk Portfolio
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            {/* OUTER GLOW */}
            <div className="absolute w-[640px] h-[640px] rounded-[70px] bg-fuchsia-600/25 blur-[120px]" />

            {/* FRAME */}
            <div className="relative p-7 rounded-[56px] bg-gradient-to-br from-fuchsia-300 to-fuchsia-700 shadow-[0_0_90px_rgba(217,70,239,0.6)]">

              {/* INNER FRAME */}
              <div className="rounded-[44px] overflow-hidden border border-white/10 bg-black">

                <Image
                  src="/hero.png"
                  alt="Hero"
                  width={620}
                  height={760}
                  priority
                  className="object-cover w-[620px] h-[760px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}