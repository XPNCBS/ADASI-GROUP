import ServiceCard from "../components/services/ServiceCard";
import Title from "../components/shared/Title";
import NewsContactSection from "../components/news/NewsContactSection";
import type { NewsFormData } from "../components/news/shared/NewsForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const services = [
  {
    title: "Доставка «под ключ»",
    description: "От завода до склада с полной логистической координацией.",
  },
  {
    title: "Мультимодальные перевозки",
    description: "Море, воздух, автотранспорт и железнодорожные перевозки.",
  },
  {
    title: "Экспедирование и морские услуги",
    description: "Аренда судов, портовые операции, закупка контейнеров и сопровождение грузов.",
  },
  {
    title: "Страхование грузов",
    description: "Защита поставок на всех этапах транспортировки.",
  },
  {
    title: "Расчёты в рублях",
    description: "Гибкие условия оплаты для российских и международных сделок.",
  },
  {
    title: "Складирование",
    description: "Безопасное хранение, управление запасами и кросс-докинг.",
  },
  {
    title: "Консультации и техподдержка",
    description: "Решение технологических задач и прикладные консультации.",
  },
  {
    title: "Разработка продуктов под заказ",
    description: "Индивидуальные решения и сопровождение разработок для клиента.",
  },
  {
    title: "Образцы и спецификации",
    description: "Быстрая отправка образцов, сертификатов и коммерческих предложений.",
  },
  {
    title: "Производство и наука",
    description: "Вертикально интегрированные операции и научные разработки в каучуке.",
  },
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
      <div className="service-cards">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            bg="/images/header-bg.webp"
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <NewsContactSection
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
