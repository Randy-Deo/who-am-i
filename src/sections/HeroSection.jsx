export function HeroSection() {
  return (
    <div className="home-hero-brand">
      <div className="hero hero--stacked">
        <div className="hero-left">
          <img
            src={`${import.meta.env.BASE_URL}randy-profile.png`}
            alt="Randy Deo"
            className="hero-photo"
          />
        </div>
        <div className="home-hero-text">
          <h1 className="hero-title">
            <span className="hero-title-line">
              Hi, I&apos;m Randy<span className="hero-fullstop">.</span>
            </span>
            <span className="hero-title-line hero-title-gradient">
              Software Developer<span className="hero-fullstop"> | </span>QA Engineer
            </span>
          </h1>
          <p className="hero-tagline">
            I create quality-driven solutions with a developer&apos;s mindset and a tester&apos;s
            precision, delivering results trusted by teams and users.
          </p>
        </div>
      </div>
    </div>
  )
}
