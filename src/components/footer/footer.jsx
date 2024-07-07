import React from 'react';
import './footer.css';

function footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Ice cream. Todos los derechos reservados.</p>
      <ul className="footer-links">
        <li><a href="#privacy">Política de Privacidad</a></li>
        <li><a href="#terms">Términos de Servicio</a></li>
      </ul>
    </footer>
  );
}

export default footer;
