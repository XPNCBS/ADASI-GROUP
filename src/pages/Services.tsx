import ServiceCard from "../components/services/serviceCard";
import Title from "../components/shared/Title";
export default function Services() {
  return (
    <div className="page">
      <Title
        title="Услуги"
        text="В ADASI Group Sdn. Bhd. мы гордимся тем, что предлагаем комплексную услугу доставки. От момента получения до отправки каждая деталь тщательно продумана, что гарантирует бесперебойную доставку ваших товаров по назначению."
      />
      <div className="service-cards">
        <ServiceCard bg="" title=""/>
      </div>
    </div>
  );
}
