import Title from "../components/shared/Title";
import NewsContactSection from "../components/news/NewsContactSection";
import type { NewsFormData } from "../components/news/shared/NewsForm";
import { useState } from "react";
export default function Contacts() {
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
        title="Связаться с нами"
        text="Обращайтесь к нам за любыми запросами, отзывами или возможностями сотрудничества."
      />
      <NewsContactSection
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
