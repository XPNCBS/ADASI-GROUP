import Title from "../components/shared/Title";
import NewsContactSection from "../components/news/NewsContactSection";
import type { NewsFormData } from "../components/news/shared/NewsForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Products() {
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
      <div className="title-section">
        <Title
          title={t("pages.productsTitle")}
          text={t("pages.productsText")}
        />
        <NewsContactSection
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
