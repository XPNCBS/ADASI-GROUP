import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/services', label: 'Услуги' },
  { path: '/products', label: 'Продукты' },
  { path: '/about', label: 'О нас' },
  { path: '/contacts', label: 'Контакты' },
  { path: '/news', label: 'Новости' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
