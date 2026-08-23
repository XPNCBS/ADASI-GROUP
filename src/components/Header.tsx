import { useEffect, useState } from 'react';
import Logo from '../assets/logo';
import Navbar from './shared/Navbar';
import LanguageSwitcher from './shared/LanguageSwitcher';

export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateHeaderState = () => {
            const homeNav = document.querySelector<HTMLElement>('.home-nav');
            const header = document.querySelector<HTMLElement>('.header');

            if (!homeNav || !header) {
                setIsScrolled(true);
                return;
            }

            setIsScrolled(
                homeNav.getBoundingClientRect().top <= header.getBoundingClientRect().bottom,
            );
        };

        updateHeaderState();
        window.addEventListener('scroll', updateHeaderState, { passive: true });
        window.addEventListener('resize', updateHeaderState);

        return () => {
            window.removeEventListener('scroll', updateHeaderState);
            window.removeEventListener('resize', updateHeaderState);
        };
    }, []);

    return(
        <>
        <header className={`header${isScrolled ? ' header--scrolled' : ''}`}>
            <div className="header-container">
                <div className="header-logo">
                    <div style={{ width: '50px', height: '50px' }}>
                        <Logo />
                    </div>
                    <span className="company-name">ADASI GROUP</span>
                </div>
                <Navbar />
                <LanguageSwitcher />
            </div>
        </header>
        </>
    )
}