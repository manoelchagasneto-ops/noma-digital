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

  /* PARTICLES */
  useEffect(() => {
    const generatedParticles =
      Array.from({
        length: 32,
      }).map((_, i) => ({
        id: i,
        size:
          Math.random() * 6 + 2,
        left:
          Math.random() * 100,
        duration:
          Math.random() * 18 + 12,
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
        }

  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
        fontFamily:
          "Arial, sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}
    >
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

      {/* BACKGROUND */}
      <div className="backgroundGlow" />

      {/* HEADER */}
      <header className="header">
        <div className="headerContent">

          {/* LOGO */}
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

          {/* DESKTOP MENU */}
          <div className="desktopMenu">
            <button
              style={menuButton}
            >
              {t.services}
            </button>

            <button
              style={menuButton}
            >
              {t.portfolio}
            </button>

            <button
              style={menuButton}
            >
              {t.contact}
            </button>

            {/* LANGUAGE */}
            <div
              className="langBox"
            >
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

          {/* MOBILE BUTTON */}
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

        {/* MOBILE MENU */}
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

        {/* LEFT */}
        <div className="heroLeft">

          {/* SOCIALS */}
          <div className="socials">
            <div
              style={
                socialButton
              }
            >
              f
            </div>

            <div
              style={
                socialButton
              }
            >
              ◎
            </div>
          </div>

          {/* BADGE */}
          <div className="badge">
            {t.badge}
          </div>

          {/* TITLE */}
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

          {/* DESC */}
          <p className="heroDesc">
            {t.description}
          </p>

          {/* BUTTONS */}
          <div className="heroButtons">
            <button
              style={
                primaryButton
              }
            >
              {t.start}
            </button>

            <button
              style={
                secondaryButton
              }
            >
              {t.view}
            </button>
          </div>
        </div>

        {/* IMAGE */}
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

      {/* STYLES */}
      <style jsx>{`
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
            rgba(255, 255, 255, 0.08);
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
          align-items: center;
          gap: 18px;
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
          border: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .langButton,
        .langActive {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: 0.3s;
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
          box-shadow: 0 0 30px
            rgba(217, 70, 239, 0.65);
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
          justify-content: space-between;
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
            rgba(217, 70, 239, 0.3);
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
            rgba(217, 70, 239, 0.55);
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

        @media (max-width: 1100px) {
          .desktopMenu {
            display: none;
          }

          .mobileMenuButton {
            display: block;
            background: transparent;
            border: none;
            color: white;
            font-size: 34px;
            cursor: pointer;
          }

          .mobileMenu {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 30px 60px;
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
            gap: 60px;
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
  boxShadow:
    "0 0 45px rgba(217,70,239,0.45)",
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