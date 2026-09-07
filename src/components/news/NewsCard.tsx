import Logo from "../../assets/logo";
import { useState } from "react";
import Modal from "../shared/modal";

interface NewsCardProps  {
  imageSrc: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
};
export default function NewsCard({ imageSrc, date, title, excerpt, content }: NewsCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className="news-card" onClick={() => setIsOpen(true)}>
        <img src={imageSrc} alt="" className="news-card-image" />
        <div className="news-card-meta"><Logo size={34} /><span className="news-card-date">{date}</span></div>
        <div className="news-card-copy"><h3>{title}</h3><p>{excerpt}</p></div>
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <img src={imageSrc} alt="" className="news-modal-image" />
        <h2>{title}</h2><p className="news-modal-date">{date}</p><p>{content}</p>
      </Modal>
    </>
  );
}
