import type { ChangeEvent, FormEvent } from "react";
import NewsButton from "./NewsButton";

export type NewsFormData = {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
};

type NewsFormProps = {
  formData: NewsFormData;
  setFormData: (formData: NewsFormData) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function NewsForm({
  formData,
  setFormData,
  handleSubmit,
}: NewsFormProps) {
  const handleChange =
    (field: keyof NewsFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: event.target.value });
    };

  return (
    <form onSubmit={handleSubmit} className="news-form">
      <input
        type="text"
        placeholder="Имя"
        value={formData.name}
        onChange={handleChange("name")}
        className="news-form-input"
      />
      <input
        type="tel"
        placeholder="Телефон *"
        required
        value={formData.phone}
        onChange={handleChange("phone")}
        className="news-form-input"
      />
      <input
        type="email"
        placeholder="Электронная почта"
        value={formData.email}
        onChange={handleChange("email")}
        className="news-form-input"
      />
      <input
        type="text"
        placeholder="Название компании"
        value={formData.company}
        onChange={handleChange("company")}
        className="news-form-input"
      />
      <textarea
        placeholder="Опишите ваши требования или задайте любые вопросы"
        rows={4}
        value={formData.message}
        onChange={handleChange("message")}
        className="news-form-input news-form-textarea"
      />
      <NewsButton type="submit" className="news-submit-button">
        Отправить
      </NewsButton>
    </form>
  );
}
