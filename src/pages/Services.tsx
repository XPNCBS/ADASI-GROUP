import ServiceCard from "../components/services/ServiceCard";
import Title from "../components/shared/Title";
import NewsContactSection from "../components/news/NewsContactSection";
import type { NewsFormData } from "../components/news/shared/NewsForm";
import { useState } from "react";
export default function Services() {
  const [formData, setFormData] = useState<NewsFormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      alert("Пожалуйста, укажите телефон!");
      return;
    }
    alert("Форма отправлена!");
  };
  return (
    <div className="page">
      <Title
        title="Услуги"
        text="В ADASI Group Sdn. Bhd. мы гордимся тем, что предлагаем комплексную услугу доставки. От момента получения до отправки каждая деталь тщательно продумана, что гарантирует бесперебойную доставку ваших товаров по назначению."
      />
      <div className="service-cards">
        <ServiceCard
          bg="/images/header-bg.webp"
          title="Международная доставка"
        />
        <ServiceCard
          bg="/images/header-bg.webp"
          title="Логистика для бизнеса"
        />
        <ServiceCard bg="/images/header-bg.webp" title="Сопровождение грузов" />
      </div>
      <NewsContactSection
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
