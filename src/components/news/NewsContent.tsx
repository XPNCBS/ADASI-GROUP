import type { ReactNode, MouseEventHandler } from 'react';
import NewsButton from './shared/NewsButton';

type NewsContentProps = {
  isHovered: boolean;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export default function NewsContent({ isHovered, onMouseEnter, onMouseLeave, children }: NewsContentProps) {
  return (
    <div className="news-content">
      <span className="news-eyebrow">ГРУППА ADASI</span>
      <h2 className="news-heading">Новости</h2>

      <div className="news-filter-row">
        <NewsButton
          className={`news-filter-button${isHovered ? ' news-filter-button--hovered' : ''}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          За все время
        </NewsButton>
        <span className="news-empty-state">Новостей пока нет.</span>
      </div>

      {children}
    </div>
  );
}