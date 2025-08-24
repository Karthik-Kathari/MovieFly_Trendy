import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="navbar">
      <div className="logo">🎥 Movie Maniac</div>
      <ul className="nav-links">
        <li>
          <a href="#popular">Popular</a>
        </li>
        <li>
          <a href="#top-rated">Top Rated</a>
        </li>
        <li>
          <a href="#upcoming">Upcoming</a>
        </li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            <i
              className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`}
            ></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
