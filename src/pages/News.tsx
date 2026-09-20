import React, { useState } from "react";
import Title from "../components/shared/Title";
import NewsContactSection from "../components/news/NewsContactSection";
import NewsContent from "../components/news/NewsContent";
import NewsFooter from "../components/news/NewsFooter";

import type { NewsFormData } from "../components/news/shared/NewsForm";
import { useTranslation } from "react-i18next";

export default function News() {
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
        <Title title={t("pages.newsTitle")} text={t("pages.newsText")} />
      </div>
      <NewsContent>
        <NewsContactSection
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </NewsContent>
      <NewsFooter />
    </div>
  );
}
