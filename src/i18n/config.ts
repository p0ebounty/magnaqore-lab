import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enCommon from '../locales/en/common.json';
import ruCommon from '../locales/ru/common.json';
import enContact from '../locales/en/contact.json';
import ruContact from '../locales/ru/contact.json';
import enPartnership from '../locales/en/partnership.json';
import ruPartnership from '../locales/ru/partnership.json';
import enAiOperatingSystem from '../locales/en/aiOperatingSystem.json';
import ruAiOperatingSystem from '../locales/ru/aiOperatingSystem.json';
import enCaseStudies from '../locales/en/caseStudies.json';
import ruCaseStudies from '../locales/ru/caseStudies.json';
import enLanding from '../locales/en/landing.json';
import ruLanding from '../locales/ru/landing.json';
import enClients from '../locales/en/clients.json';
import ruClients from '../locales/ru/clients.json';

export const SUPPORTED_LANGUAGES = ['en', 'ru'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

function normalizeLang(lng: string): SupportedLanguage {
  const base = lng.split('-')[0]?.toLowerCase() ?? 'en';
  return base === 'ru' ? 'ru' : 'en';
}

function setHtmlLang(lng: string) {
  document.documentElement.lang = normalizeLang(lng);
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        contact: enContact,
        partnership: enPartnership,
        aiOperatingSystem: enAiOperatingSystem,
        caseStudies: enCaseStudies,
        landing: enLanding,
        clients: enClients,
      },
      ru: {
        common: ruCommon,
        contact: ruContact,
        partnership: ruPartnership,
        aiOperatingSystem: ruAiOperatingSystem,
        caseStudies: ruCaseStudies,
        landing: ruLanding,
        clients: ruClients,
      },
    },
    fallbackLng: 'en',
    supportedLngs: [...SUPPORTED_LANGUAGES],
    defaultNS: 'common',
    ns: ['common', 'contact', 'partnership', 'aiOperatingSystem', 'caseStudies', 'landing', 'clients'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'magnaqore-lang',
    },
    load: 'languageOnly',
  });

setHtmlLang(i18n.language);
i18n.on('languageChanged', setHtmlLang);

export default i18n;
