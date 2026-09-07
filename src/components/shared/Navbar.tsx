import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Главная" },
  { path: "/services", label: "Услуги" },
  { path: "/products", label: "Продукты" },
  { path: "/about", label: "О нас" },
  { path: "/contacts", label: "Контакты" },
  { path: "/news", label: "Новости" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <button
        type="button"
        className="navbar-toggle"
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="navbar-toggle-icon" aria-hidden="true">☰</span>
        <span>Меню</span>
      </button>
      <ul id="main-navigation" className={`navbar-list ${isOpen ? "navbar-list--open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
