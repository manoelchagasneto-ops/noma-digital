"use client"

import { useEffect, useState } from "react"
import {
  Facebook,
  Instagram,
  ArrowRight,
  Menu,
} from "lucide-react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-fuchsia-700/20 blur-[120px] transition-all duration-300"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />

        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-700/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-700/10 blur-[150px]" />
      </div>

      {/* HEADER */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-700 flex items-center justify-center shadow-[0_0_40px_rgba(217,70,239,0.5)]">
              <span className="text-3xl font-black">N</span>
            </div>

            <div>
              <h1 className="text-4xl font-black tracking-widest">
                NOMA
              </h1>

              <p className="text-xs tracking-[0.4em] text-white/50 uppercase">
                Digital Solutions
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-4">
            {[
              "Diensten",
              "Bekijk Portfolio",
              "Contacteer Noma",
            ].map((item) => (
              <button
                key={item}
                className="px-7 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-fuchsia-600/20 hover:border-fuchsia-500/50 transition-all duration-300 text-sm"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* LANGUAGE */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1">
            <button className="px-5 py-2 rounded-full bg-fuchsia-600 text-sm font-semibold shadow-[0_0_20px_rgba(217,70,239,0.8)]">
              NL
            </button>

            <button className="px-5 py-2 rounded-full text-sm text-white/50">
              EN
            </button>
          </div>

          <button className="lg:hidden">
            <Menu />
          </button>
        </div>
      </header>

      {/* HERO */}
      
            <div className="inline-flex px-5 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-sm mb-8 tracking-widest uppercase">
              Creative Digitale Oplossingen
            </div>

            <h2 className="text-6xl md:text-7xl font-black leading-[0.95] mb-6">
              MODERNE <br />
              DIGITALE <br />
              IDENTITEITEN <br />

              <span className="bg-gradient-to-r from-fuchsia-500 to-violet-400 bg-clip-text text-transparent">
                PREMIUM
              </span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
              Noma helpt Belgische bedrijven groeien met moderne branding,
              social media beheer en premium digital design.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 font-semibold shadow-[0_0_40px_rgba(217,70,239,0.6)] hover:scale-105 transition">
                Start een Project
              </button>

              <button className="px-10 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold">
                Bekijk Portfolio
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute w-[500px] h-[500px] rounded-[60px] bg-fuchsia-600/30 blur-[100px]" />

            <div className="relative p-5 rounded-[50px] bg-gradient-to-br from-fuchsia-400 to-violet-700 shadow-[0_0_100px_rgba(192,38,211,0.7)]">
              <div className="overflow-hidden rounded-[40px] border border-white/10">
                <img
                  src="/hero.jpg"
                  alt="Hero"
                  className="w-[500px] h-[620px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-fuchsia-400 tracking-[0.4em] uppercase text-sm mb-6">
            Diensten
          </p>

          <h3 className="text-5xl md:text-6xl font-black leading-tight max-w-4xl mb-16">
            Creatieve oplossingen <br />
            voor moderne merken.
          </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Brand Identity",
                text: "Modern visual systems designed for ambitious brands.",
              },
              {
                title: "Social Media",
                text: "Premium content strategy focused on engagement and growth.",
              },
              {
                title: "Digital Design",
                text: "Ads, visuals and creative direction with cinematic impact.",
              
          <button className="px-12 py-5 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 font-semibold shadow-[0_0_50px_rgba(217,70,239,0.7)] hover:scale-105 transition">
            Contacteer Noma
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/40 text-sm">
            © 2026 NOMA DIGITAL STUDIO • BELGIUM
          </div>

          <div className="flex items-center gap-5 text-white/40">
            <Facebook size={18} />
            <Instagram size={18} />
          </div>
        </div>
      </footer>
    </main>
  )
}