import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { products } from "./productData";

export default function Catalog() {
  const { t } = useTranslation();

  return (
    <div className="catalog">
      <div className="container">
        <h2 className="catalog-title title-medium">{t("catalog.title")}</h2>
        <ul className="catalog-list">
          {products.map((product) => (
            <li key={product.slug} className="catalog-item">
              <Link
                className="catalog-item__link"
                to={`/products/${product.slug}`}
              >
                <h3 className="catalog-item-title title-small">
                  {t(`catalog.items.${product.slug}.name`)}
                </h3>
                <img
                  src={product.image}
                  alt={t(`catalog.items.${product.slug}.name`)}
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
