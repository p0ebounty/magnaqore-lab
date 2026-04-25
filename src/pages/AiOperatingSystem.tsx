import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import aosStyles from './AiOperatingSystem.module.css';

function useReveal() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToRefs;
}

export default function AiOperatingSystem() {
  const { t } = useTranslation('aiOperatingSystem');
  const reveal = useReveal();

  const pillars = t('pillars', { returnObjects: true }) as { title: string; desc: string }[];
  const services = t('portfolio.services', { returnObjects: true }) as { num: string; title: string; desc: string }[];
  const steps = t('delivery.steps', { returnObjects: true }) as { id: string; title: string; desc: string }[];
  const advantageBullets = t('advantage.bullets', { returnObjects: true }) as string[];
  const roles = t('portfolio.roles', { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
      />
      <section className={`${styles.hero} ${styles.heroInner}`}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge">{t('hero.badge')}</span>
          <h1 className={`animate-slide-up ${styles.heroTitle} ${styles.heroTitleBoost}`}>
            {t('hero.titleBefore')}{' '}
            <span className="text-gold">{t('hero.titleAccent')}</span>
            {t('hero.titleAfter')}
          </h1>
          <h2 className={`animate-slide-up ${styles.heroSubtitle} ${styles.heroSubtitleBoost} delay-200`}>
            {t('hero.subtitle')}
          </h2>
          <p className={`animate-slide-up ${styles.heroBody} delay-300`}>
            {t('hero.lead')}
          </p>
        </div>
        <div className={styles.heroBgGlow}></div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
                <h3 className="text-gold">{pillar.title}</h3>
                <p className="text-secondary">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">{t('portfolio.badge')}</span>
          <h2>{t('portfolio.heading')}</h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            {t('portfolio.sub')}
          </p>

          <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem', display: 'inline-block', border: '1px solid var(--accent-gold)' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', margin: 0 }}>
              {t('portfolio.rolesLead')}{' '}
              <span className="text-gold" style={{ fontWeight: 600 }}>{roles[0]}</span>
              {' · '}
              <span className="text-gold" style={{ fontWeight: 600 }}>{roles[1]}</span>
              {' · '}
              <span className="text-gold" style={{ fontWeight: 600 }}>{roles[2]}</span>
            </p>
          </div>
        </div>

        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-amber)', opacity: 0.3, lineHeight: 1, marginBottom: '1rem' }}>0{item.num}</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="text-secondary flex-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="badge">{t('delivery.badge')}</span>
            <h2 className="reveal" ref={reveal}>{t('delivery.heading')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="glass-panel reveal" ref={reveal} style={{ position: 'relative', overflow: 'hidden', padding: '2rem' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--accent-gold)' }}></div>
                <h2 style={{ opacity: 0.1, position: 'absolute', top: '10px', right: '20px', fontSize: '4rem' }}>{step.id}</h2>
                <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>{step.title}</h3>
                <p className="text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-card" style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
            <span className="badge">{t('advantage.badge')}</span>
            <h2>{t('advantage.heading')}</h2>
            <p className={`text-secondary ${aosStyles.advantageSub}`}>
              {t('advantage.sub')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal" ref={reveal}>
              <ul className={aosStyles.advantageList}>
                {advantageBullets.map((adv, idx) => (
                  <li key={idx} className={aosStyles.advantageListItem}>
                    <span className={aosStyles.advantageListIcon} aria-hidden>
                      <CheckCircle2 className="text-gold" size={24} strokeWidth={2} />
                    </span>
                    <span className={aosStyles.advantageListText}>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`glass-panel reveal ${aosStyles.advantageChart}`} ref={reveal}>
              <div className={aosStyles.chartRows}>
                <div>
                  <div className={aosStyles.chartMeta}>
                    <span className={`text-secondary ${aosStyles.chartLabel}`}>{t('advantage.chart.fragmentedLabel')}</span>
                    <span className={`text-muted ${aosStyles.chartValue}`}>{t('advantage.chart.fragmentedValue')}</span>
                  </div>
                  <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                    <div style={{ height: '100%', width: '30%', background: 'var(--text-muted)', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div>
                  <div className={aosStyles.chartMeta}>
                    <span className={`text-secondary ${aosStyles.chartLabel}`}>{t('advantage.chart.customLabel')}</span>
                    <span className={`text-muted ${aosStyles.chartValue}`}>{t('advantage.chart.customValue')}</span>
                  </div>
                  <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                    <div style={{ height: '100%', width: '50%', background: 'var(--text-secondary)', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div>
                  <div className={aosStyles.chartMeta}>
                    <span className={`text-gold ${aosStyles.chartLabel}`} style={{ fontWeight: 600 }}>{t('advantage.chart.aosLabel')}</span>
                    <span className={`text-gold ${aosStyles.chartValue}`} style={{ fontWeight: 600 }}>{t('advantage.chart.aosValue')}</span>
                  </div>
                  <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                    <div style={{ height: '100%', width: '95%', background: 'var(--accent-gold)', borderRadius: '4px', boxShadow: '0 0 10px var(--accent-gold)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: '6rem 0' }}>
        <div className="container text-center reveal" ref={reveal}>
          <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>{t('readNext.label')}</p>
          <Link to="/partnership" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover:text-gold">
            {t('readNext.link')} <ArrowRight size={36} className="text-gold" />
          </Link>
        </div>
      </section>
    </>
  );
}
