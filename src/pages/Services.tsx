import ServiceCard from "../components/services/ServiceCard";
import Title from "../components/shared/Title";
import NewsContactSection from "../components/news/NewsContactSection";
import type { NewsFormData } from "../components/news/shared/NewsForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const services = [
  "turnkeyDelivery",
  "multimodalTransport",
  "freightForwarding",
  "cargoInsurance",
  "rublePayments",
  "warehousing",
  "consulting",
  "customDevelopment",
  "samplesAndSpecifications",
  "rubberResearch",
];

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
      <div className="container py-5">
        <span className="title-small text-[#4caf50]">ADASI Group</span>
        <h2 className="title-medium">{t("pages.ourServices")}</h2>
        <div className="service-cards ">
        {services.map((service) => (
          <ServiceCard
            key={service}
            bg="/images/header-bg.webp"
            title={t(`services.cards.${service}.title`)}
          />
        ))}
      </div>
      </div>

      <NewsContactSection
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
