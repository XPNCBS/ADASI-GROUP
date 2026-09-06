import Logo from "../../assets/logo";

interface NewsCardProps  {
  imageSrc: string;
  data: string;
};
export default function NewsCard({ imageSrc,data }: NewsCardProps) {

  return (
    <div className="news-card">
        <img src={imageSrc} alt="News" className="news-card-image" />
        <div><Logo/><span className="news-card-date">{data}</span></div>
        
        
    </div>
  );
}
