export default function Home() {
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
      {/* BACKGROUND GLOW */}
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
          borderBottom: "1px solid rgba(255,255,255,0.08)",
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
                objectFit: "contain",
              }}
            />

            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: "52px",
                  lineHeight: 1,
                  fontWeight: 900,
                  letterSpacing: "0.28em",
                }}
              >
                NOMA
              </h1>

              <p
                style={{
                  marginTop: "8px",
                  marginBottom: 0,
                  fontSize: "11px",
                  letterSpacing: "0.45em",
                  color: "rgba(255,255,255,0.45)",
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
            <button style={menuButton}>
              Diensten
            </button>

            <button style={menuButton}>
              Bekijk Portfolio
            </button>

            <button style={menuButton}>
              Contacteer Noma
            </button>

            {/* LANGUAGE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "4px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                marginLeft: "8px",
              }}
            >
              <button
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "999px",
                  border: "none",
                  background: "#d946ef",
                  color: "#fff",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow:
                    "0 0 30px rgba(217,70,239,0.65)",
                }}
              >
                NL
              </button>

              <button
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "999px",
                  border: "none",
                  background: "transparent",
                  color: "rgba(255,255,255,0.45)",
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
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "60px 60px 120px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
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
              Creative Digitale Oplossingen
            </div>

            {/* TITLE */}
            <h2
              style={{
                margin: 0,
                fontSize: "96px",
                lineHeight: 0.9,
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Moderne
              <br />
              Digitale
              <br />
              Identiteiten
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

            {/* DESCRIPTION */}
            <p
              style={{
                marginTop: "42px",
                fontSize: "22px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.58)",
                maxWidth: "640px",
              }}
            >
              Noma helpt Belgische bedrijven groeien
              met moderne branding, social media
              beheer en premium digitaal design.
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
                Start een Project
              </button>

              <button style={secondaryButton}>
                Bekijk Portfolio
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* GLOW */}
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

            {/* BOX */}
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
                position: "relative",
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
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px 120px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#d946ef",
            letterSpacing: "0.35em",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          DIENSTEN
        </p>

        <h3
          style={{
            fontSize: "72px",
            lineHeight: 1,
            margin: 0,
            marginBottom: "60px",
            maxWidth: "900px",
          }}
        >
          Creatieve oplossingen
          <br />
          voor moderne merken.
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
                borderRadius: "28px",
                padding: "38px",
                background:
                  "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "52px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(to bottom,#d946ef,#9333ea)",
                  marginBottom: "28px",
                }}
              />

              <h4
                style={{
                  fontSize: "32px",
                  marginBottom: "18px",
                }}
              >
                {item}
              </h4>

              <p
                style={{
                  color:
                    "rgba(255,255,255,0.45)",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                Premium visual strategy focused on
                cinematic branding and modern
                digital presence.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px 140px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#d946ef",
            letterSpacing: "0.35em",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          PORTFOLIO
        </p>

        <h3
          style={{
            fontSize: "72px",
            marginBottom: "60px",
          }}
        >
          Selected Projects
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2, minmax(0,1fr))",
            gap: "28px",
          }}
        >
          <div style={portfolioCard}>
            JC Cars
          </div>

          <div style={portfolioCard}>
            NOMA
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingBottom: "120px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            borderRadius: "44px",
            padding: "90px 60px",
            textAlign: "center",
            background:
              "linear-gradient(to bottom right,#1a0026,#070015)",
            border:
              "1px solid rgba(217,70,239,0.18)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "72px",
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            Bouw jouw digitale
            <br />
            aanwezigheid
          </h2>

          <p
            style={{
              marginTop: "30px",
              color:
                "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
            }}
          >
            Modern branding, cinematic visuals and
            premium digital presence for ambitious
            businesses.
          </p>

          <button
            style={{
              marginTop: "42px",
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
            }}
          >
            Contacteer Noma
          </button>
        </div>
      </section>
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
  boxShadow:
    "0 0 45px rgba(217,70,239,0.45)",
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
  border: "1px solid rgba(255,255,255,0.08)",
}