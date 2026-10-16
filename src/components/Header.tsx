import { useEffect } from "react";
import Logo from "../assets/logo";
import Navbar from "./shared/Navbar";
import LanguageSwitcher from "./shared/LanguageSwitcher";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const [isScrolled, setScrolled] = useState(false);
  const isProductPage =
    pathname.startsWith("/products/") && pathname !== "/products/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`header ${isScrolled ? "scrolled" : ""} ${isProductPage ? "header--product" : ""}`}
      >
        <div className="container">
          <div className="header-logo">
            <div style={{ width: "50px", height: "50px" }}>
              <Logo />
            </div>
            <span className="company-name">ADASI GROUP</span>
          </div>
          <Navbar />
          <LanguageSwitcher />
        </div>
      </header>
    </>
  );
}
