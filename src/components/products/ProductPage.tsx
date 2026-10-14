import { Link, Navigate, useParams } from "react-router-dom";
import { products } from "./productData";

export default function ProductPage() {
  const { slug } = useParams();
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
          Вернуться в каталог
        </Link>

        <article className="product-detail">
          <div className="product-detail__media">
            <img
              className="product-detail__image"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-detail__content">
            <p className="product-detail__eyebrow">Каталог продукции</p>
            <h1 className="product-detail__title title-large">{product.name}</h1>
            <p className="product-detail__description">{product.description}</p>

            <section
              className="product-specs"
              aria-labelledby="product-specs-title"
            >
              <h2
                className="product-specs__title title-medium"
                id="product-specs-title"
              >
                Характеристики
              </h2>
              {product.details.length > 0 ? (
                <ul className="product-specs__list">
                  {product.details.map((detail) => (
                    <li className="product-specs__item" key={detail}>
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="product-specs__empty">
                  Характеристики и фасовка уточняются по спецификации партии.
                </p>
              )}
            </section>

            <aside className="product-notes">
              <ul className="product-notes__list">
                <li className="product-notes__item">
                  Фактические характеристики и доступность зависят от продукта
                  и конкретной партии.
                </li>
                <li className="product-notes__item">
                  Изображение носит иллюстративный характер.
                </li>
              </ul>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}
