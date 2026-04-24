import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Mic, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import { caseStudies, teamMembers, credibilityHighlights } from '../data/content';

type CredibilityBullet = {
  text: string;
  url?: string;
  embedUrl?: string;
  subLinks?: { label: string; url: string }[];
};

export default function CaseStudies() {
  const { t } = useTranslation('caseStudies');
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

  const flagship = caseStudies.find(c => c.id === 'dhl');
  const others = caseStudies.filter(c => c.id !== 'dhl');

  const linkLabel = (caseId: string, idx: number, fallback: string) => {
    const key = `cases.${caseId}.linkLabels.${idx}`;
    const translated = t(key);
    return translated === key ? fallback : translated;
  };

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
      />
      <section className={styles.hero} style={{ minHeight: '60vh', paddingBottom: '4rem' }}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="animate-slide-up">
            {t('hero.titleBefore')}{' '}
            <span className="text-gold">{t('hero.titleAccent')}</span>{' '}
            {t('hero.titleAfter')}
          </h1>
          <p className={`animate-slide-up ${styles.heroBody} delay-200`}>
            {t('hero.sub')}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">

          {flagship && (
            <div className="glass-panel reveal" ref={reveal} style={{ padding: '3rem', marginBottom: '4rem', borderTop: '4px solid var(--accent-gold)' }}>
              <span className="badge">{t(`cases.${flagship.id}.tag`)}</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', margin: '1rem 0', lineHeight: 1.1 }}>{t(`cases.${flagship.id}.title`)}</h2>
              <p className="text-gold" style={{ letterSpacing: '2px', marginBottom: '2rem' }}>
                {t(`cases.${flagship.id}.sector`)} · {t(`cases.${flagship.id}.geography`)}
              </p>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
                {t(`cases.${flagship.id}.description`)}
              </p>
              {flagship.outcome && (
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(235, 177, 52, 0.05)', borderLeft: '4px solid var(--accent-gold)' }}>
                  <strong className="text-gold" style={{ display: 'block', marginBottom: '0.5rem' }}>{t('labels.businessOutcome')}</strong>
                  <p style={{ margin: 0 }}>{flagship.outcome}</p>
                </div>
              )}
              {flagship.links && flagship.links.length > 0 && (
                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {flagship.links.map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                      {linkLabel(flagship.id, idx, link.label)} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {others.map((cs) => (
              <div key={cs.id} className="glass-panel reveal" ref={reveal} style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <p className="text-gold" style={{ fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                  {t(`cases.${cs.id}.sector`)} · {t(`cases.${cs.id}.geography`)}
                </p>
                <h3 style={{ marginBottom: '1rem' }}>{t(`cases.${cs.id}.title`)}</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                  {t('labels.client')} <span className="text-secondary">{t(`cases.${cs.id}.client`)}</span>
                </p>
                <p className="text-secondary" style={{ flex: 1, marginBottom: cs.outcome || (cs.links && cs.links.length > 0) ? '1.5rem' : 0 }}>{t(`cases.${cs.id}.description`)}</p>
                {cs.outcome && (
                  <div style={{ marginBottom: cs.links && cs.links.length > 0 ? '1.5rem' : 0, paddingLeft: '1rem', borderLeft: '2px solid var(--accent-gold)' }}>
                    <p className="text-gold" style={{ fontSize: '0.85rem', marginBottom: '0.25rem', fontWeight: 600 }}>{t('labels.outcome')}</p>
                    <p className="text-secondary" style={{ fontSize: '0.95rem', margin: 0 }}>{cs.outcome}</p>
                  </div>
                )}
                {cs.links && cs.links.length > 0 && (
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                    {cs.links.map((link, idx) => (
                      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', border: '1px solid rgba(235, 177, 52, 0.3)', padding: '0.25rem 0.75rem', borderRadius: '4px', textDecoration: 'none' }} className="hover:bg-gold-light transition-colors">
                        {linkLabel(cs.id, idx, link.label)} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">{t('credibility.badge')}</span>
          <h2>{t('credibility.heading')}</h2>
          <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            {t('credibility.sub')}
          </p>
        </div>

        <div className="container grid md:grid-cols-2" style={{ gap: '2rem' }}>

          {teamMembers.filter(m => m.id === 'ina' || m.id === 'maryia').map((member, idx) => (
            <div key={member.id} className="glass-panel reveal" ref={reveal} style={{ padding: '3rem', borderTop: '4px solid var(--accent-gold)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
                {idx === 0 ? <Mic className="text-gold" size={32} /> : <GraduationCap className="text-gold" size={32} />}
                <h3 style={{ margin: 0, fontSize: '2rem' }}>{member.name}</h3>
              </div>
              {idx === 1 && (
                <p className="text-muted" style={{ marginBottom: '1.5rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
                  {t('credibility.maryiaIntro')}
                </p>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {(credibilityHighlights[member.id] as CredibilityBullet[] | undefined)?.map((bullet, bIdx) => {
                    const docKey = `credibilityDocs.${member.id}.${bIdx}.text`;
                    const displayText = t(docKey, { defaultValue: bullet.text });
                    return (
                    <li key={bIdx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                      <div style={{ flex: 1 }}>
                        {bullet.url ? (
                          <a href={bullet.url} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors" style={{ textDecoration: 'underline', textDecorationColor: 'var(--border-light)' }}>
                            {displayText}
                          </a>
                        ) : (
                          <span className="text-secondary">{displayText}</span>
                        )}

                        {bullet.embedUrl && (
                          <div style={{ marginTop: '1rem', width: '100%', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <iframe
                              width="100%"
                              height="100%"
                              src={bullet.embedUrl}
                              title={t('credibility.videoIframeTitle')}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        )}

                        {bullet.subLinks && bullet.subLinks.length > 0 && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(235, 177, 52, 0.2)' }}>
                            {bullet.subLinks.map((sub, sIdx) => (
                              <a key={sIdx} href={sub.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }} className="hover:text-white transition-colors">
                                {t(`credibilityDocs.${member.id}.${bIdx}.subLinks.${sIdx}.label`, { defaultValue: sub.label })} ↗
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: '6rem 0' }}>
        <div className="container text-center reveal" ref={reveal}>
          <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>{t('readNext.label')}</p>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover:text-gold">
            {t('readNext.link')} <ArrowRight size={36} className="text-gold" />
          </Link>
        </div>
      </section>
    </>
  );
}
