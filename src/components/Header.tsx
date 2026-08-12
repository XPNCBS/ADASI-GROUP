import Logo from '../assets/logo';
import Navbar from './shared/Navbar';
import LanguageSwitcher from './shared/LanguageSwitcher';

export default function Header(){
    return(
        <>
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <div style={{ width: '50px', height: '50px' }}>
                        <Logo />
                    </div>
                    <span className="company-name">Adasi Group</span>
                </div>
                <Navbar />
                <LanguageSwitcher />
            </div>
        </header>
        </>
    )
}