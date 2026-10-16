import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { products } from "./productData";

export default function ProductPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <main className="product-page">
      <div className="container product-page__container">
        <Link className="product-page__back" to="/products">
          <span className="product-page__back-arrow" aria-hidden="true">
            ←
          </span>
          {t("catalog.backToCatalog")}
        </Link>

        <article className="product-detail">
          <div className="product-detail__media">
            <img
              className="product-detail__image"
              src={product.image}
              alt={t(`catalog.items.${product.slug}.name`)}
            />
          </div>

          <div className="product-detail__content">
            <p className="product-detail__eyebrow">{t("catalog.title")}</p>
            <h1 className="product-detail__title title-large">
              {t(`catalog.items.${product.slug}.name`)}
            </h1>
            <p className="product-detail__description">
              {t(`catalog.items.${product.slug}.description`)}
            </p>

            <section
              className="product-specs"
              aria-labelledby="product-specs-title"
            >
              <h2
                className="product-specs__title title-medium"
                id="product-specs-title"
              >
                {t("catalog.specifications")}
              </h2>
              {product.details.length > 0 ? (
                <ul className="product-specs__list">
                  {product.details.map((_, index) => (
                    <li className="product-specs__item" key={`${product.slug}-${index}`}>
                      {t(`catalog.items.${product.slug}.details.${index}`)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="product-specs__empty">
                  {t("catalog.specificationsOnRequest")}
                </p>
              )}
            </section>

            <aside className="product-notes">
              <ul className="product-notes__list">
                <li className="product-notes__item">
                  {t("catalog.productNotes.accuracy")}
                </li>
                <li className="product-notes__item">
                  {t("catalog.productNotes.image")}
                </li>
              </ul>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}
