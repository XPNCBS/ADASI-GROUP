import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { products } from "../products/productData";

export default function AboutProducts() {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="container">
        <p className="about-label">{t("aboutPage.assortment")}</p>
        <h2 className="title-medium">{t("aboutPage.productsTitle")}</h2>
        <div className="about-products-table-wrap">
          <table className="about-products-table">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">{t("aboutPage.productColumn")}</th>
                <th scope="col">{t("aboutPage.descriptionColumn")}</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.slug}>
                  <td>{String(index + 1).padStart(2, "0")}</td>
                  <th scope="row">{t(`catalog.items.${product.slug}.name`)}</th>
                  <td>{t(`catalog.items.${product.slug}.description`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="about-products-mobile">
          {products.map((product, index) => (
            <article className="about-product-card" key={product.slug}>
              <span className="about-product-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="title-small">
                {t(`catalog.items.${product.slug}.name`)}
              </h3>
              <p>{t(`catalog.items.${product.slug}.description`)}</p>
            </article>
          ))}
        </div>
        <Link className="about-button" to="/products">
          {t("aboutPage.allProducts")}
        </Link>
      </div>
    </section>
  );
}
