import { Link,useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navItems = [
    { path: "/", label: t("header.main") },
    { path: "/services", label: t("header.services") },
    { path: "/products", label: t("header.products") },
    { path: "/about", label: t("header.about") },
    { path: "/contacts", label: t("header.contacts") },
    { path: "/news", label: t("header.news") },
  ];
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <button
        type="button"
        className="navbar-toggle"
        aria-label={t("header.menu")}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="navbar-toggle-icon" aria-hidden="true">
          ☰
        </span>
        <span>{t("header.menu")}</span>
      </button>
      <ul
        id="main-navigation"
        className={`navbar-list ${isOpen ? "navbar-list--open" : ""}`}
      >
        {navItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} onClick={() => setIsOpen(false)} className={`nav-link ${location.pathname === item.path ? "nav-link--active" : ""}`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
