import React, { useState } from 'react';

export default function News() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  // Состояние для ховера кнопки
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      alert('Пожалуйста, укажите телефон!');
      return;
    }
    alert('Форма отправлена!');
  };

  return (
    <div style={{ width: '100%', fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#fff' }}>
      
      {/* 1. ВЕРХНЯЯ СЕКЦИЯ (СИНИЙ ФОН И ЗАГОЛОВОК) */}
      <div style={{
        background: 'linear-gradient(90deg, #0d274d 0%, #1b4b82 100%)',
        color: '#ffffff',
        width: '100%',
        boxSizing: 'border-box',
        padding: '80px 10%'
      }}>
        <h1 style={{ fontSize: '38px', fontWeight: 'bold', margin: '0 0 15px 0', letterSpacing: '1px' }}>
          НОВОСТИ
        </h1>
        <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.7)', paddingLeft: '15px', fontSize: '14px', opacity: 0.9 }}>
          Все, о чем Вы можете узнать из нашей рассылки.
        </div>
      </div>

      {/* 2. ОСНОВНОЙ КОНТЕНТ */}
      <div style={{ padding: '40px 10%', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
        <span style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>
          ГРУППА ADASI
        </span>
        
        <h2 style={{ fontSize: '30px', margin: '10px 0 25px 0', color: '#1a1a1a', fontWeight: 'bold' }}>
          Новости
        </h2>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
          {/* Кнопка с ховером */}
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              backgroundColor: isHovered ? '#666666' : '#4CAF50', 
              color: '#ffffff', 
              border: 'none', 
              padding: '8px 20px', 
              borderRadius: '4px', 
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            За все время
          </button>
          <span style={{ color: '#888', fontSize: '14px' }}>Новостей пока нет.</span>
        </div>

        {/* Форма и Контакты */}
        <div>
          <h3 style={{ color: '#4CAF50', fontSize: '15px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
            СВЯЗАТЬСЯ С НАМИ
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
            
            {/* Контакты и цветные иконки */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={contactRowStyle}>
                <div style={{ ...iconCircleStyle, backgroundColor: '#38a3a5' }}></div>
                <div style={{ fontSize: '13px', color: '#444' }}>
                  <div>Тел.: (+60) 3 9766 8630</div>
                  <div>Факс: (+60) 3 9766 8631</div>
                </div>
              </div>

              <div style={contactRowStyle}>
                <div style={{ ...iconCircleStyle, backgroundColor: '#38a3a5' }}></div>
                <div style={{ fontSize: '13px', color: '#444' }}>info@adasigroup.com</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ ...iconCircleStyle, backgroundColor: '#38a3a5' }}></div>
                <div style={{ fontSize: '13px', color: '#444', lineHeight: '1.4' }}>
                  N-05-03, Pusat Perdagangan,<br />
                  Bandar Bukit Jalil, Куала-Лумпур, Малайзия, 57000
                </div>
              </div>

              <div style={contactRowStyle}>
                <div style={{ ...iconCircleStyle, backgroundColor: '#20a0e0' }}></div>
                <a href="https://t.me/your_username" target="_blank" rel="noreferrer" style={{ color: '#20a0e0', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Telegram</a>
              </div>

              <div style={contactRowStyle}>
                <div style={{ ...iconCircleStyle, backgroundColor: '#25D366' }}></div>
                <a href="https://wa.me/60397668630" target="_blank" rel="noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>WhatsApp</a>
              </div>

              <div style={contactRowStyle}>
                <div style={{ ...iconCircleStyle, background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>📷</div>
                <a href="https://instagram.com/your_account" target="_blank" rel="noreferrer" style={{ color: '#dc2743', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Instagram</a>
              </div>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input type="text" placeholder="Имя" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />
              <input type="tel" placeholder="Телефон *" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={inputStyle} />
              <input type="email" placeholder="Электронная почта" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} />
              <input type="text" placeholder="Название компании" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} style={inputStyle} />
              <textarea placeholder="Опишите ваши требования или задайте любые вопросы" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ ...inputStyle, resize: 'none' }} />

              <button type="submit" style={{ backgroundColor: '#2ba3e0', color: '#fff', border: 'none', padding: '12px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '5px' }}>
                Отправить
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* 3. ФУТЕР */}
      <footer style={{ backgroundColor: '#f5f5f5', borderTop: '1px solid #e5e5e5', padding: '40px 10%', fontSize: '12px', color: '#666' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div>
            <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>ПОДПИСАТЬСЯ НА НОВОСТИ</div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="email" placeholder="Введите свой Email" style={{ ...inputStyle, backgroundColor: '#fff', width: '220px' }} />
              <button style={{ backgroundColor: '#010101', color: '#fff', border: 'none', padding: '0 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                Подписаться
              </button>
            </div>
            <div style={{ marginTop: '20px', fontSize: '11px', color: '#999' }}>
              АВТОРСКОЕ ПРАВО © 2024 ГРУППА ADASI
            </div>
          </div>

          <div style={{ lineHeight: '1.8' }}>
            <div>🏢 Компания: ADASI GROUP SDN BHD / Пн - Пт: 10:00 - 18:00 / info@adasigroup.com</div>
            <div>📍 Адрес: N-05-03, Pusat Perdagangan, Bandar Bukit Jalil, Куала-Лумпур, Малайзия 57000</div>
            <div>📞 Тел.: (+60) 3 9766 8630 / Факс: (+60) 3 9766 8631</div>
          </div>
        </div>
      </footer>

    </div>
  );
}

const iconCircleStyle: React.CSSProperties = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  flexShrink: 0
};

const contactRowStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '12px' };

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9',
  fontSize: '13px',
  outline: 'none',
  boxSizing: 'border-box'
};