import "./products.css";

export default function Product({ nombre, descripcion }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <h3>{descripcion}</h3>
    </div>
  );
}
