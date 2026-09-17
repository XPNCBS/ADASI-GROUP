import Title from "../components/shared/Title";
import NewsContactSection from "../components/news/NewsContactSection";
import type { NewsFormData } from "../components/news/shared/NewsForm";
import { useState } from "react";
export default function Products() {
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
      <div className="title-section">
        <Title
          title="Наши Продукты"
          text="Исследуйте наш широкий ассортимент продукции , отобранной с учетом самых высоких стандартов качества."
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
