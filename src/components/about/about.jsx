import React from "react";
import "./about.css";
export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>Sobre Nosotros</h2>
        <div className="about-section">
          <h3>Nuestra Historia</h3>
          <p>
            Heladería Deliciosa fue fundada en el corazón de Buenos Aires hace
            más de 20 años. Nuestro fundador, un apasionado por la gastronomía y
            los postres, decidió emprender un viaje para descubrir los secretos
            del helado perfecto. Después de estudiar con maestros heladeros en
            Italia y perfeccionar sus habilidades, abrió nuestra tienda con la
            misión de compartir su amor por el helado artesanal con el mundo.
          </p>
        </div>
        <div className="about-section">
          <h3>Beneficios</h3>
          <p>
            Comprar helados en Heladería Deliciosa es una experiencia única. Nos
            enorgullece ofrecer:
            <ul>
              <li>Helados elaborados con ingredientes frescos y naturales.</li>
              <li>
                Una amplia variedad de sabores, desde los clásicos hasta
                creaciones exclusivas.
              </li>
              <li>Un ambiente acogedor y familiar.</li>
              <li>
                Un compromiso con la calidad y la satisfacción del cliente.
              </li>
            </ul>
          </p>
        </div>
        <div className="about-section">
          <h3>Proceso de Elaboración Artesanal</h3>
          <p>
            Nuestro proceso de elaboración del helado es artesanal y cuidadoso.
            Utilizamos técnicas tradicionales combinadas con innovación para
            garantizar la mejor calidad. Cada helado es preparado con
            ingredientes seleccionados, sin aditivos ni conservantes
            artificiales. El resultado es un helado cremoso y lleno de sabor.
          </p>
        </div>
        {/* <div className="about-section">
          <h3>Atención al Cliente</h3>
          <p>
            En Heladería Deliciosa, valoramos a cada uno de nuestros clientes.
            Nos esforzamos por ofrecer un servicio amable y personalizado.
            Nuestro equipo está siempre dispuesto a ayudar y a asegurarse de que
            cada visita sea agradable y memorable. Creemos que la atención al
            detalle y el trato cordial son esenciales para crear una experiencia
            excepcional.
          </p>
        </div> */}
      </div>
    </section>
  );
}
