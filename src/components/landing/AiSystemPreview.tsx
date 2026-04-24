import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BrainCircuit, Settings, Network, Shield, Users, Target, Key, ArrowDown, ArrowUp } from 'lucide-react';
import KeySuccessFactorsDiagram from './KeySuccessFactorsDiagram';

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

export default function AiSystemPreview() {
  const { t } = useTranslation('landing');
  const reveal = useLocalReveal();
  const miniCards = t('aiPreview.miniCards', { returnObjects: true }) as string[];
  const miniIcons = [Settings, Network, Shield, Users, Target, Key];

  return (
    <>
      <section className="section" style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal" ref={reveal}>
            <span className="badge">{t('aiPreview.badge')}</span>
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', lineHeight: '1.1', marginBottom: '1.5rem' }}>{t('aiPreview.heading')}</h2>
            <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '4rem' }}>
              {t('aiPreview.leadItalic')}
            </p>

            <div style={{ position: 'relative', width: '200px', height: '200px', margin: '4rem auto 2rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulseGold 4s infinite' }}>
                <BrainCircuit size={100} className="text-gold" />
              </div>
              <div style={{ position: 'absolute', inset: 0, border: '1px dashed var(--accent-gold)', borderRadius: '50%', opacity: 0.8, animation: 'spin 20s linear infinite' }}></div>
              <div style={{ position: 'absolute', inset: -20, border: '1px dashed rgba(235, 177, 52, 0.3)', borderRadius: '50%', animation: 'spin-reverse 15s linear infinite' }}></div>
            </div>

          </div>

          <div className="reveal flex flex-col gap-6" ref={reveal}>
            <div>
              <p className="text-gold" style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t('aiPreview.notTool')}</p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{t('aiPreview.definition')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {miniCards.map((title, idx) => {
                const Icon = miniIcons[idx];
                return (
                  <div key={idx} className="glass-panel" style={{ padding: '1.5rem' }}>
                    <Icon size={20} className="text-gold" style={{ marginBottom: '0.5rem' }} />
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{title}</h4>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Link to="/ai-operating-system" className="text-gold" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                {t('aiPreview.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">{t('aiPreview.timingBadge')}</span>
          <h2>{t('aiPreview.timingHeading')}</h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            {t('aiPreview.timingSub')}
          </p>
        </div>

        <div className="container" style={{ maxWidth: '1200px' }}>
          <KeySuccessFactorsDiagram />

          <div className="glass-panel reveal" ref={reveal} style={{ padding: '3rem', textAlign: 'center', borderLeft: '4px solid var(--accent-gold)', borderRadius: 'var(--radius-md)', marginTop: '4rem' }}>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--text-primary)' }}>
              {t('aiPreview.timingQuote')}
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">{t('aiPreview.partnerBadge')}</span>
        </div>

        <div className="container text-center reveal" ref={reveal}>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 4rem', color: 'var(--text-primary)' }}>
            {t('aiPreview.partnerLead')}
          </p>

          <div className="glass-panel flex flex-col md:flex-row" style={{ gap: '2rem', padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto 3rem', alignItems: 'center', justifyContent: 'space-around', position: 'relative' }}>
            <div style={{ flex: 1, zIndex: 2 }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t('aiPreview.yourFirm')}</h3>
              <p className="text-muted" dangerouslySetInnerHTML={{ __html: t('aiPreview.yourFirmLines') }} />
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center z-10 my-4 md:my-0">
              <div className="md:hidden flex flex-row gap-8 items-center justify-center">
                <ArrowDown size={32} className="text-gold" />
                <ArrowUp size={32} className="text-muted" style={{ opacity: 0.5 }} />
              </div>

              <div className="hidden md:flex flex-col gap-4 items-center relative">
                <div style={{ width: '150px', height: '2px', background: 'var(--accent-gold)', position: 'relative' }}>
                  <div style={{ position: 'absolute', right: 0, top: '-4px', width: '10px', height: '10px', borderTop: '2px solid var(--accent-gold)', borderRight: '2px solid var(--accent-gold)', transform: 'rotate(45deg)' }}></div>
                </div>
                <div style={{ width: '150px', height: '2px', background: 'var(--text-muted)', position: 'relative', opacity: 0.5 }}>
                  <div style={{ position: 'absolute', left: 0, top: '-4px', width: '10px', height: '10px', borderBottom: '2px solid var(--text-muted)', borderLeft: '2px solid var(--text-muted)', transform: 'rotate(45deg)' }}></div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, zIndex: 2 }}>
              <h3 className="text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t('aiPreview.mq')}</h3>
              <p className="text-muted" dangerouslySetInnerHTML={{ __html: t('aiPreview.mqLines') }} />
            </div>
          </div>

          <Link to="/partnership" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            {t('aiPreview.seeModel')}
          </Link>
        </div>
      </section>
    </>
  );
}
