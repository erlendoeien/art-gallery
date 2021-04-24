// eslint-disable-next-line
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../ThemeProvider';
import styles from './Navbar.module.css';
import SettingImg from '../../svg/settings.png';
import Settings from '../Settings';

const Navbar: React.FC = () => {
    const { backgroundColor, navColor, boxShadow, fontColor } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [navbarClass, setNavbarClass] = useState('');
    const [isClicked, setIsClicked] = React.useState(false);

    function toggleHamburger() {
        setIsOpen(!isOpen);
        if (isOpen) {
            setNavbarClass('');
        } else {
            setNavbarClass('toggled');
        }
    }
    const toggleSettings = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div
            className={styles.navbar}
            style={{
                backgroundColor: navColor,
                boxShadow,
                height: isOpen ? 'fit-content' : '30px'
            }}
        >
            <div
                role="button"
                tabIndex={0}
                id={styles.navIcon}
                className={isOpen ? styles.open : ''}
                onClick={toggleHamburger}
            >
                <span style={{ background: fontColor }} />
                <span style={{ background: fontColor }} />
                <span style={{ background: fontColor }} />
            </div>
            <div className={styles.settingsBtn}>
                <input
                    onClick={toggleSettings}
                    type="image"
                    src={SettingImg}
                    alt="instillinger-knapp"
                    height="30px"
                />
            </div>
            <div
                className={isClicked ? styles.settings : styles.noSettings}
                style={{ backgroundColor }}
            >
                <Settings />
            </div>
            <ul className={`${styles.navLinks} ${styles[navbarClass]}`}>
                <li>
                    <NavLink
                        to="/"
                        style={{ color: fontColor }}
                        className={styles.nav_link}
                        onClick={toggleHamburger}
                        activeClassName={styles.activeNavLink}
                        exact
                    >
                        Forside
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/utstilling"
                        style={{ color: fontColor }}
                        className={styles.nav_link}
                        onClick={toggleHamburger}
                        activeClassName={styles.activeNavLink}
                    >
                        Utstilling
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/favoritter"
                        style={{ color: fontColor }}
                        className={styles.nav_link}
                        onClick={toggleHamburger}
                        activeClassName={styles.activeNavLink}
                    >
                        Favoritter
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
