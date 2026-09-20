import { aboutLogistics, aboutLogisticsBenefits } from "./aboutData";

export default function AboutLogistics() {
  return (
    <section className="about-section about-logistics">
      <div className="about-container">
        <p className="about-label">Поставка под контролем</p>
        <h2>От производителя до вашего предприятия</h2>
        <div className="about-route">
          {aboutLogistics.map((step, index) => (
            <div key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              {index < aboutLogistics.length - 1 && <b>→</b>}
            </div>
          ))}
        </div>
        <div className="about-benefit-islands">
          {aboutLogisticsBenefits.map((benefit, index) => (
            <div className="about-benefit-island" key={benefit}>
              <span>0{index + 1}</span>
              <strong>{benefit}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}