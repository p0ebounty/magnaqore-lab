import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRightLeft, ShieldCheck, Diamond, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import logo from '../assets/logo.png';

export default function Partnership() {
  const { t } = useTranslation('partnership');
  const { t: tc } = useTranslation('common');
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

  const reveal = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const whyCards = [
    { icon: ShieldCheck, titleKey: 'why.cards.0.title', descKey: 'why.cards.0.desc' },
    { icon: Diamond, titleKey: 'why.cards.1.title', descKey: 'why.cards.1.desc' },
    { icon: Zap, titleKey: 'why.cards.2.title', descKey: 'why.cards.2.desc' },
    { icon: CheckCircle2, titleKey: 'why.cards.3.title', descKey: 'why.cards.3.desc' },
  ] as const;

  const revenueRows = [0, 1, 2] as const;
  const benefitBullets = t('commercial.benefitBullets', { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
      />
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge">{t('hero.badge')}</span>
          <h1 className="animate-slide-up">
            {t('hero.titleBefore')}{' '}
            <span className="text-gold">{t('hero.titleAccent')}</span>{' '}
            {t('hero.titleAfter')}
          </h1>
          <p className={`animate-slide-up ${styles.heroBody} delay-200`} style={{ fontSize: '1.5rem', fontWeight: 300 }}>
            {t('hero.lead')}
          </p>
        </div>
        <div className={styles.heroBgGlow}></div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
            <span className="badge">{t('framework.badge')}</span>
            <h2>{t('framework.heading')}</h2>
            <p className="text-secondary" style={{ fontSize: '1.2rem' }}>
              {t('framework.sub')}
            </p>
          </div>

          <div className="glass-panel reveal" ref={reveal} style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div className="grid md:grid-cols-3 gap-8 items-center text-center relative z-10">
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t('framework.youLabel')}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                  {(t('framework.youItems', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
                  {t('framework.integration')}
                </div>
                <ArrowRightLeft size={32} className="text-muted" />
              </div>

              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--accent-gold)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(223, 172, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <img src={logo} alt={tc('brand.logoAlt')} style={{ width: '32px', height: 'auto', display: 'block' }} />
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-primary)' }}>
                  {(t('framework.mqItems', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container text-center reveal" ref={reveal}>
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="badge">{t('commercial.badge')}</span>
            <h2>{t('commercial.heading')}</h2>
            <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              {t('commercial.sub')}
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '4rem 2rem', borderTop: '4px solid var(--accent-gold)', marginBottom: '4rem' }}>
            <p className="text-secondary" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>{t('commercial.engagementLabel')}</p>
            <h2 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', color: 'var(--accent-amber)', margin: '1rem 0' }}>
              {t('commercial.engagementRange')}
              <span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}> {t('commercial.usd')}</span>
            </h2>
            <p className="text-muted">{t('commercial.perEngagement')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <h3 className="text-gold">{t('commercial.partnerShareTitle')}</h3>
              <h2 style={{ fontSize: '4rem', color: 'var(--text-primary)', margin: '1rem 0' }}>{t('commercial.partnerShareRange')}</h2>
              <p className="text-secondary">{t('commercial.perProject')}</p>
              <p className="text-muted" style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                {t('commercial.partnerShareNote')}
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '3rem' }}>
              <h3 className="text-gold" style={{ textAlign: 'center' }}>{t('commercial.benefitsTitle')}</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem', color: 'var(--text-secondary)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {benefitBullets.map((text, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: 8, height: 8, background: 'var(--accent-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '6px' }}></div>
                    <span style={{ lineHeight: '1.4' }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="reveal" ref={reveal} style={{ marginTop: '4rem', fontStyle: 'italic', color: 'var(--accent-gold)', fontSize: '1.2rem' }}>
            {t('commercial.quote')}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
            <span className="badge">{t('why.badge')}</span>
            <h2>{t('why.heading')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(223,172,94,0.1)', padding: '1rem', borderRadius: '12px', flexShrink: 0, width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={28} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>{t(item.titleKey)}</h3>
                    <p className="text-secondary" style={{ lineHeight: 1.6 }}>{t(item.descKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container reveal" ref={reveal}>
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="badge">{t('revenue.badge')}</span>
            <h2>{t('revenue.heading')}</h2>
            <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              {t('revenue.sub')}
            </p>
          </div>

          <div className="glass-panel" style={{ overflow: 'hidden' }}>
            <div className="hidden md:grid md:grid-cols-3 gap-6 p-6" style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-light)', fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              <div>{t('revenue.colVolume')}</div>
              <div>{t('revenue.colDealValue')}</div>
              <div>{t('revenue.colPartnerShare')}</div>
            </div>

            {revenueRows.map((idx) => {
              const row = t(`revenue.rows.${idx}`, { returnObjects: true }) as { deals: string; context: string; value: string; share: string };
              const featured = idx === 1;
              return (
                <div key={idx} className="grid md:grid-cols-3 gap-6 p-6 items-center" style={{ borderBottom: idx < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: featured ? 'rgba(223, 172, 94, 0.05)' : 'transparent', position: 'relative' }}>
                  {featured && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--accent-gold)' }}></div>}

                  <div>
                    <div className="md:hidden" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>{t('revenue.mobileVolume')}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{row.deals}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{row.context}</div>
                  </div>

                  <div>
                    <div className="md:hidden" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>{t('revenue.colDealValue')}</div>
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{row.value}</div>
                  </div>

                  <div>
                    <div className="md:hidden" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>{t('revenue.colPartnerShare')}</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 700, color: featured ? 'var(--accent-gold)' : 'var(--text-primary)' }}>{row.share}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: '6rem 0' }}>
        <div className="container text-center reveal" ref={reveal}>
          <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>{t('readNext.label')}</p>
          <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover:text-gold">
            {t('readNext.link')} <ArrowRight size={36} className="text-gold" />
          </Link>
        </div>
      </section>
    </>
  );
}
