import ServiceCard from "../components/services/ServiceCard";
import Title from "../components/shared/Title";
import NewsContactSection from "../components/news/NewsContactSection";
import type { NewsFormData } from "../components/news/shared/NewsForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Services() {
  const { t } = useTranslation();
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
      alert(t("form.phoneRequired"));
      return;
    }
    alert(t("form.success"));
  };
  return (
    <div className="page">
      <Title title={t("pages.servicesTitle")} text={t("pages.servicesText")} />
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
