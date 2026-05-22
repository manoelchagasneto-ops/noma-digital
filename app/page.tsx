"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    })

  const [language, setLanguage] =
    useState("NL")

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
      {/* MOUSE LIGHT */}
      <div
        style={{
          position: "fixed",
          left:
            mousePosition.x - 180,
          top:
            mousePosition.y - 180,
          width: "360px",
          height: "360px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(217,70,239,0.22) 0%, rgba(217,70,239,0) 70%)",
          pointerEvents: "none",
          zIndex: 1,
          transition:
            "all 0.08s linear",
        }}
      />

      {/* BACKGROUND */}
      <div
        style={{
          position: "absolute",
          top: "-250px",
          right: "-250px",
          width: "700px",
          height: "700px",
          borderRadius: "999px",
          background: "#6d00ff",
          opacity: 0.25,
          filter: "blur(160px)",
        }}
      />

      {/* HEADER */}
      <header
        style={{
          borderBottom:
            "1px solid rgba(255,255,255,0.08)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "28px 60px",
            display: "flex",
            alignItems: "center",
            justifyContent:
              "space-between",
          }}
        >
          {/* LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: "92px",
              }}
            />

            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: "52px",
                  lineHeight: 1,
                  fontWeight: 900,
                  letterSpacing:
                    "0.28em",
                }}
              >
                NOMA
              </h1>

              <p
                style={{
                  marginTop: "8px",
                  marginBottom: 0,
                  fontSize: "11px",
                  letterSpacing:
                    "0.45em",
                  color:
                    "rgba(255,255,255,0.45)",
                }}
              >
                DIGITAL SOLUTIONS
              </p>
            </div>
          </div>

          {/* MENU */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <a href="#services">
              <button
                style={menuButton}
              >
                {t.services}
              </button>
            </a>

            <a href="#portfolio">
              <button
                style={menuButton}
              >
                {t.portfolio}
              </button>
            </a>

            <a href="#contact">
              <button
                style={menuButton}
              >
                {t.contact}
              </button>
            </a>

            {/* LANGUAGE */}
            <div
              style={{
                display: "flex",
                alignItems:
                  "center",
                padding: "4px",
                borderRadius:
                  "999px",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                background:
                  "rgba(255,255,255,0.03)",
                marginLeft: "8px",
              }}
            >
              <button
                onClick={() =>
                  setLanguage("NL")
                }
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius:
                    "999px",
                  border: "none",
                  background:
                    language === "NL"
                      ? "#d946ef"
                      : "transparent",
                  color:
                    language === "NL"
                      ? "#fff"
                      : "rgba(255,255,255,0.45)",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow:
                    language === "NL"
                      ? "0 0 30px rgba(217,70,239,0.65)"
                      : "none",
                  transition:
                    "0.3s",
                }}
              >
                NL
              </button>

              <button
                onClick={() =>
                  setLanguage("EN")
                }
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius:
                    "999px",
                  border: "none",
                  background:
                    language === "EN"
                      ? "#d946ef"
                      : "transparent",
                  color:
                    language === "EN"
                      ? "#fff"
                      : "rgba(255,255,255,0.45)",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow:
                    language === "EN"
                      ? "0 0 30px rgba(217,70,239,0.65)"
                      : "none",
                  transition:
                    "0.3s",
                }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding:
              "60px 60px 120px",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            gap: "80px",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              width: "50%",
            }}
          >
            {/* SOCIALS */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginBottom:
                  "36px",
              }}
            >
              <a
                href="https://facebook.com"
                target="_blank"
              >
                <div
                  style={
                    socialButton
                  }
                >
                  f
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
              >
                <div
                  style={
                    socialButton
                  }
                >
                  ◎
                </div>
              </a>
            </div>

            {/* BADGE */}
            <div
              style={{
                display:
                  "inline-block",
                padding:
                  "16px 30px",
                borderRadius:
                  "999px",
                border:
                  "1px solid rgba(217,70,239,0.3)",
                background:
                  "rgba(217,70,239,0.08)",
                fontSize:
                  "12px",
                letterSpacing:
                  "0.35em",
                marginBottom:
                  "38px",
              }}
            >
              {t.badge}
            </div>

            {/* TITLE */}
            <h2
              style={{
                margin: 0,
                fontSize:
                  "82px",
                lineHeight: 0.9,
                fontWeight: 900,
                textTransform:
                  "uppercase",
              }}
            >
              {t.title1}
              <br />
              {t.title2}
              <br />
              {t.title3}
              <br />

              <span
                style={{
                  background:
                    "linear-gradient(to right,#c084fc,#d946ef)",
                  WebkitBackgroundClip:
                    "text",
                  color:
                    "transparent",
                }}
              >
                Premium
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              style={{
                marginTop:
                  "42px",
                fontSize:
                  "22px",
                lineHeight: 1.7,
                color:
                  "rgba(255,255,255,0.58)",
                maxWidth:
                  "640px",
              }}
            >
              {t.description}
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop:
                  "48px",
              }}
            >
              <a href="#contact">
                <button
                  style={
                    primaryButton
                  }
                >
                  {t.start}
                </button>
              </a>

              <a href="#portfolio">
                <button
                  style={
                    secondaryButton
                  }
                >
                  {t.view}
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent:
                "center",
              position:
                "relative",
            }}
          >
            {/* GLOW */}
            <div
              style={{
                position:
                  "absolute",
                width: "620px",
                height:
                  "620px",
                borderRadius:
                  "999px",
                background:
                  "#d946ef",
                opacity: 0.2,
                filter:
                  "blur(120px)",
              }}
            />

            {/* BOX */}
            <div
              style={{
                width: "520px",
                height:
                  "650px",
                background:
                  "linear-gradient(to bottom right,#f0abfc,#a21caf)",
                borderRadius:
                  "48px",
                padding: "22px",
                boxShadow:
                  "0 0 90px rgba(217,70,239,0.55)",
                position:
                  "relative",
                overflow:
                  "hidden",
              }}
            >
              <img
                src="/hero.png"
                alt="Hero"
                style={{
                  width: "100%",
                  height:
                    "100%",
                  objectFit:
                    "cover",
                  borderRadius:
                    "32px",
                  display:
                    "block",
                  transition:
                    "transform 0.6s ease",
                }}
                onMouseEnter={(
                  e
                ) => {
                  e.currentTarget.style.transform =
                    "scale(1.06)"
                }}
                onMouseLeave={(
                  e
                ) => {
                  e.currentTarget.style.transform =
                    "scale(1)"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding:
            "0 60px 120px",
          position:
            "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#d946ef",
            letterSpacing:
              "0.35em",
            fontSize: "12px",
            marginBottom:
              "20px",
          }}
        >
          {t.services}
        </p>

        <h3
          style={{
            fontSize: "72px",
            lineHeight: 1,
            margin: 0,
            marginBottom:
              "60px",
            maxWidth:
              "900px",
          }}
        >
          {t.servicesTitle1}
          <br />
          {t.servicesTitle2}
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, minmax(0,1fr))",
            gap: "24px",
          }}
        >
          {[
            "Brand Identity",
            "Social Media",
            "Digital Design",
            "Creative Ads",
          ].map((item) => (
            <div
              key={item}
              style={{
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius:
                  "28px",
                padding:
                  "38px",
                background:
                  "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height:
                    "52px",
                  borderRadius:
                    "10px",
                  background:
                    "linear-gradient(to bottom,#d946ef,#9333ea)",
                  marginBottom:
                    "28px",
                }}
              />

              <h4
                style={{
                  fontSize:
                    "32px",
                  marginBottom:
                    "18px",
                }}
              >
                {item}
              </h4>

              <p
                style={{
                  color:
                    "rgba(255,255,255,0.45)",
                  lineHeight: 1.8,
                  fontSize:
                    "15px",
                }}
              >
                Premium visual
                strategy focused
                on cinematic
                branding and
                modern digital
                presence.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding:
            "0 60px 140px",
          position:
            "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#d946ef",
            letterSpacing:
              "0.35em",
            fontSize: "12px",
            marginBottom:
              "20px",
          }}
        >
          PORTFOLIO
        </p>

        <h3
          style={{
            fontSize: "72px",
            marginBottom:
              "60px",
          }}
        >
          {t.portfolioTitle}
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2, minmax(0,1fr))",
            gap: "28px",
          }}
        >
          <div
            style={
              portfolioCard
            }
          >
            JC Cars
          </div>

          <div
            style={
              portfolioCard
            }
          >
            NOMA
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingBottom:
            "120px",
          position:
            "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            borderRadius:
              "44px",
            padding:
              "90px 60px",
            textAlign:
              "center",
            background:
              "linear-gradient(to bottom right,#1a0026,#070015)",
            border:
              "1px solid rgba(217,70,239,0.18)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize:
                "72px",
              lineHeight: 1,
              textTransform:
                "uppercase",
            }}
          >
            {t.ctaTitle1}
            <br />
            {t.ctaTitle2}
          </h2>

          <p
            style={{
              marginTop:
                "30px",
              color:
                "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
            }}
          >
            {
              t.ctaDescription
            }
          </p>

          <button
            style={{
              marginTop:
                "42px",
              padding:
                "22px 42px",
              borderRadius:
                "999px",
              border: "none",
              background:
                "linear-gradient(to right,#7e22ce,#d946ef)",
              color: "#fff",
              fontWeight: 700,
              fontSize:
                "18px",
              cursor:
                "pointer",
              boxShadow:
                "0 0 45px rgba(217,70,239,0.45)",
            }}
          >
            {t.ctaButton}
          </button>
        </div>
      </section>
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

const portfolioCard = {
  height: "320px",
  borderRadius: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "54px",
  fontWeight: 800,
  background:
    "linear-gradient(to bottom right,#35003f,#05000f)",
  border:
    "1px solid rgba(255,255,255,0.08)",
}