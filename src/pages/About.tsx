import { useState } from "react";
import Modal from "../components/shared/modal";
import Title from "../components/shared/Title";
import NewsContactSection from "../components/news/NewsContactSection";
import type { NewsFormData } from "../components/news/shared/NewsForm";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <Title title={t("pages.aboutTitle")} text={t("pages.contactText")} />
      <NewsContactSection
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />

      <button onClick={() => setIsModalOpen(true)} className="btn-primary">
        {t("pages.openModal")}
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>{t("pages.aboutCompany")}</h2>
        <p>{t("pages.modalText")}</p>
      </Modal>
    </div>
  );
}
