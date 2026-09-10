import Logo from "../../assets/logo";
import { useState } from "react";
import Modal from "../shared/modal";

interface NewsCardProps {
  imageSrc: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
}
export default function NewsCard({
  imageSrc,
  date,
  title,
  excerpt,
  content,
}: NewsCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
<button
  type="button"
  className="news-card"
  onClick={() => setIsOpen(true)}
>
  <img
    src={imageSrc}
    alt=""
    className="news-card__image"
  />

  <div className="news-card__content">
    <div className="news-card__date">
      {date}
    </div>

    <div className="news-card__heading">
      <Logo size={42} />
      <h3 className="news-card__title">{title}</h3>
    </div>

    <p className="news-card__excerpt">
      {excerpt}<span className="news-card__more">подробнее...</span>
    </p>


  </div>
</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <img src={imageSrc} alt="" className="news-modal-image" />
        <h2>{title}</h2>
        <p className="news-modal-date">{date}</p>
        <p>{content}</p>
      </Modal>
    </>
  );
}
