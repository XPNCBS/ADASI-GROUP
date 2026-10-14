import { aboutCertificates, aboutMaterials } from "./aboutData";

export default function AboutCertificates() {
  return (
    <section className="about-section">
      <div className="container about-columns">
        <div>
          <p className="about-label">Подтверждённое качество</p>
          <h2 className="title-medium">Сертификаты и материалы</h2>
          <p className="about-motivation">
            Работаем прозрачно и отвечаем за каждый этап поставки, чтобы ваше
            производство получало стабильное сырьё в нужные сроки.
          </p>
          <div className="about-certificate-islands">
            {aboutCertificates.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="about-materials-island">
          <h3 className="title-small">Материалы для партнёров</h3>
          <div className="about-material-links">
            {aboutMaterials.map((item) => (
              <a href="/contacts" key={item}>
                <span className="about-pdf-icon">pdf</span>
                <span>{item}</span>
                <b aria-hidden="true">→</b>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
