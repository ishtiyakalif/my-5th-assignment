import React from "react";
function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="brand">
        <img src="/assets/logo-text.png" alt="Dev Stack" />
      </a>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
}

export default Navbar;
