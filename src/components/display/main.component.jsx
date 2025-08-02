export function Main_display() {
  return (
    <>
      <div>
        <section className="nosotros" id="nosotros">
          <h2>Sobre Noka</h2>
          <p>
            Noka es una marca mexicana especializada en el diseño y venta de
            mobiliario contemporáneo. Nuestros productos combinan estética,
            durabilidad y accesibilidad para transformar espacios en hogares
            acogedores o ambientes de trabajo eficientes.
          </p>
        </section>

        <section className="testimonios" id="testimonios">
          <h2>Testimonios</h2>
          <blockquote>
            “La calidad es excelente y el servicio fue muy profesional. ¡Gracias
            Noka!” – Andrea M.
          </blockquote>
          <blockquote>
            “Mis muebles llegaron antes de lo esperado y superaron mis
            expectativas.” – Luis F.
          </blockquote>
        </section>

        <section className="contacto" id="contacto">
          <h2>Contáctanos</h2>
          <form>
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu correo electrónico" required />
            <textarea rows="5" placeholder="Escribe tu mensaje..." required />
            <button type="submit">Enviar mensaje</button>
          </form>
        </section>

        <footer>
          <p>&copy; 2025 Noka Mobiliario - Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
}
