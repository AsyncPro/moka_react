// componentes
import { Card } from "../cards/card.component";
import { productosTrainee } from "../../data/trainne/productos.data.js";

export function Product_display() {
  console.log(productosTrainee);
  return (
    <div className="display-container">
      <div className="grid-container">
        {productosTrainee.map((elemento) => (
          <Card key={elemento.id} producto={elemento} />
        ))}
      </div>
    </div>
  );
}
