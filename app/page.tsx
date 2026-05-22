{/* SERVICES */}
<section
  id="services"
  className="section"
>
  <p className="sectionTag">
    {t.services}
  </p>

  <h3 className="sectionTitle">
    {language === "NL"
      ? "Creatieve oplossingen"
      : "Creative solutions"}
    <br />
    {language === "NL"
      ? "voor moderne merken."
      : "for modern brands."}
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
          Premium visual strategy
          focused on cinematic
          branding and modern
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
    {language === "NL"
      ? "Selected Projects"
      : "Selected Projects"}
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
      {language === "NL"
        ? "BOUW JOUW DIGITALE"
        : "BUILD YOUR DIGITAL"}
      <br />
      {language === "NL"
        ? "AANWEZIGHEID"
        : "PRESENCE"}
    </h2>

    <p className="ctaDesc">
      Modern branding,
      cinematic visuals and
      premium digital presence
      for ambitious businesses.
    </p>

    <button className="ctaButton">
      {language === "NL"
        ? "Contacteer Noma"
        : "Contact Noma"}
    </button>
  </div>
</section>