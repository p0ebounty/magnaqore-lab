import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Layout.module.css';
import logo from '../assets/logo.png';
import CustomCursor from './CustomCursor';
import MagneticButton from './MagneticButton';

const navLinks = [
  { name: 'AI Operating System', path: '/ai-operating-system' },
  { name: 'Partnership', path: '/partnership' },
  { name: 'Case Studies', path: '/case-studies' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <div className={styles.wrapper}>
      <CustomCursor />
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <Link to="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={logo} alt="MagnaQore" style={{ height: '36px', width: 'auto', display: 'block' }} />
            MagnaQore
          </Link>

          <nav className={styles.desktopNav}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <MagneticButton>
              <a href="mailto:ina.nistoras@magnaqore.io" className="btn-primary">
                Partner With Us
              </a>
            </MagneticButton>
          </nav>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="mailto:ina.nistoras@magnaqore.io" className={styles.mobileNavLinkGold}>
              Partner With Us
            </a>
          </div>
        )}
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.footerBrand}>
            <h3>MagnaQore</h3>
            <p>AI Implementation & Transformation Company</p>
          </div>
          <div className={styles.footerLinks}>
            <Link to="/ai-operating-system">Capabilities</Link>
            <Link to="/partnership">Model</Link>
            <Link to="/case-studies">Experience</Link>
          </div>
        </div>
        <div className={`container ${styles.copyright}`}>
          <p>© {new Date().getFullYear()} MagnaQore USA & BSU QATAR. Strategic Partners Only.</p>
        </div>
      </footer>
    </div>
  );
}
