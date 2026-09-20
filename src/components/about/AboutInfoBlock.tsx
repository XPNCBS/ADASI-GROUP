export default function AboutMainInfo() {
  return (
    <section className="about-info-block" aria-labelledby="about-info-title">
      <div className="about-info-block__image-wrap">
        <img
          className="about-info-block__image"
          src="/images/about-team.jpg"
          alt="Команда ADASI Group на встрече с партнёрами"
          onError={(event) => {
            event.currentTarget.src = "/images/mainPageBg.webp";
          }}
        />
        <span className="about-info-block__caption">Команда ADASI Group</span>
      </div>
      <div className="about-info-block__content">
        <p className="about-label">О нас</p>
        <h2 id="about-info-title">Про ADASI Group Sdn. Bhd.</h2>
        <div className="about-info-block__copy">
          <p>
            Основанная в 2008 году, ADASI Group находится на переднем крае
            инноваций и совершенства. Наша приверженность предоставлению
            первоклассных услуг и продуктов позиционирует нас как лидера в
            отрасли. Объединяя опытных профессионалов и молодые таланты, мы
            привносим уникальный подход в каждый проект, за который берёмся.
          </p>
          <p>
            Наши основные ценности вращаются вокруг честности,
            удовлетворённости клиентов и устойчивого роста. Мы верим в
            установление прочных отношений с нашими клиентами, понимание их
            потребностей и достижение результатов, превосходящих их ожидания.
            Наше портфолио охватывает различные отрасли, демонстрируя нашу
            универсальность и стремление к совершенству.
          </p>
          <p>
            В ADASI Group мы не просто бизнес, мы семья. Наша команда стремится
            к постоянному обучению и росту, гарантируя, что мы будем опережать
            отраслевые тенденции и инновации. Мы гордимся нашим наследием и с
            уверенностью смотрим в будущее.
          </p>
        </div>
      </div>
    </section>
  );
}