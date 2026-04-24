import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '../i18n/config';
import styles from './LanguageSwitcher.module.css';

const ITEMS: { code: SupportedLanguage; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

function resolvedLang(lng: string): SupportedLanguage {
  const base = lng.split('-')[0]?.toLowerCase() ?? 'en';
  return base === 'ru' ? 'ru' : 'en';
}

type LanguageSwitcherProps = {
  className?: string;
  variant?: 'segment' | 'select';
};

export default function LanguageSwitcher({
  className,
  variant = 'segment',
}: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const current = resolvedLang(i18n.language);
  const selectId = useId();

  if (variant === 'select') {
    return (
      <div className={[styles.selectWrap, className].filter(Boolean).join(' ')}>
        <label className={styles.selectLabel} htmlFor={selectId}>
          {t('lang.ariaLabel')}
        </label>
        <select
          id={selectId}
          className={styles.select}
          value={current}
          onChange={(e) => {
            void i18n.changeLanguage(e.target.value as SupportedLanguage);
          }}
        >
          <option value="en">{t('lang.optionEn')}</option>
          <option value="ru">{t('lang.optionRu')}</option>
        </select>
      </div>
    );
  }

  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(' ')}
      role="group"
      aria-label={t('lang.ariaLabel')}
    >
      {ITEMS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`${styles.btn} ${current === code ? styles.btnActive : ''}`}
          onClick={() => {
            void i18n.changeLanguage(code);
          }}
          aria-pressed={current === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
