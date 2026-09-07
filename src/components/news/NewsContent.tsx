import type { ReactNode } from "react";
import NewsCard from "./NewsCard";
type NewsContentProps = { children: ReactNode };

export default function NewsContent({
  children,
}: NewsContentProps) {
  return (
    <div className="news-content">
      <span className="news-eyebrow">ГРУППА ADASI</span>
      <h2 className="news-heading">Новости</h2>
      <div className="news-cards">
        <NewsCard imageSrc="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80" date="12.08.2026" title="ADASI GROUP расширяет логистические возможности" excerpt="Новые маршруты делают международную доставку еще удобнее." content="ADASI GROUP расширяет сеть логистических партнеров и открывает новые маршруты для клиентов. Это позволяет быстрее доставлять грузы между Азией, Европой и другими регионами, сохраняя прозрачность на каждом этапе." />
        <NewsCard imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80" date="28.07.2026" title="Оптимизируем поставки для бизнеса" excerpt="Команда подготовила новые решения для регулярных отправлений." content="Мы обновили процессы обработки регулярных отправлений: от консолидации грузов до финальной доставки. Новые решения помогают бизнесу планировать поставки точнее и контролировать расходы." />
        <NewsCard imageSrc="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80" date="09.07.2026" title="Поддержка на каждом этапе доставки" excerpt="Персональный менеджер всегда остается на связи с клиентом." content="Для каждого проекта ADASI GROUP назначает персонального менеджера. Он сопровождает заказ от получения документов до передачи груза и помогает быстро решать любые вопросы." />
      </div>

      {children}
    </div>
  );
}
