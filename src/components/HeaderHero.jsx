import HeroBackground from "../config/ui/HeroBackground";
import { assetUrl, NAV_ITEMS, PROFILE } from "../data/portfolioData";

export default function HeaderHero({
  theme,
  setTheme,
  menuOpen,
  setMenuOpen,
  heroBgImage,
  heroBgImageOpposite,
}) {
  return (
    <div
      id="top"
      className="hero-header-shell"
      style={{
        "--hero-bg-image": `url(${heroBgImage})`,
        "--hero-bg-image-opposite": `url(${heroBgImageOpposite})`,
      }}
    >
      {/* background only */}
      <div className="hero-bg-layer" aria-hidden="true">
        <HeroBackground />
      </div>

      {/* content above background */}
      <div className="hero-content-layer">
        <header className="header">
          <a
            className="logo"
            href="#top"
            aria-label="Go to top"
            data-tooltip="Go to top"
          >
            <img
              src={assetUrl(theme === "light" ? "img/HS.png" : "img/HSB.png")}
              alt="Houssam Salek monogram logo"
              className="logo-img"
              width="30"
            />
          </a>

          <div className="header-actions">
            <button
              className="btn ghost"
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "light" ? "" : "light")}
            >
              {theme === "light" ? "🌞" : "🌙"}
            </button>

            <button
              className="btn ghost menu-btn"
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          <div
            className={`mobile-menu ${menuOpen ? "open" : ""}`}
            aria-hidden={!menuOpen}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </header>

        <section className="hero">
          <h1 className="h">
            Houssam <span className="accent">Salek</span>
          </h1>

          <p className="tag">Computer Science Student</p>

          <div className="cta">
            <a className="btn" href="#projects" data-tooltip="See Projects">
              View Projects
            </a>

            <a
              className="btn ghost"
              href={PROFILE.cv}
              target="_blank"
              rel="noreferrer"
              data-tooltip="Download CV"
            >
              Download CV
            </a>

            <a className="btn ghost" href="#contact" data-tooltip="Contact Me">
              Contact Me
            </a>
          </div>

          <div className="meta">
            <div className="chip">📍 Morocco</div>
          </div>
        </section>
      </div>
    </div>
  );
}
