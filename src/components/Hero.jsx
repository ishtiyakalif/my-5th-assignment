import React from "react";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Build smarter. Ship faster.</p>
        <h1>
          Build Your Ideal
          <span>Development Stack</span>
        </h1>
        <p className="hero-description">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="hero-actions">
          <a href="#technologies" className="primary-button">
            Explore Technologies
          </a>
          <a href="#technologies" className="secondary-button">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-image-wrap">
        <img src="/assets/banner-stack.png" alt="Development stack illustration" />
      </div>
    </section>
  );
}

export default Hero;
