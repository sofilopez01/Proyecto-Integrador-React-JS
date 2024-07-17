import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header({ isOpen, toggleMenu }) {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Ice cream</div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="about" onClick={toggleMenu}>Nosotros</Link>
          </li>
          <li>
            <Link to="products" onClick={toggleMenu}>Sabores</Link>
          </li>
          <li>
            <Link to="contact" onClick={toggleMenu}>Contactanos</Link>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-line ${isOpen ? "open" : ""}`}></div>
          <div className={`menu-icon-line ${isOpen ? "open" : ""}`}></div>
          <div className={`menu-icon-line ${isOpen ? "open" : ""}`}></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

