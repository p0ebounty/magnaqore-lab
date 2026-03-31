import { useEffect, useRef } from 'react';
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
  const reveal = useLocalReveal();
  const topCases = caseStudies.slice(0, 3);

  return (
    <>
      {/* SECTION 11: ABOUT THE COMPANY */}
      <section className="section" style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          
          <div className="reveal" ref={reveal}>
            <span className="badge">ABOUT THE COMPANY</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Applied AI. Built for Real Business Environments.</h2>
            <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '3rem' }}>
               MagnaQore (USA) & BSU (QATAR) are an AI implementation and education companies combining strategy, training, AI systems design, and execution.
            </p>

            <div className="grid grid-cols-2 gap-8" style={{ marginTop: '2rem' }}>
              <div>
                <p className="text-gold" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>200+</p>
                <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginTop: '0.5rem' }}>Companies Consulted</p>
              </div>
              <div>
                <p className="text-gold" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>1,500+</p>
                <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginTop: '0.5rem' }}>Professionals Trained</p>
              </div>
              <div>
                <p className="text-gold" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>10+</p>
                <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginTop: '0.5rem' }}>Industries Served</p>
              </div>
              <div>
                <p className="text-gold" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>3</p>
                <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginTop: '0.5rem' }}>Years of Execution</p>
              </div>
            </div>
          </div>

          <div className="reveal flex flex-col gap-6" ref={reveal}>
             <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Award-Winning Recognition</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Our company was recognized as the best startup among thousands of participants at the Russian Venture Forum — a globally recognized innovation benchmark.
                </p>
             </div>
             <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3 className="text-gold" style={{ marginBottom: '1rem' }}>MagnaQore (USA) Operational Model</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  MagnaQore operates as a real-world AI implementation laboratory — continuously testing, building, and validating implementation approaches across live engagements. We bring that intelligence into every partnership.
                </p>
             </div>
             <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Sector Expertise Across</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  Healthcare · Real Estate · Logistics · Retail · IT · EdTech · E-Commerce · Gaming
                </p>
             </div>
          </div>

        </div>
      </section>

      {/* SECTION 12: PROOF OF WORK (CASE STUDIES PREVIEW) */}
      <section className="section">
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">PROOF OF WORK</span>
          <h2>Delivered. Measured. Repeatable.</h2>
          <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Client engagements across sectors, geographies, and organizational stages.
          </p>
        </div>

        <div className="container grid md:grid-cols-3 gap-6">
           {topCases.map((cs, idx) => (
             <div key={cs.id} className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', borderTop: '2px solid var(--accent-gold)', display: 'flex', flexDirection: 'column', transitionDelay: `${idx * 150}ms` }}>
                <p className="text-gold" style={{ fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '1rem', fontWeight: 600 }}>{cs.sector} · {cs.geography}</p>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{cs.title}</h3>
                <p className="text-secondary" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>Client: {cs.client}</p>
                <p className="text-muted" style={{ marginBottom: '2rem', flex: 1 }}>{cs.description}</p>
             </div>
           ))}
        </div>

        <div className="container text-center reveal" ref={reveal} style={{ marginTop: '4rem' }}>
           <Link to="/case-studies" className="btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              View Full Case Studies →
           </Link>
        </div>
      </section>
    </>
  );
}
