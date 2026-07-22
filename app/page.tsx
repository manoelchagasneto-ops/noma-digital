"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [particles, setParticles] = useState<any[]>([])
  const [language, setLanguage] = useState("NL")
  const [mobileMenu, setMobileMenu] = useState(false)

  const facebookUrl = "https://www.facebook.com/nomadigitalsolutions/"
  const whatsappUrl = "https://wa.me/32469712440"
  const whatsappProjectUrl =
    language === "NL"
      ? "https://wa.me/32469712440?text=Hallo%21%20Ik%20heb%20de%20website%20van%20Noma%20Digital%20bezocht%20en%20ik%20wil%20graag%20meer%20informatie%20over%20jullie%20diensten."
      : "https://wa.me/32469712440?text=Hello%21%20I%20visited%20the%20Noma%20Digital%20website%20and%20I%20would%20like%20more%20information%20about%20your%20services."
  const emailUrl = "mailto:contact@nomadigital.be"

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

  useEffect(() => {
    const generatedParticles = Array.from({
      length: 28,
    }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    setParticles(generatedParticles)
  }, [])

  const t =
    language === "NL"
      ? {
          services: "Diensten",
          portfolio: "Bekijk Portfolio",
          about: "Over Noma",
          contact: "Contacteer Noma",

          badge: "Creative Digitale Oplossingen",

          title1: "Moderne",
          title2: "Digitale",
          title3: "Identiteiten",

          description:
            "Noma helpt Belgische bedrijven groeien met moderne branding, social media beheer en premium digitaal design.",

          start: "Start een Project",
          view: "Bekijk Portfolio",

          servicesTitle1: "Creatieve oplossingen",
          servicesTitle2: "voor moderne merken.",

          portfolioTitle: "Selected Projects",
          portfolioProject: "Bekijk Project →",

          aboutTag: "OVER NOMA",
          aboutTitle: "Wie wij zijn.",
          aboutText:
            "Noma Digital helpt Belgische bedrijven groeien met een sterke digitale identiteit. Wij combineren branding, social media, digitaal design en administratieve ondersteuning om bedrijven professioneel en consistent te laten groeien. Wij geloven dat een sterk merk begint met een duidelijke strategie en een moderne online aanwezigheid.",

          ctaTitle1: "BOUW JOUW DIGITALE",
          ctaTitle2: "AANWEZIGHEID",

          ctaDescription:
            "Modern branding, cinematic visuals and premium digital presence for ambitious businesses.",

          ctaButton: "Contacteer Noma",

          footerText:
            "Creatieve digitale oplossingen voor Belgische bedrijven.",

          footerNavigation: "Navigatie",
          footerServices: "Diensten",
          footerFollow: "Volg Noma",
          rights: "Alle rechten voorbehouden.",
        }
      : {
          services: "Services",
          portfolio: "View Portfolio",
          about: "About Noma",
          contact: "Contact Noma",

          badge: "Creative Digital Solutions",

          title1: "Modern",
          title2: "Digital",
          title3: "Identities",

          description:
            "Noma helps businesses grow with modern branding, social media management and premium digital design.",

          start: "Start a Project",
          view: "View Portfolio",

          servicesTitle1: "Creative solutions",
          servicesTitle2: "for modern brands.",

          portfolioTitle: "Selected Projects",
          portfolioProject: "View Project →",

          aboutTag: "ABOUT NOMA",
          aboutTitle: "Who we are.",
          aboutText:
            "Noma Digital helps businesses grow through a strong digital identity. We combine branding, social media, digital design and administrative support to help companies build a professional and consistent presence. We believe every successful brand starts with a clear strategy and a modern online experience.",

          ctaTitle1: "BUILD YOUR DIGITAL",
          ctaTitle2: "PRESENCE",

          ctaDescription:
            "Modern branding, cinematic visuals and premium digital presence for ambitious businesses.",

          ctaButton: "Contact Noma",

          footerText:
            "Creative digital solutions for ambitious businesses.",

          footerNavigation: "Navigation",
          footerServices: "Services",
          footerFollow: "Follow Noma",
          rights: "All rights reserved.",
        }

  return (
    <main className="main">
      {/* PARTICLES */}
      <div className="particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      {/* MOUSE LIGHT */}
      <div
        className="mouseLight"
        style={{
          left: mousePosition.x - 180,
          top: mousePosition.y - 180,
        }}
      />

      <div className="backgroundGlow" />

      {/* HEADER */}
      <header className="header">
        <div className="headerContent">
          <div className="logoWrapper">
            <img src="/logo.png" alt="Noma Digital" className="logo" />

            <div>
              <h1 className="logoTitle">NOMA</h1>

              <p className="logoSub">DIGITAL SOLUTIONS</p>
            </div>
          </div>

          <div className="desktopMenu">
            <a href="#services">
              <button style={menuButton}>{t.services}</button>
            </a>

            <a href="#portfolio">
              <button style={menuButton}>{t.portfolio}</button>
            </a>

            <a href="#about">
              <button style={menuButton}>{t.about}</button>
            </a>

            <a href={whatsappProjectUrl} target="_blank" rel="noopener noreferrer">
              <button style={menuButton}>{t.contact}</button>
            </a>

            <div className="langBox">
              <button
                onClick={() => setLanguage("NL")}
                className={
                  language === "NL" ? "langActive" : "langButton"
                }
              >
                NL
              </button>

              <button
                onClick={() => setLanguage("EN")}
                className={
                  language === "EN" ? "langActive" : "langButton"
                }
              >
                EN
              </button>
            </div>
          </div>

          <button
            className="mobileMenuButton"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>
        </div>

        {mobileMenu && (
          <div className="mobileMenu">
            <a href="#services">{t.services}</a>
            <a href="#portfolio">{t.portfolio}</a>
            <a href="#about">{t.about}</a>
            <a href={whatsappProjectUrl} target="_blank" rel="noopener noreferrer">{t.contact}</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroLeft">
          <div className="socials">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" style={socialButton} aria-label="Facebook Noma Digital">
              f
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={socialButton} aria-label="WhatsApp Noma Digital">
              WA
            </a>
          </div>

          <div className="badge">{t.badge}</div>

          <h2 className="heroTitle">
            {t.title1}
            <br />
            {t.title2}
            <br />
            {t.title3}
            <br />

            <span className="gradientText">Premium</span>
          </h2>

          <p className="heroDesc">{t.description}</p>

          <div className="heroButtons">
            <a href={whatsappProjectUrl} target="_blank" rel="noopener noreferrer" style={{ ...primaryButton, textDecoration: "none", display: "inline-block" }}>
              {t.start}
            </a>

            <a href="#portfolio" style={{ ...secondaryButton, textDecoration: "none", display: "inline-block" }}>
              {t.view}
            </a>
          </div>
        </div>

        <div className="heroRight">
          <div className="imageGlow" />

          <div className="imageBox">
            <img src="/hero.png" alt="Noma Digital" className="heroImage" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <p className="sectionTag">{t.services}</p>

        <h3 className="sectionTitle">
          {t.servicesTitle1}
          <br />
          {t.servicesTitle2}
        </h3>

        <div className="servicesGrid">
          <div className="serviceCard">
            <div className="serviceIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 20l4.8-1.2L19 8.6a2.1 2.1 0 0 0 0-3L18.4 5a2.1 2.1 0 0 0-3 0L5.2 15.2 4 20Z" />
                <path d="m13.8 6.6 3.6 3.6" />
                <path d="M4.8 16.2 7.8 19.2" />
              </svg>
            </div>

            <h4>Brand Identity</h4>

            <p>
              Premium branding strategy for modern businesses and strong
              digital positioning.
            </p>
          </div>

          <div className="serviceCard">
            <div className="serviceIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
                <path d="M10 5.5h4" />
                <path d="M10.5 18.5h3" />
                <path d="M9.5 10.5h5" />
                <path d="M9.5 13.5h3.5" />
              </svg>
            </div>

            <h4>Social Media</h4>

            <p>
              Creative content and visual storytelling focused on engagement
              and growth.
            </p>
          </div>

          <div className="serviceCard">
            <div className="serviceIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="13" rx="2.2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="m9 8 6 3-3 1-1 3-2-7Z" />
              </svg>
            </div>

            <h4>Digital Design</h4>

            <p>
              Cinematic visuals and premium interfaces for brands that want
              impact.
            </p>
          </div>

          <div className="serviceCard">
            <div className="serviceIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 3.5h14v17H5z" />
                <path d="M8 7h8" />
                <path d="M8 11h2M14 11h2M8 15h2M14 15h2" />
                <path d="M8 18h8" />
              </svg>
            </div>

            <h4>Accounting</h4>

            <p>
              Professional accounting solutions for modern businesses with
              organization, strategy and trust.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section">
        <p className="sectionTag">PORTFOLIO</p>

        <h3 className="sectionTitle">{t.portfolioTitle}</h3>

        <div className="portfolioGrid">
          <div className="portfolioCard">
            <div>
              <span className="portfolioCategory">
                Automotive Marketing
              </span>

              <h3>JC Cars</h3>

              <p>
                Social Media Management, Graphic Design and Content Creation.
              </p>

              <span className="portfolioLink">
                {t.portfolioProject}
              </span>
            </div>
          </div>

          <div className="portfolioCard">
            <div>
              <span className="portfolioCategory">Creative Agency</span>

              <h3>NOMA</h3>

              <p>
                Brand Identity, Website Design and Digital Strategy.
              </p>

              <span className="portfolioLink">
                {t.portfolioProject}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="sectionTag">{t.aboutTag}</p>

        <h3 className="sectionTitle">{t.aboutTitle}</h3>

        <div className="aboutBox">
          <p>{t.aboutText}</p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="ctaSection">
        <div className="ctaBox">
          <h2 className="ctaTitle">
            {t.ctaTitle1}
            <br />
            {t.ctaTitle2}
          </h2>

          <p className="ctaDesc">{t.ctaDescription}</p>

          <a href={whatsappProjectUrl} target="_blank" rel="noopener noreferrer" className="ctaButton">
            {t.ctaButton}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footerGrid">
          <div className="footerBrand">
            <img
              src="/logo.png"
              alt="Noma Digital"
              className="footerLogo"
            />

            <h3>NOMA</h3>

            <p>{t.footerText}</p>
          </div>

          <div className="footerColumn">
            <h4>{t.footerNavigation}</h4>

            <a href="#services">{t.services}</a>
            <a href="#portfolio">{t.portfolio}</a>
            <a href="#about">{t.about}</a>
            <a href="#contact">{t.contact}</a>
          </div>

          <div className="footerColumn">
            <h4>{t.footerServices}</h4>

            <span>Brand Identity</span>
            <span>Social Media</span>
            <span>Digital Design</span>
            <span>Administrative Support</span>
          </div>

          <div className="footerColumn">
            <h4>{t.footerFollow}</h4>

            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 Noma Digital</span>
          <span>{t.rights}</span>
        </div>
      </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

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
          background: rgba(217, 70, 239, 0.9);
          box-shadow:
            0 0 20px rgba(217, 70, 239, 0.8),
            0 0 60px rgba(217, 70, 239, 0.4);
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }

          50% {
            transform: translateY(-50vh) translateX(40px);
          }

          100% {
            transform: translateY(-110vh) translateX(-30px);
          }
        }

        .mouseLight {
          position: fixed;
          width: 360px;
          height: 360px;
          border-radius: 999px;
          background: radial-gradient(
            circle,
            rgba(217, 70, 239, 0.22) 0%,
            rgba(217, 70, 239, 0) 70%
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
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
          color: rgba(255, 255, 255, 0.45);
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
          background: rgba(255, 255, 255, 0.03);
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
          color: rgba(255, 255, 255, 0.45);
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
          border: 1px solid rgba(217, 70, 239, 0.3);
          background: rgba(217, 70, 239, 0.08);
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
          background: linear-gradient(to right, #c084fc, #d946ef);
          -webkit-background-clip: text;
          color: transparent;
        }

        .heroDesc {
          margin-top: 42px;
          font-size: 22px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.58);
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
          background: linear-gradient(to bottom right, #f0abfc, #a21caf);
          overflow: hidden;
          box-shadow: 0 0 90px rgba(217, 70, 239, 0.55);
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
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .serviceCard {
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 38px;
          background: rgba(255, 255, 255, 0.02);
        }

        .serviceIcon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          color: #d946ef;
          background: linear-gradient(
            145deg,
            rgba(217, 70, 239, 0.14),
            rgba(147, 51, 234, 0.05)
          );
          border: 1px solid rgba(217, 70, 239, 0.28);
          box-shadow:
            0 0 18px rgba(217, 70, 239, 0.12),
            inset 0 0 14px rgba(147, 51, 234, 0.05);
        }

        .serviceIcon svg {
          width: 25px;
          height: 25px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 0 5px rgba(217, 70, 239, 0.28));
        }

        .portfolioGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .portfolioCard {
          height: 320px;
          border-radius: 36px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 40px;
          background: linear-gradient(to bottom right, #35003f, #05000f);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: 0.35s;
        }

        .portfolioCard:hover {
          transform: translateY(-8px);
          border-color: rgba(217, 70, 239, 0.35);
        }

        .portfolioCategory {
          color: #d946ef;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .portfolioCard h3 {
          font-size: 40px;
          margin: 18px 0;
        }

        .portfolioCard p {
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
          max-width: 360px;
        }

        .portfolioLink {
          display: inline-block;
          margin-top: 28px;
          font-weight: 700;
          color: #d946ef;
        }

        .aboutBox {
          max-width: 900px;
          padding: 55px;
          border-radius: 36px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .aboutBox p {
          margin: 0;
          font-size: 22px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.75);
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
          background: linear-gradient(to bottom right, #1a0026, #070015);
          border: 1px solid rgba(217, 70, 239, 0.18);
        }

        .ctaTitle {
          font-size: 72px;
          line-height: 1;
        }

        .ctaDesc {
          margin-top: 30px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.8;
        }

        .ctaButton {
          margin-top: 42px;
          padding: 22px 42px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(to right, #7e22ce, #d946ef);
          color: white;
          font-weight: 700;
          font-size: 18px;
          cursor: pointer;
          display: inline-block;
          text-decoration: none;
        }

        .footer {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 80px 60px 35px;
        }

        .footerGrid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
        }

        .footerLogo {
          width: 70px;
          margin-bottom: 20px;
        }

        .footerBrand h3 {
          font-size: 34px;
          letter-spacing: 0.3em;
          margin: 0 0 20px;
        }

        .footerBrand p {
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.7;
          max-width: 300px;
        }

        .footerColumn {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .footerColumn h4 {
          color: #d946ef;
          margin-bottom: 12px;
        }

        .footerColumn a,
        .footerColumn span {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: 0.3s;
        }

        .footerColumn a:hover {
          color: #d946ef;
        }

        .footerBottom {
          max-width: 1400px;
          margin: 70px auto 0;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.35);
          font-size: 14px;
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

          .servicesGrid,
          .portfolioGrid,
          .footerGrid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 0 24px 100px;
          }

          .sectionTitle {
            font-size: 46px;
          }

          .aboutBox {
            padding: 35px 28px;
          }

          .aboutBox p {
            font-size: 18px;
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

          .footer {
            padding: 60px 24px 30px;
          }

          .footerBottom {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </main>
  )
}

const menuButton = {
  padding: "16px 28px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  color: "#fff",
  cursor: "pointer",
  fontSize: "15px",
}

const socialButton = {
  width: "48px",
  height: "48px",
  borderRadius: "999px",
  background: "rgba(217,70,239,0.15)",
  border: "1px solid rgba(217,70,239,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 30px rgba(217,70,239,0.45)",
  fontSize: "20px",
  color: "#fff",
  textDecoration: "none",
}

const primaryButton = {
  padding: "22px 42px",
  borderRadius: "999px",
  border: "none",
  background: "linear-gradient(to right,#7e22ce,#d946ef)",
  color: "#fff",
  fontWeight: 700,
  fontSize: "18px",
  cursor: "pointer",
}

const secondaryButton = {
  padding: "22px 42px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  color: "#fff",
  fontSize: "18px",
  cursor: "pointer",
}