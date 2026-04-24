import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, FileText, Building2, Rocket, CircleDollarSign, Building, Zap } from 'lucide-react';

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

export default function ValueProposition() {
  const { t } = useTranslation('landing');
  const reveal = useLocalReveal();

  const s5cards = t('valueProp.s5.cards', { returnObjects: true }) as { title: string; body: string }[];
  const s6tiles = t('valueProp.s6.tiles', { returnObjects: true }) as { title: string; body: string }[];
  const s7pillars = t('valueProp.s7.pillars', { returnObjects: true }) as { title: string; body: string }[];

  return (
    <>
      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">{t('valueProp.s5.badge')}</span>
          <h2>{t('valueProp.s5.heading')}</h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            {t('valueProp.s5.sub')}
          </p>
        </div>

        <div className="container grid md:grid-cols-3 gap-8">
          {s5cards.map((card, idx) => (
            <div key={idx} className="glass-panel reveal" ref={reveal} style={{ padding: '2rem', transitionDelay: `${(idx + 1) * 100}ms` }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>{card.title}</h3>
              <p className="text-secondary">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-card)', position: 'relative' }}>
        <div className="container reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">{t('valueProp.s6.badge')}</span>
          <h2>{t('valueProp.s6.heading')}</h2>
        </div>

        <div className="container grid md:grid-cols-2 gap-6">
          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', borderTop: '2px solid var(--accent-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.75rem' }}>
              <TrendingUp className="text-gold" size={24} />
              <h3 style={{ margin: 0 }}>{s6tiles[0].title}</h3>
            </div>
            <p className="text-secondary">{s6tiles[0].body}</p>
          </div>

          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', borderTop: '2px solid var(--accent-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.75rem' }}>
              <FileText className="text-gold" size={24} />
              <h3 style={{ margin: 0 }}>{s6tiles[1].title}</h3>
            </div>
            <p className="text-secondary">{s6tiles[1].body}</p>
          </div>

          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', borderTop: '2px solid var(--accent-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.75rem' }}>
              <Building2 className="text-gold" size={24} />
              <h3 style={{ margin: 0 }}>{s6tiles[2].title}</h3>
            </div>
            <p className="text-secondary">{s6tiles[2].body}</p>
          </div>

          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', borderTop: '2px solid var(--accent-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.75rem' }}>
              <Rocket className="text-gold" size={24} />
              <h3 style={{ margin: 0 }}>{s6tiles[3].title}</h3>
            </div>
            <p className="text-secondary">{s6tiles[3].body}</p>
          </div>
        </div>

        <div className="container text-center reveal" ref={reveal} style={{ marginTop: '4rem' }}>
          <p style={{ fontStyle: 'italic', color: 'var(--accent-gold)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            {t('valueProp.s6.quote')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">{t('valueProp.s7.badge')}</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {t('valueProp.s7.headingLine1')}<br /><span className="text-gold">{t('valueProp.s7.headingGold')}</span>
          </h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            {t('valueProp.s7.sub')}
          </p>
        </div>

        <div className="container grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">

          <div className="reveal text-left flex flex-col justify-center gap-6" ref={reveal}>
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ background: 'rgba(223,172,94,0.1)', padding: '1.25rem', borderRadius: '16px', flexShrink: 0 }}>
                <CircleDollarSign size={32} className="text-gold" />
              </div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>{s7pillars[0].title}</h3>
                <p className="text-muted" style={{ margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>{s7pillars[0].body}</p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center', transitionDelay: '100ms' }}>
              <div style={{ background: 'rgba(223,172,94,0.1)', padding: '1.25rem', borderRadius: '16px', flexShrink: 0 }}>
                <Building size={32} className="text-gold" />
              </div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>{s7pillars[1].title}</h3>
                <p className="text-muted" style={{ margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>{s7pillars[1].body}</p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center', transitionDelay: '200ms' }}>
              <div style={{ background: 'rgba(223,172,94,0.1)', padding: '1.25rem', borderRadius: '16px', flexShrink: 0 }}>
                <Zap size={32} className="text-gold" />
              </div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>{s7pillars[2].title}</h3>
                <p className="text-muted" style={{ margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>{s7pillars[2].body}</p>
              </div>
            </div>
          </div>

          <div className="reveal relative h-full min-h-[400px]" ref={reveal} style={{ transitionDelay: '300ms' }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(197, 155, 39, 0.2)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 60px rgba(197, 155, 39, 0.15)'
            }}>
              <img src="/ai_dashboard_meeting.png" alt={t('valueProp.s7.dashboardAlt')} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(270deg, transparent 70%, var(--background) 100%)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, var(--background) 0%, transparent 20%)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--background) 0%, transparent 20%)', pointerEvents: 'none' }}></div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
