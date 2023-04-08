import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <i className={`${styles.icon} fas fa-coffee`} style={{ fontSize: '1rem' }}>
          Beatles Kafe
        </i>
        <h1 className={styles.title}></h1>
      </div>
      <ul className={`${styles.navItems} ${showMenu ? styles.active : ''}`}>
        <li className={styles.navItem}>
          <Link
            to="Hero"
            className={styles.navLink}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleCloseMenu} 
          >
            Anasayfa
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="Testimonial"
            className={styles.navLink}
            offset={1}
            smooth={true}
            duration={500}
            onClick={handleCloseMenu} 
          >
            Hakkımızda
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="Menu"
            className={styles.navLink}
            offset={-195}
            smooth={true}
            duration={500}
            onClick={handleCloseMenu} 
          >
            Menü
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="Contact"
            className={styles.navLink}
            smooth={true}
            offset={10}
            duration={500}
            onClick={handleCloseMenu} 
          >
            İletişim
          </Link>
        </li>
      </ul>
      <div className={styles.hamburger}>
        <button onClick={handleMenuClick}>
          {showMenu ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

