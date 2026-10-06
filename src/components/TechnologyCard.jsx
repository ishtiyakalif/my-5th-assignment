import React from "react";

function TechnologyCard({ technology, added, onAdd }) {
  return (
    <article className="technology-card">
      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="tech-icon"
        />

        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>

      <p className="card-description">
        {technology.description}
      </p>

      <div className="card-meta">
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="rating">★ {technology.rating}</span>
      </div>

      <button
        className={`add-button ${added ? "added" : ""}`}
        disabled={added}
        onClick={() => onAdd(technology)}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;