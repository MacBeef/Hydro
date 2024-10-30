import React from 'react';
import { useTranslation } from 'react-i18next';
import HydroLogo from '/svg/Hydro-Logo-Horizontal.svg';

function NavBar({nav1, nav2, nav3}) {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar">
            <div className="navContent">
                <div className="navLogo">
                    <a href="https://www.hydro.com/en/en/" target='_blank'>
                        <img src={HydroLogo} alt="Hydro Logo"/>
                    </a>
                </div>

                <ul className="navList">
                    <li className="navItem"><a href={`#${nav1}`} className="navLink">{t(nav1)}</a></li>
                    <li className="navItem"><a href={`#${nav2}`} className="navLink">{t(nav2)}</a></li>
                    <li className="navItem"><a href={`#${nav3}`} className="navLink">{t(nav3)}</a></li>
                </ul>

                <div className="languageSwitcher">
                    <button onClick={() => changeLanguage('da')}>DA</button>
                    <button onClick={() => changeLanguage('en')}>EN</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
