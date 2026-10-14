interface ServiceCardProps {
  bg: string;
  title: string;
  description?: string;
}

export default function ServiceCard({
  bg,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="service-card" style={{ backgroundImage: `url(${bg})` }}>
      <div className="service-card__content">
        <h2 className="service-card__title title-medium">{title}</h2>
        {description ? <p className="service-card__description">{description}</p> : null}
      </div>
    </div>
  );
}
