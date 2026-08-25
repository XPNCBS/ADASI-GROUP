import React, { useState } from 'react';
import Title from '../components/shared/Title';
import NewsContactSection from '../components/news/NewsContactSection';
import NewsContent from '../components/news/NewsContent';
import NewsFooter from '../components/news/NewsFooter';
import type { NewsFormData } from '../components/news/shared/NewsForm';
import '../styles/pages/news.css';

export default function News() {
  const [formData, setFormData] = useState<NewsFormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  // Состояние для ховера кнопки
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      alert('Пожалуйста, укажите телефон!');
      return;
    }
    alert('Форма отправлена!');
  };

  return (
    <div className="news-page">
      <Title title="Новости" text="Пролистните ниже чтобы увидеть актуальные новости." />
      <NewsContent
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NewsContactSection formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      </NewsContent>
      <NewsFooter />
    </div>
  );
}