export default function Home() {
  return (
    <div className="page">
      <div className="container">
        {" "}
        <div className="home-nav">
          <h1 className="home-nav__title">ADASI GROUP</h1>
          <p className="home-nav__description">
            Товары и услуги — всё в одном месте
          </p>
          <div className="home-nav__buttons">
            <a href="/products" className="home-nav__button">
              Товары
            </a>
            <a href="/services" className="home-nav__button">
              Услуги
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
