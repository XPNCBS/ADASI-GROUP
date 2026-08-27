import type { ReactNode, MouseEventHandler } from "react";
import NewsButton from "./shared/NewsButton";
import NewsCard from "./NewsCard";
type NewsContentProps = {
  isHovered: boolean;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export default function NewsContent({
  
  children,
}: NewsContentProps) {
  return (
    <div className="news-content">
      <span className="news-eyebrow">ГРУППА ADASI</span>
      <h2 className="news-heading">Новости</h2>
    <NewsCard imageSrc="https://avatars.mds.yandex.net/i?id=c3f314bad82a349db439c83f9d6e8a773b26cc8d-12508610-images-thumbs&n=13" />
      <div className="news-filter-row">
       

        <span className="news-empty-state">Новостей пока нет.</span>
      </div>

      {children}
    </div>
  );
}
