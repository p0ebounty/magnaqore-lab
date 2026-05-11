import React, { useEffect, useId } from 'react';
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
  { labelKey: 'nav.clients', path: '/clients' },
  { labelKey: 'nav.caseStudies', path: '/case-studies' },
] as const;

const footerLinks = [
  { labelKey: 'footer.capabilities', path: '/ai-operating-system' },
  { labelKey: 'footer.model', path: '/partnership' },
  { labelKey: 'footer.clients', path: '/clients' },
  { labelKey: 'footer.experience', path: '/case-studies' },
] as const;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const mobileMenuId = useId();
  const location = useLocation();
  const { openContactModal } = useContactModal();
  const { t } = useTranslation();
  const hideNavigationLinks = location.pathname === '/clients';
  const visibleFooterLinks = location.pathname === '/clients'
    ? footerLinks.filter(link => link.path === '/case-studies')
    : location.pathname === '/case-studies'
      ? footerLinks.filter(link => link.path === '/clients')
      : footerLinks;
  const isClientsPage = location.pathname === '/clients';

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
            {!hideNavigationLinks
              ? navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                >
                  {t(link.labelKey)}
                </Link>
              ))
              : null}
            <MagneticButton>
              {isClientsPage ? (
                <a
                  href="https://cal.com/ina.nistoras/consultation"
                  className="btn-primary"
                  style={{ fontFamily: 'inherit', fontSize: 'inherit' }}
                >
                  Book Call
                </a>
              ) : (
                <button onClick={openContactModal} className="btn-primary" style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
                  {t('cta.partnerWithUs')}
                </button>
              )}
            </MagneticButton>
          </nav>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(open => !open)}
            aria-controls={mobileMenuId}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </header>

      {isMenuOpen ? (
        <>
          <button
            type="button"
            className={styles.mobileNavBackdrop}
            onClick={() => setIsMenuOpen(false)}
            aria-label={t('a11y.closeMenu')}
          />
          <nav id={mobileMenuId} className={styles.mobileNav} aria-label={t('nav.ariaLabel')}>
            {!hideNavigationLinks
              ? navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.labelKey)}
                </Link>
              ))
              : null}
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                if (isClientsPage) {
                  window.location.href = 'https://cal.com/ina.nistoras/consultation';
                  return;
                }
                openContactModal();
              }}
              className={styles.mobileNavLinkGold}
            >
              {isClientsPage ? 'Book Call' : t('cta.partnerWithUs')}
            </button>
          </nav>
        </>
      ) : null}

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
            {visibleFooterLinks.map(link => (
              <Link key={link.path} to={link.path}>{t(link.labelKey)}</Link>
            ))}
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
