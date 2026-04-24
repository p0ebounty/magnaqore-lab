import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/content';

function useLocalReveal() {
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

export default function AboutAndProof() {
  const { t } = useTranslation('landing');
  const { t: tcs } = useTranslation('caseStudies');
  const reveal = useLocalReveal();
  const topCases = caseStudies.slice(0, 6);
  const stats = t('about.stats', { returnObjects: true }) as { value: string; label: string }[];
  const aboutCards = t('about.cards', { returnObjects: true }) as { title: string; body: string }[];

  return (
    <>
      <section className="section" style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container grid md:grid-cols-2 gap-12 items-center">

          <div className="reveal" ref={reveal}>
            <span className="badge">{t('about.badge')}</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>{t('about.heading')}</h2>
            <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '3rem' }}>
              {t('about.lead')}
            </p>

            <div className="grid grid-cols-2 gap-8" style={{ marginTop: '2rem' }}>
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-gold" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>{s.value}</p>
                  <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginTop: '0.5rem' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex flex-col gap-6" ref={reveal}>
            {aboutCards.map((card, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2rem' }}>
                <h3 className="text-gold" style={{ marginBottom: '1rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{card.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="section">
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">{t('proof.badge')}</span>
          <h2>{t('proof.heading')}</h2>
          <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            {t('proof.sub')}
          </p>
        </div>

        <div className="container grid md:grid-cols-3 gap-6">
          {topCases.map((cs, idx) => (
            <div key={cs.id} className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', borderTop: '2px solid var(--accent-gold)', display: 'flex', flexDirection: 'column', transitionDelay: `${idx * 150}ms` }}>
              <p className="text-gold" style={{ fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '1rem', fontWeight: 600 }}>
                {tcs(`cases.${cs.id}.sector`)} · {tcs(`cases.${cs.id}.geography`)}
              </p>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{tcs(`cases.${cs.id}.title`)}</h3>
              <p className="text-secondary" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>{t('proof.clientPrefix')} {tcs(`cases.${cs.id}.client`)}</p>
              <p className="text-muted" style={{ marginBottom: '2rem', flex: 1 }}>{tcs(`cases.${cs.id}.description`)}</p>
            </div>
          ))}
        </div>

        <div className="container text-center reveal" ref={reveal} style={{ marginTop: '4rem' }}>
          <Link to="/case-studies" className="btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            {t('proof.viewAll')}
          </Link>
        </div>
      </section>
    </>
  );
}
