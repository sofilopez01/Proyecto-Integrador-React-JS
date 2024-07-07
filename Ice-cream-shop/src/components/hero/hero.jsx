import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="./assets/Hero.jpg" alt="portada" />
        <h1>Bienvenidos a Ice cream</h1>
        <p>¡Disfruta los mejores helados artesanales de la ciudad!</p>
        <button className="cta-button">Ver Sabores</button>
      </div>
    </section>
  );
}

export default Hero;
