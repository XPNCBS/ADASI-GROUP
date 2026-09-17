import { useState } from "react";
import Modal from "../components/shared/modal";
import Title from "../components/shared/Title";
import NewsContactSection from "../components/news/NewsContactSection";
import type { NewsFormData } from "../components/news/shared/NewsForm";
export default function About() {
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

      <button onClick={() => setIsModalOpen(true)} className="btn-primary">
        Открыть модальное окно
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>О компании Adasi Group</h2>
        <p>Это модальное окно с дополнительной информацией о нашей компании.</p>
      </Modal>
    </div>
  );
}
