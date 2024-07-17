import React from 'react'
import "./contact.css"
export default function Contact() {
  return (
    <section className="contact" id="contact">
    <div className="contact-container">
      <h2>Contacto</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="asunto">Asunto:</label>
          <textarea id="asunto" name="asunto"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
  )
}

