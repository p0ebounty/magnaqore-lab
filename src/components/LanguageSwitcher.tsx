import { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import type { SupportedLanguage } from '../i18n/config';
import styles from './LanguageSwitcher.module.css';

/** First-visit hint for the language FAB; cleared when the menu is opened once */
const FAB_INTRO_SEEN_KEY = 'magnaqore-lang-fab-intro-seen';

function hasSeenFabIntro(): boolean {
  try {
    return localStorage.getItem(FAB_INTRO_SEEN_KEY) === '1';
  } catch {
    return true;
  }
}

function markFabIntroSeen(): void {
  try {
    localStorage.setItem(FAB_INTRO_SEEN_KEY, '1');
  } catch {
    /* private / quota */
  }
}

const ITEMS: { code: SupportedLanguage; short: string }[] = [
  { code: 'en', short: 'EN' },
  { code: 'ru', short: 'RU' },
];

function resolvedLang(lng: string): SupportedLanguage {
  const base = lng.split('-')[0]?.toLowerCase() ?? 'en';
  return base === 'ru' ? 'ru' : 'en';
}

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = resolvedLang(i18n.language);
  const [open, setOpen] = useState(false);
  const [pulseIntro, setPulseIntro] = useState(
    () => typeof window !== 'undefined' && !hasSeenFabIntro(),
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const toggleMenu = () => {
    const nextOpen = !open;
    if (nextOpen) {
      markFabIntroSeen();
      setPulseIntro(false);
    }
    setOpen(nextOpen);
  };

  const select = (code: SupportedLanguage) => {
    setOpen(false);
    if (code === current) return;

    void i18n.changeLanguage(code).then(() => {
      window.location.reload();
    });
  };

  return (
    <div ref={rootRef} className={styles.root}>
      {open ? (
        <div
          id={menuId}
          className={styles.menu}
          role="menu"
          aria-label={t('lang.ariaLabel')}
        >
          {ITEMS.map(({ code, short }) => {
            const active = current === code;
            return (
              <button
                key={code}
                type="button"
                role="menuitem"
                className={`${styles.menuItem} ${active ? styles.menuItemActive : ''}`}
                onClick={() => select(code)}
                aria-current={active ? 'true' : undefined}
              >
                <span className={styles.menuShort}>{short}</span>
                <span className={styles.menuLabel}>
                  {code === 'en' ? t('lang.optionEn') : t('lang.optionRu')}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}

      <button
        type="button"
        className={`${styles.fab} ${open ? styles.fabOpen : ''} ${pulseIntro && !open ? styles.fabPulseIntro : ''}`}
        onClick={toggleMenu}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={open ? menuId : undefined}
        title={t('lang.ariaLabel')}
      >
        <Languages size={22} strokeWidth={1.75} className={styles.fabIcon} aria-hidden />
        <span className={styles.fabBadge} aria-hidden>
          {ITEMS.find(i => i.code === current)?.short ?? 'EN'}
        </span>
      </button>
    </div>
  );
}
