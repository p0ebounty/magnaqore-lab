import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Settings, Users, Scale } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import partnerHeroImg from '../assets/future_interface_partner.png';

import { teamMembers } from '../data/content';
import ValueProposition from '../components/landing/ValueProposition';
import AiSystemPreview from '../components/landing/AiSystemPreview';
import AboutAndProof from '../components/landing/AboutAndProof';
import IcebergDiagram from '../components/landing/IcebergDiagram';
import SpotlightCard from '../components/SpotlightCard';
import MagneticButton from '../components/MagneticButton';
import { useContactModal } from '../context/ContactContext';

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

type TeamId = 'ina' | 'maryia' | 'artyom';

export default function LandingPage() {
  const { t } = useTranslation('landing');
  const reveal = useReveal();
  const { openContactModal } = useContactModal();

  const problemIcons = [Settings, Users, Scale];
  const marqueeRepeat = [0, 1, 2, 3] as const;

  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
      />

      <section className={styles.hero} style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center min-w-0">

          <div className="flex flex-col text-left min-w-0">
            <div className={`badge marquee-badge ${styles.staticMarquee} ${styles.fadeDelay1}`}>
              <div className="marquee-content">
                {marqueeRepeat.map((i) => (
                  <span key={i}>
                    <span className="marquee-text">{t('hero.marquee')}</span>
                    <span className="marquee-separator">•</span>
                  </span>
                ))}
              </div>
            </div>
            <h1 className={`animate-slide-up ${styles.heroTitle}`} style={{ textAlign: 'left', margin: '0 0 1rem 0' }}>
              {t('hero.titleBefore')}{' '}
              <span className="text-gold">{t('hero.titleAccent')}</span>
              {t('hero.titleAfter') ? (
                <>
                  {' '}
                  {t('hero.titleAfter')}
                </>
              ) : null}
            </h1>
            <h2 className={`animate-slide-up ${styles.fadeDelay2} ${styles.heroSubtitle}`} style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
              {t('hero.subtitle')}
            </h2>
            <p className={`animate-slide-up ${styles.fadeDelay3} ${styles.heroBody}`} style={{ textAlign: 'left', margin: '0 0 3rem 0', maxWidth: '100%' }}>
              {t('hero.body')}
            </p>
            <div className={`animate-fade-in ${styles.fadeDelay4}`}>
              <MagneticButton>
                <a href="#market-shift" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {t('hero.cta')}
                  <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </a>
              </MagneticButton>
              <p className={styles.confidentialText} style={{ textAlign: 'left', marginTop: '1.5rem' }}>{t('hero.confidential')}</p>
            </div>
          </div>

          <div className={`hidden md:block relative animate-slide-up ${styles.fadeDelay3}`}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(197, 155, 39, 0.2)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 60px rgba(197, 155, 39, 0.15)'
            }}>
              <img src={partnerHeroImg} alt={t('hero.heroImgAlt')} style={{ width: '100%', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(270deg, transparent 70%, var(--background) 100%)' }}></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, var(--background) 0%, transparent 20%)' }}></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--background) 0%, transparent 20%)' }}></div>
            </div>
          </div>

        </div>
        <div className={styles.heroBgGlow}></div>
      </section>

      <section id="market-shift" className="section" style={{ position: 'relative' }}>
        <div className={`container grid md:grid-cols-2 gap-12 items-center`}>
          <div className="reveal" ref={reveal}>
            <span className="badge">{t('marketShift.badge')}</span>
            <h2>{t('marketShift.heading')}</h2>
            <h3 className="text-secondary" style={{ marginBottom: '1.5rem', fontWeight: 400 }}>
              {t('marketShift.subheading')}
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              {t('marketShift.body')}
            </p>
          </div>
          <div className={`reveal ${styles.shiftDiagram}`} ref={reveal}>
            <div className={styles.diagramNodes}>
              <div className={`${styles.node} ${styles.nodeFragmented}`}>{t('marketShift.diagramFrom')}</div>
              <div className={styles.diagramArrow}>→</div>
              <div className={styles.nodeSystemWrap}>
                <div className={styles.diagramGlow} aria-hidden />
                <div className={`${styles.node} ${styles.nodeSystem}`}>{t('marketShift.diagramTo')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.problemSection}`}>
        <div className="container text-center reveal" ref={reveal}>
          <div className={`badge marquee-badge flex justify-center ${styles.staticMarquee} ${styles.staticMarqueeCenter}`} style={{ margin: '0 auto 1.5rem auto' }}>
            <div className="marquee-content marquee-content-fast">
              {marqueeRepeat.map((i) => (
                <span key={i}>
                  <span className="marquee-text">{t('problem.marquee')}</span>
                  <span className="marquee-separator">•</span>
                </span>
              ))}
            </div>
          </div>
          <h2>{t('problem.heading')}</h2>
          <p className={styles.subtitleItalic}>
            {t('problem.subtitle')}
          </p>

          <div style={{ marginTop: '4rem', background: 'var(--surface-color)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <div style={{ height: '4px', background: 'var(--accent-gold)', width: '100%' }}></div>

            <div className="grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2" style={{ borderColor: 'var(--border-light)' }}>
              {(t('problem.cards', { returnObjects: true }) as { title: string; body: string }[]).map((card, idx) => {
                const Icon = problemIcons[idx];
                return (
                  <SpotlightCard key={idx} style={{ padding: '3rem 2.5rem', textAlign: 'left' }} className={`flex flex-col ${styles.problemCard}`}>
                    <Icon className="text-gold" size={40} style={{ marginBottom: '2rem' }} />
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{card.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1rem' }}>
                      {card.body}
                    </p>
                  </SpotlightCard>
                );
              })}
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderTop: '1px solid var(--border-light)',
              padding: '1.5rem 2rem',
              textAlign: 'center'
            }}>
              <p style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1rem', fontWeight: 500 }}>
                {t('problem.bottomBar')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.lightBg}`}>
        <div className="container reveal" ref={reveal}>
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="badge">{t('solution.badge')}</span>
            <h2>{t('solution.heading')}</h2>
            <p className="text-secondary" style={{ fontSize: '1.2rem' }}>
              {t('solution.sub')}
            </p>
          </div>

          <IcebergDiagram />
        </div>
      </section>

      <ValueProposition />
      <AiSystemPreview />
      <AboutAndProof />

      <section className="section" style={{ position: 'relative' }}>
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">{t('team.badge')}</span>
          <h2>{t('team.heading')}</h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            {t('team.sub')}
          </p>
        </div>

        <div className={`container grid md:grid-cols-3 gap-8 ${styles.teamGrid}`}>
          {teamMembers.map((member, idx) => {
            const tid = member.id as TeamId;
            return (
              <SpotlightCard key={member.id} className={`glass-panel reveal ${styles.teamCard}`} ref={reveal} style={{ transitionDelay: `${idx * 150}ms`, overflow: 'hidden' }}>
                <div className={styles.teamPhotoWrapper}>
                  <img src={member.photoUrl} alt={member.name} className={styles.teamPhoto} />
                  <div className={styles.teamPhotoOverlay}></div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ marginBottom: '0.25rem' }}>{member.name}</h3>
                  <p className="text-gold" style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>{t(`teamMembers.${tid}.title`).toUpperCase()}</p>
                  <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>{t(`teamMembers.${tid}.tags`)}</p>

                  {member.trustLine && <p style={{ fontSize: '0.85rem', marginBottom: '1rem', padding: '0.5rem', background: 'var(--surface-color)', borderRadius: '4px' }}>{t(`teamMembers.${tid}.trustLine`)}</p>}
                  {member.statLine && <p style={{ fontSize: '0.85rem', marginBottom: '1rem', padding: '0.5rem', background: 'var(--surface-color)', borderRadius: '4px' }}>{t(`teamMembers.${tid}.statLine`)}</p>}
                  {member.roleDescription && <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{t(`teamMembers.${tid}.roleDescription`)}</p>}

                  <div className={styles.teamHighlights}>
                    {(t(`teamMembers.${tid}.highlights`, { returnObjects: true }) as { title: string; bullets: string[] }[]).map((highlight, hIdx) => (
                      <div key={hIdx} style={{ marginBottom: '1rem' }}>
                        <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{highlight.title}</strong>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {highlight.bullets.map((text, bIdx) => {
                            const orig = member.highlights[hIdx]?.bullets[bIdx];
                            const bullet = orig;
                            return (
                              <li key={bIdx} style={{ fontSize: '0.9rem', marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem', color: 'var(--text-secondary)' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)' }}>•</span>
                                {bullet?.url ? (
                                  <a href={bullet.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textDecorationColor: 'var(--border-light)' }} className="hover:text-gold transition-colors">
                                    {text}
                                  </a>
                                ) : (
                                  <span>{text}</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container text-center reveal" ref={reveal}>
          <h2>{t('cta.heading')}</h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', margin: '1rem auto 3rem', maxWidth: '600px' }}>
            {t('cta.body')}
          </p>
          <MagneticButton>
            <button type="button" onClick={openContactModal} className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 3rem', fontFamily: 'inherit' }}>
              {t('cta.button')}
            </button>
          </MagneticButton>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: '6rem 0' }}>
        <div className="container text-center reveal" ref={reveal}>
          <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>{t('readNext.label')}</p>
          <Link to="/ai-operating-system" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }} className={styles.readNextLink}>
            {t('readNext.link')} <ArrowRight size={36} className="text-gold" />
          </Link>
        </div>
      </section>
    </>
  );
}
