import "../../style/card.css";

export function Card({ producto }) {
  return (
    <div className="card">
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>
        <strong>Precio:</strong> ${producto.precio}
      </p>
      <p>
        <strong>Stock:</strong> {producto.stock} unidades
      </p>
      <img
        src="https://images.icon-icons.com/37/PNG/512/productapplication_producto_3010.png"
        alt="logo"
      />
      <button>Agregar al carrito</button>
    </div>
  );
}
