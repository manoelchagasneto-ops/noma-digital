"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    })

  const [particles, setParticles] =
    useState<any[]>([])

  const [language, setLanguage] =
    useState("NL")

  const [mobileMenu, setMobileMenu] =
    useState(false)

  useEffect(() => {
    const handleMouseMove = (
      e: MouseEvent
    ) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove
    )

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      )
    }
  }, [])

  useEffect(() => {
    const generatedParticles =
      Array.from({
        length: 28,
      }).map((_, i) => ({
        id: i,
        size:
          Math.random() * 6 + 2,
        left:
          Math.random() * 100,
        duration:
          Math.random() * 20 + 10,
        delay:
          Math.random() * 10,
        opacity:
          Math.random() * 0.5 + 0.1,
      }))

    setParticles(
      generatedParticles
    )
  }, [])

  const t =
    language === "NL"
      ? {
          services: "Diensten",
          portfolio:
            "Bekijk Portfolio",
          contact:
            "Contacteer Noma",

          badge:
            "Creative Digitale Oplossingen",

          title1: "Moderne",
          title2: "Digitale",
          title3: "Identiteiten",

          description:
            "Noma helpt Belgische bedrijven groeien met moderne branding, social media beheer en premium digitaal design.",

          start:
            "Start een Project",

          view:
            "Bekijk Portfolio",

          servicesTitle1:
            "Creatieve oplossingen",

          servicesTitle2:
            "voor moderne merken.",

          portfolioTitle:
            "Selected Projects",

          ctaTitle1:
            "BOUW JOUW DIGITALE",

          ctaTitle2:
            "AANWEZIGHEID",

          ctaDescription:
            "Modern branding, cinematic visuals and premium digital presence for ambitious businesses.",

          ctaButton:
            "Contacteer Noma",
        }
      : {
          services: "Services",
          portfolio:
            "View Portfolio",
          contact:
            "Contact Noma",

          badge:
            "Creative Digital Solutions",

          title1: "Modern",
          title2: "Digital",
          title3: "Identities",

          description:
            "Noma helps businesses grow with modern branding, social media management and premium digital design.",

          start:
            "Start a Project",

          view:
            "View Portfolio",

          servicesTitle1:
            "Creative solutions",

          servicesTitle2:
            "for modern brands.",

          portfolioTitle:
            "Selected Projects",

          ctaTitle1:
            "BUILD YOUR DIGITAL",

          ctaTitle2:
            "PRESENCE",

          ctaDescription:
            "Modern branding, cinematic visuals and premium digital presence for ambitious businesses.",

          ctaButton:
            "Contact Noma",
        }

  return (
    <main className="main">

      {/* PARTICLES */}
      <div className="particles">
        {particles.map(
          (particle) => (
            <span
              key={particle.id}
              className="particle"
              style={{
                width:
                  particle.size,
                height:
                  particle.size,
                left: `${particle.left}%`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                opacity:
                  particle.opacity,
              }}
            />
          )
        )}
      </div>

      {/* MOUSE LIGHT */}
      <div
        className="mouseLight"
        style={{
          left:
            mousePosition.x - 180,
          top:
            mousePosition.y - 180,
        }}
      />

      <div className="backgroundGlow" />

      {/* HEADER */}
      <header className="header">
        <div className="headerContent">

          <div className="logoWrapper">
            <img
              src="/logo.png"
              alt="Logo"
              className="logo"
            />

            <div>
              <h1 className="logoTitle">
                NOMA
              </h1>

              <p className="logoSub">
                DIGITAL SOLUTIONS
              </p>
            </div>
          </div>

          <div className="desktopMenu">
            <a href="#services">
              <button style={menuButton}>
                {t.services}
              </button>
            </a>

            <a href="#portfolio">
              <button style={menuButton}>
                {t.portfolio}
              </button>
            </a>

            <a href="#contact">
              <button style={menuButton}>
                {t.contact}
              </button>
            </a>

            <div className="langBox">
              <button
                onClick={() =>
                  setLanguage("NL")
                }
                className={
                  language === "NL"
                    ? "langActive"
                    : "langButton"
                }
              >
                NL
              </button>

              <button
                onClick={() =>
                  setLanguage("EN")
                }
                className={
                  language === "EN"
                    ? "langActive"
                    : "langButton"
                }
              >
                EN
              </button>
            </div>
          </div>

          <button
            className="mobileMenuButton"
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }
          >
            ☰
          </button>
        </div>

        {mobileMenu && (
          <div className="mobileMenu">
            <a href="#services">
              {t.services}
            </a>

            <a href="#portfolio">
              {t.portfolio}
            </a>

            <a href="#contact">
              {t.contact}
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="hero">

        <div className="heroLeft">

          <div className="socials">
            <div style={socialButton}>
              f
            </div>

            <div style={socialButton}>
              ◎
            </div>
          </div>

          <div className="badge">
            {t.badge}
          </div>

          <h2 className="heroTitle">
            {t.title1}
            <br />
            {t.title2}
            <br />
            {t.title3}
            <br />

            <span className="gradientText">
              Premium
            </span>
          </h2>

          <p className="heroDesc">
            {t.description}
          </p>

          <div className="heroButtons">
            <button style={primaryButton}>
              {t.start}
            </button>

            <button style={secondaryButton}>
              {t.view}
            </button>
          </div>
        </div>

        <div className="heroRight">

          <div className="imageGlow" />

          <div className="imageBox">
            <img
              src="/hero.png"
              alt="Hero"
              className="heroImage"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="section"
      >
        <p className="sectionTag">
          {t.services}
        </p>

        <h3 className="sectionTitle">
          {t.servicesTitle1}
          <br />
          {t.servicesTitle2}
        </h3>

        <div className="servicesGrid">
          {[
            "Brand Identity",
            "Social Media",
            "Digital Design",
            "Creative Ads",
          ].map((item) => (
            <div
              key={item}
              className="serviceCard"
            >
              <div className="serviceIcon" />

              <h4>{item}</h4>

              <p>
                Premium visual strategy focused
                on cinematic branding and modern
                digital presence.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="section"
      >
        <p className="sectionTag">
          PORTFOLIO
        </p>

        <h3 className="sectionTitle">
          {t.portfolioTitle}
        </h3>

        <div className="portfolioGrid">
          <div className="portfolioCard">
            JC Cars
          </div>

          <div className="portfolioCard">
            NOMA
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="ctaSection"
      >
        <div className="ctaBox">
          <h2 className="ctaTitle">
            {t.ctaTitle1}
            <br />
            {t.ctaTitle2}
          </h2>

          <p className="ctaDesc">
            {t.ctaDescription}
          </p>

          <button className="ctaButton">
            {t.ctaButton}
          </button>
        </div>
      </section>

      <style jsx>{`
        .main {
          background: #000;
          min-height: 100vh;
          color: white;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        .particles {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .particle {
          position: absolute;
          bottom: -20px;
          border-radius: 999px;
          background: rgba(
            217,
            70,
            239,
            0.9
          );

          box-shadow:
            0 0 20px
              rgba(
                217,
                70,
                239,
                0.8
              ),
            0 0 60px
              rgba(
                217,
                70,
                239,
                0.4
              );

          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0)
              translateX(0);
          }

          50% {
            transform: translateY(
                -50vh
              )
              translateX(40px);
          }

          100% {
            transform: translateY(
                -110vh
              )
              translateX(-30px);
          }
        }

        .mouseLight {
          position: fixed;
          width: 360px;
          height: 360px;
          border-radius: 999px;
          background: radial-gradient(
            circle,
            rgba(217, 70, 239, 0.22)
              0%,
            rgba(217, 70, 239, 0)
              70%
          );
          pointer-events: none;
          z-index: 1;
          transition: all 0.08s linear;
        }

        .backgroundGlow {
          position: absolute;
          top: -250px;
          right: -250px;
          width: 700px;
          height: 700px;
          border-radius: 999px;
          background: #6d00ff;
          opacity: 0.25;
          filter: blur(160px);
        }

        .header {
          border-bottom: 1px solid
            rgba(255,255,255,0.08);
          position: relative;
          z-index: 2;
        }

        .headerContent {
          max-width: 1400px;
          margin: 0 auto;
          padding: 28px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logoWrapper {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .logo {
          width: 92px;
        }

        .logoTitle {
          margin: 0;
          font-size: 52px;
          font-weight: 900;
          letter-spacing: 0.28em;
        }

        .logoSub {
          margin-top: 8px;
          font-size: 11px;
          letter-spacing: 0.45em;
          color: rgba(
            255,
            255,
            255,
            0.45
          );
        }

        .desktopMenu {
          display: flex;
          gap: 18px;
          align-items: center;
        }

        .langBox {
          display: flex;
          padding: 4px;
          border-radius: 999px;
          background: rgba(
            255,
            255,
            255,
            0.03
          );
        }

        .langButton,
        .langActive {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
        }

        .langButton {
          background: transparent;
          color: rgba(
            255,
            255,
            255,
            0.45
          );
        }

        .langActive {
          background: #d946ef;
          color: white;
        }

        .mobileMenuButton {
          display: none;
        }

        .hero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px;
          display: flex;
          align-items: center;
          gap: 80px;
          position: relative;
          z-index: 2;
        }

        .heroLeft,
        .heroRight {
          width: 50%;
        }

        .socials {
          display: flex;
          gap: 12px;
          margin-bottom: 36px;
        }

        .badge {
          display: inline-block;
          padding: 16px 30px;
          border-radius: 999px;
          border: 1px solid
            rgba(217,70,239,0.3);
          background: rgba(
            217,
            70,
            239,
            0.08
          );
          font-size: 12px;
          letter-spacing: 0.35em;
          margin-bottom: 38px;
        }

        .heroTitle {
          margin: 0;
          font-size: 82px;
          line-height: 0.9;
          font-weight: 900;
          text-transform: uppercase;
        }

        .gradientText {
          background: linear-gradient(
            to right,
            #c084fc,
            #d946ef
          );

          -webkit-background-clip: text;
          color: transparent;
        }

        .heroDesc {
          margin-top: 42px;
          font-size: 22px;
          line-height: 1.7;
          color: rgba(
            255,
            255,
            255,
            0.58
          );
        }

        .heroButtons {
          display: flex;
          gap: 20px;
          margin-top: 48px;
          flex-wrap: wrap;
        }

        .heroRight {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .imageGlow {
          position: absolute;
          width: 620px;
          height: 620px;
          border-radius: 999px;
          background: #d946ef;
          opacity: 0.2;
          filter: blur(120px);
        }

        .imageBox {
          width: 520px;
          height: 650px;
          border-radius: 48px;
          padding: 22px;
          background: linear-gradient(
            to bottom right,
            #f0abfc,
            #a21caf
          );
          overflow: hidden;
          box-shadow: 0 0 90px
            rgba(217,70,239,0.55);
        }

        .heroImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 32px;
          transition: transform 0.6s ease;
        }

        .heroImage:hover {
          transform: scale(1.06);
        }

        .section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 60px 120px;
          position: relative;
          z-index: 2;
        }

        .sectionTag {
          color: #d946ef;
          letter-spacing: 0.35em;
          font-size: 12px;
          margin-bottom: 20px;
        }

        .sectionTitle {
          font-size: 72px;
          line-height: 1;
          margin-bottom: 60px;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns:
            repeat(4,1fr);
          gap: 24px;
        }

        .serviceCard {
          border: 1px solid
            rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 38px;
          background: rgba(
            255,
            255,
            255,
            0.02
          );
        }

        .serviceIcon {
          width: 32px;
          height: 52px;
          border-radius: 10px;
          background: linear-gradient(
            to bottom,
            #d946ef,
            #9333ea
          );
          margin-bottom: 28px;
        }

        .portfolioGrid {
          display: grid;
          grid-template-columns:
            repeat(2,1fr);
          gap: 28px;
        }

        .portfolioCard {
          height: 320px;
          border-radius: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 54px;
          font-weight: 800;
          background: linear-gradient(
            to bottom right,
            #35003f,
            #05000f
          );
          border: 1px solid
            rgba(255,255,255,0.08);
        }

        .ctaSection {
          max-width: 1100px;
          margin: 0 auto;
          padding-bottom: 120px;
          position: relative;
          z-index: 2;
        }

        .ctaBox {
          border-radius: 44px;
          padding: 90px 60px;
          text-align: center;
          background: linear-gradient(
            to bottom right,
            #1a0026,
            #070015
          );
          border: 1px solid
            rgba(217,70,239,0.18);
        }

        .ctaTitle {
          font-size: 72px;
          line-height: 1;
        }

        .ctaDesc {
          margin-top: 30px;
          color: rgba(
            255,
            255,
            255,
            0.55
          );
          line-height: 1.8;
        }

        .ctaButton {
          margin-top: 42px;
          padding: 22px 42px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(
            to right,
            #7e22ce,
            #d946ef
          );
          color: white;
          font-weight: 700;
          font-size: 18px;
          cursor: pointer;
        }

        @media (max-width:1100px) {

          .desktopMenu {
            display: none;
          }

          .mobileMenuButton {
            display: block;
            background: transparent;
            border: none;
            color: white;
            font-size: 34px;
          }

          .mobileMenu {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 30px 24px;
            background: #090909;
          }

          .mobileMenu a {
            color: white;
            text-decoration: none;
            font-size: 20px;
          }

          .hero {
            flex-direction: column;
            padding: 40px 24px 100px;
          }

          .heroLeft,
          .heroRight {
            width: 100%;
          }

          .heroTitle {
            font-size: 52px;
          }

          .heroDesc {
            font-size: 18px;
          }

          .imageBox {
            width: 100%;
            max-width: 420px;
            height: 520px;
          }

          .servicesGrid {
            grid-template-columns: 1fr;
          }

          .portfolioGrid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 0 24px 100px;
          }

          .sectionTitle {
            font-size: 46px;
          }

          .ctaBox {
            margin: 0 24px;
            padding: 60px 24px;
          }

          .ctaTitle {
            font-size: 42px;
          }

          .headerContent {
            padding: 24px;
          }

          .logoTitle {
            font-size: 34px;
          }

          .logo {
            width: 70px;
          }

          .mouseLight {
            display: none;
          }

          .particle {
            opacity: 0.12 !important;
          }
        }
      `}</style>
    </main>
  )
}

const menuButton = {
  padding: "16px 28px",
  borderRadius: "999px",
  border:
    "1px solid rgba(255,255,255,0.08)",
  background:
    "rgba(255,255,255,0.03)",
  color: "#fff",
  cursor: "pointer",
  fontSize: "15px",
}

const socialButton = {
  width: "48px",
  height: "48px",
  borderRadius: "999px",
  background:
    "rgba(217,70,239,0.15)",
  border:
    "1px solid rgba(217,70,239,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow:
    "0 0 30px rgba(217,70,239,0.45)",
  fontSize: "20px",
  color: "#fff",
}

const primaryButton = {
  padding: "22px 42px",
  borderRadius: "999px",
  border: "none",
  background:
    "linear-gradient(to right,#7e22ce,#d946ef)",
  color: "#fff",
  fontWeight: 700,
  fontSize: "18px",
  cursor: "pointer",
}

const secondaryButton = {
  padding: "22px 42px",
  borderRadius: "999px",
  border:
    "1px solid rgba(255,255,255,0.08)",
  background:
    "rgba(255,255,255,0.03)",
  color: "#fff",
  fontSize: "18px",
  cursor: "pointer",
}