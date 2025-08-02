export function Product_display() {
  return (
    <div className="display-container">
      <section className="hero">
        <h1>Mobiliario con Estilo y Funcionalidad</h1>
      </section>

      <section id="productos">
        <h2>Catálogo</h2>
        <div className="productos">
          <div className="producto">
            <img
              src="https://images.unsplash.com/photo-1616627454661-6cd9425b0f99"
              alt="Silla moderna"
            />
            <h3>Silla Moderna</h3>
            <p>$1,290 MXN</p>
          </div>
          <div className="producto">
            <img
              src="https://images.unsplash.com/photo-1582582425171-f73d07c9c7b4"
              alt="Mesa madera"
            />
            <h3>Mesa de Madera</h3>
            <p>$3,890 MXN</p>
          </div>
          <div className="producto">
            <img
              src="https://images.unsplash.com/photo-1601979031925-0c8a8eeaf5a3"
              alt="Sofá gris"
            />
            <h3>Sofá Gris</h3>
            <p>$6,200 MXN</p>
          </div>
          <div className="producto">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Librero blanco"
            />
            <h3>Librero Blanco</h3>
            <p>$2,950 MXN</p>
          </div>
        </div>
      </section>
    </div>
  );
}
