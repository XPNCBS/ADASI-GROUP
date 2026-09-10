import type { FormEvent } from "react";
import ContactItem from "./shared/ContactItem";
import NewsForm, { type NewsFormData } from "./shared/NewsForm";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
type NewsContactSectionProps = {
  formData: NewsFormData;
  setFormData: (formData: NewsFormData) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function NewsContactSection({
  formData,
  setFormData,
  handleSubmit,
}: NewsContactSectionProps) {
  return (
    <div className="news-contact-section">
      <h3 className="news-contact-title">СВЯЗАТЬСЯ С НАМИ</h3>

      <div className="news-contact-grid">
        <div className="news-contact-list">
          <ContactItem
            iconClassName="news-contact-icon--teal news-contact-icon--phone "
            icon={<FaPhone size={20} />}
          >
            <div className="news-contact-text">
              <div>Тел.: (+60) 3 9766 8630</div>
              <div>Факс: (+60) 3 9766 8631</div>
            </div>
          </ContactItem>

          <ContactItem
            iconClassName="news-contact-icon--teal news-contact-icon--email"
            icon={<MdPlace size={20} />}
          >
            <div className="news-contact-text">info@adasigroup.com</div>
          </ContactItem>

          <ContactItem
            iconClassName="news-contact-icon--teal news-contact-icon--address"
            className="news-contact-item news-contact-item--address"
            icon={<HiMiniBuildingOffice size={20} />}
          >
            <div className="news-contact-text news-contact-text--address">
              N-05-03, Pusat Perdagangan,
              <br />
              Bandar Bukit Jalil, Куала-Лумпур, Малайзия, 57000
            </div>
          </ContactItem>

          <ContactItem iconClassName="news-contact-icon--telegram">
            <a
              href="https://t.me/your_username"
              target="_blank"
              rel="noreferrer"
              className="news-contact-link news-contact-link--telegram"
            >
              Telegram
            </a>
          </ContactItem>

          <ContactItem iconClassName="news-contact-icon--whatsapp">
            <a
              href="https://wa.me/60397668630"
              target="_blank"
              rel="noreferrer"
              className="news-contact-link news-contact-link--whatsapp"
            >
              WhatsApp
            </a>
          </ContactItem>

          <ContactItem iconClassName="news-contact-icon--instagram">
            <a
              href="https://instagram.com/your_account"
              target="_blank"
              rel="noreferrer"
              className="news-contact-link news-contact-link--instagram"
            >
              Instagram
            </a>
          </ContactItem>
        </div>

        <NewsForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
