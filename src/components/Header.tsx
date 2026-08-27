import { useEffect } from "react";
import Logo from "../assets/logo";
import initializeHeaderController from "../controllers/headerController";
import Navbar from "./shared/Navbar";
import LanguageSwitcher from "./shared/LanguageSwitcher";

export default function Header() {
  useEffect(() => {
    return initializeHeaderController();
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-container">
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
