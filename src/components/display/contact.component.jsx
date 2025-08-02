export function Contact_display() {
  return (
    <>
      <div className="display-container">
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
