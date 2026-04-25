import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Layout.module.css';
import logo from '../assets/logo.png';
import CustomCursor from './CustomCursor';
import MagneticButton from './MagneticButton';
import ContactModal from './ContactModal';
import LanguageSwitcher from './LanguageSwitcher';
import { useContactModal } from '../context/ContactContext';

const navLinks = [
  { labelKey: 'nav.aiOperatingSystem', path: '/ai-operating-system' },
  { labelKey: 'nav.partnership', path: '/partnership' },
  { labelKey: 'nav.caseStudies', path: '/case-studies' },
] as const;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { openContactModal } = useContactModal();
  const { t } = useTranslation();

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
      <ContactModal />
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <Link to="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={logo} alt={t('brand.logoAlt')} style={{ height: '36px', width: 'auto', display: 'block' }} />
            {t('brand.name')}
          </Link>

          <nav className={styles.desktopNav}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <MagneticButton>
              <button onClick={openContactModal} className="btn-primary" style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
                {t('cta.partnerWithUs')}
              </button>
            </MagneticButton>
          </nav>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
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
                {t(link.labelKey)}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => { setIsMenuOpen(false); openContactModal(); }}
              className={styles.mobileNavLinkGold}
              style={{ textAlign: 'left', width: '100%', fontFamily: 'inherit' }}
            >
              {t('cta.partnerWithUs')}
            </button>
          </div>
        )}
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.footerBrand}>
            <h3>{t('brand.name')}</h3>
            <p>{t('footer.tagline')}</p>
          </div>
          <div className={styles.footerLinks}>
            <Link to="/ai-operating-system">{t('footer.capabilities')}</Link>
            <Link to="/partnership">{t('footer.model')}</Link>
            <Link to="/case-studies">{t('footer.experience')}</Link>
          </div>
        </div>
        <div className={`container ${styles.copyright}`}>
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>

      <LanguageSwitcher />
    </div>
  );
}
