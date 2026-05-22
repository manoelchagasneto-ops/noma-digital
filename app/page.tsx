"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [language, setLanguage] = useState("NL")

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
          portfolio: "Bekijk Portfolio",
          contact: "Contacteer Noma",
          badge:
            "Creative Digitale Oplossingen",
          title1: "Moderne",
          title2: "Digitale",
          title3: "Identiteiten",
          desc:
            "Noma helpt Belgische bedrijven groeien met moderne branding, social media beheer en premium digitaal design.",
          start: "Start een Project",
          view: "Bekijk Portfolio",
        }
      : {
          services: "Services",
          portfolio: "View Portfolio",
          contact: "Contact Noma",
          badge:
            "Creative Digital Solutions",
          title1: "Modern",
          title2: "Digital",
          title3: "Identities",
          desc:
            "Noma helps businesses grow with modern branding, social media management and premium digital design.",
          start: "Start a Project",
          view: "View Portfolio",
        }

  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* MOUSE LIGHT */}
      <div
        style={{
          position: "fixed",
          left: mousePosition.x - 180,
          top: mousePosition.y - 180,
          width: "360px",
          height: "360px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(217,70,239,0.22) 0%, rgba(217,70,239,0) 70%)",
          pointerEvents: "none",
          zIndex: 1,
          transition: "all 0.08s linear",
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
            justifyContent: "space-between",
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
                  fontWeight: 900,
                  letterSpacing: "0.28em",
                }}
              >
                NOMA
              </h1>

              <p
                style={{
                  marginTop: "8px",
                  fontSize: "11px",
                  letterSpacing: "0.45em",
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
              gap: "18px",
              alignItems: "center",
            }}
          >
            <button style={menuButton}>
              {t.services}
            </button>

            <button style={menuButton}>
              {t.portfolio}
            </button>

            <button style={menuButton}>
              {t.contact}
            </button>

            {/* LANG */}
            <div
              style={{
                display: "flex",
                padding: "4px",
                borderRadius: "999px",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                background:
                  "rgba(255,255,255,0.03)",
              }}
            >
              <button
                onClick={() =>
                  setLanguage("NL")
                }
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "999px",
                  border: "none",
                  background:
                    language === "NL"
                      ? "#d946ef"
                      : "transparent",
                  color:
                    language === "NL"
                      ? "#fff"
                      : "rgba(255,255,255,0.45)",
                  cursor: "pointer",
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
                  borderRadius: "999px",
                  border: "none",
                  background:
                    language === "EN"
                      ? "#d946ef"
                      : "transparent",
                  color:
                    language === "EN"
                      ? "#fff"
                      : "rgba(255,255,255,0.45)",
                  cursor: "pointer",
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
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT */}
        <div style={{ width: "50%" }}>
          {/* SOCIALS */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "36px",
            }}
          >
            <div style={socialButton}>
              f
            </div>

            <div style={socialButton}>
              ◎
            </div>
          </div>

          {/* BADGE */}
          <div
            style={{
              display: "inline-block",
              padding: "16px 30px",
              borderRadius: "999px",
              border:
                "1px solid rgba(217,70,239,0.3)",
              background:
                "rgba(217,70,239,0.08)",
              fontSize: "12px",
              letterSpacing: "0.35em",
              marginBottom: "38px",
            }}
          >
            {t.badge}
          </div>

          {/* TITLE */}
          <h2
            style={{
              margin: 0,
              fontSize: "82px",
              lineHeight: 0.9,
              fontWeight: 900,
              textTransform: "uppercase",
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
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Premium
            </span>
          </h2>

          {/* DESC */}
          <p
            style={{
              marginTop: "42px",
              fontSize: "22px",
              lineHeight: 1.7,
              color:
                "rgba(255,255,255,0.58)",
              maxWidth: "640px",
            }}
          >
            {t.desc}
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "48px",
            }}
          >
            <button style={primaryButton}>
              {t.start}
            </button>

            <button style={secondaryButton}>
              {t.view}
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "620px",
              height: "620px",
              borderRadius: "999px",
              background: "#d946ef",
              opacity: 0.2,
              filter: "blur(120px)",
            }}
          />

          <div
            style={{
              width: "520px",
              height: "650px",
              background:
                "linear-gradient(to bottom right,#f0abfc,#a21caf)",
              borderRadius: "48px",
              padding: "22px",
              boxShadow:
                "0 0 90px rgba(217,70,239,0.55)",
              overflow: "hidden",
            }}
          >
            <img
              src="/hero.png"
              alt="Hero"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "32px",
                transition:
                  "transform 0.6s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.06)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "scale(1)"
              }}
            />
          </div>
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