import { useState } from "react";
import Modal from "../components/shared/modal";
import Title from "../components/shared/Title";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="page">
      <Title
        title="Связаться с нами"
        text="Обращайтесь к нам за любыми запросами, отзывами или возможностями сотрудничества."
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
