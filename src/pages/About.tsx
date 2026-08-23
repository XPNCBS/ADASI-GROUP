import { useState } from 'react';
import Modal from "../components/shared/modal";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="page about-page">
      <h1 className="page-title">О нас</h1>
      <p>Информация о компании Adasi Group</p>
      
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
