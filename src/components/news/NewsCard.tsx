interface NewsCardProps  {
  imageSrc: string;
};
export default function NewsCard({ imageSrc }: NewsCardProps) {
  return (
    <div className="news-card">
        <img src={imageSrc} alt="News" className="news-card-image" />
        <span className="news-card-date">ГРУППА ADASI</span>
        <span className="news-card-title">Новости</span>
        <div><button>like</button><button>dislike</button></div>
    </div>
  );
}
