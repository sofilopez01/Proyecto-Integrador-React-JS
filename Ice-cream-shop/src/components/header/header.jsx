import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Ice cream</div>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#flavors">Sabores</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
