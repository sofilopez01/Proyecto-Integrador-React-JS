import React from "react";
import { flavors } from "./flavors";
import Product from "./product";
import "./products.css";

export default function Products() {
  // Agrupar sabores por categoría
  const groupedFlavors = flavors.reduce((groups, flavor) => {
    const category = flavor.categoria;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(flavor);
    return groups;
  }, {});

  return (
    <div id="products-container">
      {Object.keys(groupedFlavors).map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="category-products">
            {groupedFlavors[category].map((prod) => (
              <Product
                key={prod.id}
                nombre={prod.nombre}
                descripcion={prod.descripcion}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
