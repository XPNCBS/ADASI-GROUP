import { Link } from "react-router-dom";
import { aboutProducts } from "./aboutData";

export default function AboutProducts() {
  return (
    <section className="about-section">
      <div className="container">
        <p className="about-label">Ассортимент</p>
        <h2 className="title-medium">Продукты для пищевого производства</h2>
        <div className="about-products-table-wrap">
          <table className="about-products-table">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Продукт</th>
                <th scope="col">Описание</th>
              </tr>
            </thead>
            <tbody>
              {aboutProducts.map((product, index) => (
                <tr key={product.name}>
                  <td>{String(index + 1).padStart(2, "0")}</td>
                  <th scope="row">{product.name}</th>
                  <td>{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="about-products-mobile">
          {aboutProducts.map((product, index) => (
            <article className="about-product-card" key={product.name}>
              <span className="about-product-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="title-small">{product.name}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
        <Link className="about-button" to="/products">
          Вся продукция →
        </Link>
      </div>
    </section>
  );
}
