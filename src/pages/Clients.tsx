import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import styles from './Clients.module.css';
import TeamSection from '../components/team/TeamSection';
import { useReveal } from '../hooks/useReveal';

const CAL_CONSULTATION_URL = 'https://cal.com/ina.nistoras/consultation';
const CLIENT_VIDEO_IDS = {
  en: 'wezdS7ihIQE',
  ru: 'L8cRCR7m1DY',
} as const;

function getClientVideoId(language: string) {
  return language.split('-')[0] === 'ru' ? CLIENT_VIDEO_IDS.ru : CLIENT_VIDEO_IDS.en;
}

type SimpleCard = {
  title: string;
  desc: string;
};

type NumberedCard = SimpleCard & {
  num: string;
};

type ProofCard = {
  sector: string;
  title: string;
  client: string;
  body: string;
  result: string;
};

type JourneyStep = {
  phase: string;
  time: string;
  title: string;
  desc: string;
  output: string;
};

export default function Clients() {
  const { t, i18n } = useTranslation('clients');
  const reveal = useReveal();

  const heroBadgeText = t('hero.badge');
  const heroVideoId = getClientVideoId(i18n.resolvedLanguage || i18n.language);
  const heroStats = t('hero.stats', { returnObjects: true }) as { value: string; label: string }[];
  const painCards = t('problem.cards', { returnObjects: true }) as SimpleCard[];
  const solutionCards = t('solution.cards', { returnObjects: true }) as NumberedCard[];
  const roiItems = t('roi.items', { returnObjects: true }) as { value: string; label: string }[];
  const proofCards = t('proof.cards', { returnObjects: true }) as ProofCard[];
  const journeySteps = t('journey.steps', { returnObjects: true }) as JourneyStep[];
  const engagementItems = t('engagement.items', { returnObjects: true }) as SimpleCard[];
  const ctaSteps = t('cta.steps', { returnObjects: true }) as { num: string; label: string; detail: string }[];
  const marqueeRepeat = [0, 1, 2, 3] as const;

  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={`badge marquee-badge ${styles.heroBadge}`}>
              <div className="marquee-content">
                {marqueeRepeat.map((item) => (
                  <span key={item}>
                    <span className="marquee-text">{heroBadgeText}</span>
                    <span className="marquee-separator">•</span>
                  </span>
                ))}
              </div>
            </div>
            <h1 className={`animate-slide-up ${styles.heroTitle}`}>
              {t('hero.titleBefore')}
              <span className="text-gold"> {t('hero.titleAccent')}</span>
              <br />
              {t('hero.titleAfter')}
            </h1>
            <p className={`animate-slide-up delay-200 ${styles.heroLead}`}>
              {t('hero.lead')}
            </p>
            <div className={`animate-slide-up delay-300 ${styles.heroActions}`}>
              <a href={CAL_CONSULTATION_URL} className="btn-primary">
                {t('hero.primaryCta')}
              </a>
              <a href="#proof" className="btn-secondary">
                {t('hero.secondaryCta')}
              </a>
            </div>
          </div>

          <div className={`animate-scale-up delay-300 ${styles.videoCard}`} aria-label={t('hero.video.aria')}>
            <div className={styles.videoFrame}>
              <iframe
                className={styles.videoIframe}
                src={`https://www.youtube-nocookie.com/embed/${heroVideoId}?rel=0&iv_load_policy=3&playsinline=1`}
                title={t('hero.video.aria')}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className={styles.statGrid}>
              {heroStats.map((stat) => (
                <div key={stat.label} className={styles.statBox}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.altSection}`}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="badge">{t('problem.badge')}</span>
            <h2>{t('problem.heading')}</h2>
            <p className="text-secondary">{t('problem.sub')}</p>
          </div>
          <div className={styles.cardGrid}>
            {painCards.map((card, idx) => (
              <article key={card.title} className={`glass-panel reveal ${styles.painCard}`} ref={reveal}>
                <span className={styles.cardNumber}>0{idx + 1}</span>
                <h3>{card.title}</h3>
                <p className="text-secondary">{card.desc}</p>
              </article>
            ))}
          </div>
          <blockquote className={`reveal ${styles.quote}`} ref={reveal}>
            {t('problem.quote')}
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${styles.sectionIntro} reveal`} ref={reveal}>
            <span className="badge">{t('solution.badge')}</span>
            <h2>{t('solution.heading')}</h2>
            <p className="text-secondary">{t('solution.sub')}</p>
          </div>
          <div className={styles.solutionGrid}>
            {solutionCards.map((card) => (
              <article key={card.num} className={`glass-panel reveal ${styles.solutionCard}`} ref={reveal}>
                <span>{card.num}</span>
                <h3>{card.title}</h3>
                <p className="text-secondary">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.roiStrip}>
        <div className={`container ${styles.roiGrid}`}>
          {roiItems.map((item) => (
            <div key={item.label} className={styles.roiItem}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`section ${styles.altSection}`} id="proof">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="badge">{t('proof.badge')}</span>
            <h2>{t('proof.heading')}</h2>
            <p className="text-secondary">{t('proof.sub')}</p>
          </div>
          <div className={styles.proofGrid}>
            {proofCards.map((card) => (
              <article key={`${card.client}-${card.title}`} className={`glass-panel reveal ${styles.proofCard}`} ref={reveal}>
                <p className={styles.proofSector}>{card.sector}</p>
                <h3>{card.title}</h3>
                <p className={styles.proofClient}>{card.client}</p>
                <p className="text-secondary">{card.body}</p>
                <div className={styles.proofResult}>{card.result}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="badge">{t('journey.badge')}</span>
            <h2>{t('journey.heading')}</h2>
            <p className="text-secondary">{t('journey.sub')}</p>
          </div>
          <div className={styles.journeyList}>
            {journeySteps.map((step) => (
              <article key={step.phase} className={`reveal ${styles.journeyStep}`} ref={reveal}>
                <div>
                  <span>{step.phase}</span>
                  <small>{step.time}</small>
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p className="text-secondary">{step.desc}</p>
                </div>
                <p className={styles.journeyOutput}>{step.output}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.altSection}`}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="badge">{t('engagement.badge')}</span>
            <h2>{t('engagement.heading')}</h2>
            <p className="text-secondary">{t('engagement.sub')}</p>
          </div>
          <div className={styles.engagementGrid}>
            {engagementItems.map((item) => (
              <article key={item.title} className={`glass-panel reveal ${styles.engagementCard}`} ref={reveal}>
                <CheckCircle2 size={24} className="text-gold" aria-hidden />
                <div>
                  <h3>{item.title}</h3>
                  <p className="text-secondary">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="section">
        <div className="container">
          <div className={`glass-panel reveal ${styles.finalCta}`} ref={reveal}>
            <span className="badge">{t('cta.badge')}</span>
            <h2>{t('cta.heading')}</h2>
            <p className="text-secondary">{t('cta.sub')}</p>
            <div className={styles.ctaSteps}>
              {ctaSteps.map((step) => (
                <div key={step.num} className={styles.ctaStep}>
                  <strong>{step.num}</strong>
                  <span>{step.label}</span>
                  <small>{step.detail}</small>
                </div>
              ))}
            </div>
            <a href={CAL_CONSULTATION_URL} className="btn-primary">
              {t('cta.button')} <ArrowRight size={18} aria-hidden />
            </a>
            <p className={styles.disclaimer}>{t('cta.disclaimer')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
