import NewsButton from './shared/NewsButton';

export default function NewsFooter() {
  return (
    <footer className="news-footer">
      <div className="news-footer-grid">
        <div>
          <div className="news-subscribe-title">ПОДПИСАТЬСЯ НА НОВОСТИ</div>
          <div className="news-subscribe-row">
            <input type="email" placeholder="Введите свой Email" className="news-form-input news-subscribe-input" />
            <NewsButton className="news-subscribe-button">Подписаться</NewsButton>
          </div>
          <div className="news-copyright">АВТОРСКОЕ ПРАВО © 2024 ГРУППА ADASI</div>
        </div>

        <div className="news-footer-info">
          <div>🏢 Компания: ADASI GROUP SDN BHD / Пн - Пт: 10:00 - 18:00 / info@adasigroup.com</div>
          <div>📍 Адрес: N-05-03, Pusat Perdagangan, Bandar Bukit Jalil, Куала-Лумпур, Малайзия 57000</div>
          <div>📞 Тел.: (+60) 3 9766 8630 / Факс: (+60) 3 9766 8631</div>
        </div>
      </div>
    </footer>
  );
}