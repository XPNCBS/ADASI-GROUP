import type { ChangeEvent, FormEvent } from "react";
import NewsButton from "./NewsButton";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const handleChange =
    (field: keyof NewsFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: event.target.value });
    };

  return (
    <form onSubmit={handleSubmit} className="news-form">
      <input
        type="text"
        placeholder={t("form.name")}
        value={formData.name}
        onChange={handleChange("name")}
        className="news-form-input"
      />
      <input
        type="tel"
        placeholder={t("form.phone")}
        required
        value={formData.phone}
        onChange={handleChange("phone")}
        className="news-form-input"
      />
      <input
        type="email"
        placeholder={t("form.email")}
        value={formData.email}
        onChange={handleChange("email")}
        className="news-form-input"
      />
      <input
        type="text"
        placeholder={t("form.company")}
        value={formData.company}
        onChange={handleChange("company")}
        className="news-form-input"
      />
      <textarea
        placeholder={t("form.message")}
        rows={4}
        value={formData.message}
        onChange={handleChange("message")}
        className="news-form-input news-form-textarea"
      />
      <NewsButton type="submit" className="news-submit-button">
        {t("form.submit")}
      </NewsButton>
    </form>
  );
}
