import { Link } from "react-router-dom";
import { products } from "./productData";

export default function Catalog() {
  return (
    <div className="catalog">
      <div className="container">
        <h2 className="catalog-title title-medium">Каталог продукции</h2>
        <ul className="catalog-list">
          {products.map((product) => (
            <li key={product.slug} className="catalog-item">
              <Link
                className="catalog-item__link"
                to={`/products/${product.slug}`}
              >
                <h3 className="catalog-item-title title-small">{product.name}</h3>
                <img
                  src={product.image}
                  alt={product.name}
                  className="catalog-item-image"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
