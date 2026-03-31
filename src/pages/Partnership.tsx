import { useEffect, useRef } from 'react';
import { ArrowRightLeft, ShieldCheck, Diamond, Zap, CheckCircle2 } from 'lucide-react';
import styles from './LandingPage.module.css';

export default function Partnership() {
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

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge">PARTNERSHIP FRAMEWORK</span>
          <h1 className="animate-slide-up">
            Strategic <span className="text-gold">Revenue</span> Participation
          </h1>
          <p className={`animate-slide-up ${styles.heroBody} delay-200`} style={{ fontSize: '1.5rem', fontWeight: 300 }}>
             We operate as your specialized execution partner — enabling you to launch a new AI transformation service line without building an internal delivery team.
          </p>
        </div>
        <div className={styles.heroBgGlow}></div>
      </section>

      {/* SECTION 1: PARTNERSHIP FRAMEWORK */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
           <div className="text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
              <span className="badge">THE FRAMEWORK</span>
              <h2>How We Work Together</h2>
              <p className="text-secondary" style={{ fontSize: '1.2rem' }}>
                A seamless integration of your market presence and our technical execution.
              </p>
           </div>

           <div className="glass-panel reveal" ref={reveal} style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div className="grid md:grid-cols-3 gap-8 items-center text-center relative z-10">
                 {/* Partner Side */}
                 <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                       <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>YOU</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                       <li>Client Relationships</li>
                       <li>Commercial Control</li>
                       <li>Strategic Lead</li>
                    </ul>
                 </div>

                 {/* Connection */}
                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
                       Seamless Integration
                    </div>
                    <ArrowRightLeft size={32} className="text-muted" />
                 </div>

                 {/* MagnaQore Side */}
                 <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--accent-gold)' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(223, 172, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                       <span className="text-gold" style={{ fontSize: '1.5rem', fontWeight: 700 }}>MQ</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-primary)' }}>
                       <li>AI Engineering</li>
                       <li>Delivery Teams</li>
                       <li>Technical Infrastructure</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2: WHY THIS WINS FOR YOU */}
      <section className="section bg-card" style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
           <div className="text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
              <span className="badge">PARTNER VALUE</span>
              <h2>Why This Wins For You</h2>
           </div>

           <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: 'No Hiring Risk', desc: 'Expand your service portfolio instantly without the overhead, recruitment delay, or risk of hiring specialized AI talent internally.' },
                { icon: Diamond, title: 'Premium Brand Positioning', desc: 'Go to market with an enterprise-grade AI Operating System offering, elevating your firm above generic prompt-engineering consultants.' },
                { icon: Zap, title: 'Immediate Capability', desc: 'Start offering AI transformation to your clients this quarter with a proven, structured methodology already prepared for you.' },
                { icon: CheckCircle2, title: 'Complete Fulfillment', desc: 'We handle the technical complexity — architecture, engineering, training, and deployment — allowing you to focus on account management.' }
              ].map((item, idx) => {
                 const Icon = item.icon;
                 return (
                   <div key={idx} className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(223,172,94,0.1)', padding: '1rem', borderRadius: '12px' }}>
                         <Icon size={28} className="text-gold" />
                      </div>
                      <div>
                         <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>{item.title}</h3>
                         <p className="text-secondary" style={{ lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                   </div>
                 );
              })}
           </div>
        </div>
      </section>

      {/* SECTION 3: COMMERCIAL TERMS */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container text-center reveal" ref={reveal}>
          <div className="glass-panel" style={{ padding: '4rem 2rem', borderTop: '4px solid var(--accent-gold)', marginBottom: '4rem' }}>
             <p className="text-secondary" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>Typical Client Engagement Value</p>
             <h2 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', color: 'var(--accent-amber)', margin: '1rem 0' }}>
               $100,000 – $250,000<span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}> USD</span>
             </h2>
             <p className="text-muted">per client engagement</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="glass-panel" style={{ padding: '3rem' }}>
               <h3 className="text-gold">Partner Commercial Participation</h3>
               <h2 style={{ fontSize: '4rem', color: 'var(--text-primary)', margin: '1rem 0' }}>25% – 30%</h2>
               <p className="text-secondary">per closed client project</p>
               <p className="text-muted" style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                 This is a strategic revenue participation model — not a referral arrangement.
               </p>
            </div>
            
            <div className="glass-panel" style={{ padding: '3rem' }}>
               <h3 className="text-gold">Commercial Structure Benefits</h3>
               <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', color: 'var(--text-secondary)' }}>
                 <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{width: 8, height: 8, background: 'var(--accent-gold)', borderRadius: '50%'}}></div>
                    Separate project agreement per engagement
                 </li>
                 <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{width: 8, height: 8, background: 'var(--accent-gold)', borderRadius: '50%'}}></div>
                    Clear scope, deliverables & legal clarity
                 </li>
                 <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{width: 8, height: 8, background: 'var(--accent-gold)', borderRadius: '50%'}}></div>
                    Tailored pricing by client size and complexity
                 </li>
                 <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{width: 8, height: 8, background: 'var(--accent-gold)', borderRadius: '50%'}}></div>
                    No capability build required to participate
                 </li>
               </ul>
            </div>
          </div>
          
          </div>
          
          <p className="reveal" ref={reveal} style={{ marginTop: '4rem', fontStyle: 'italic', color: 'var(--accent-gold)', fontSize: '1.2rem' }}>
             "One closed project generates $25K–$75K in partner revenue. Two to three engagements per year represents a meaningful new consulting income stream."
          </p>
        </div>
      </section>

      {/* SECTION 4: REVENUE PROJECTIONS */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container text-center reveal" ref={reveal}>
           <span className="badge">PROJECTIONS</span>
           <h2 style={{ marginBottom: '3rem' }}>Revenue Upside (Annualized)</h2>

           <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { deals: '1 Client Project', range: '$25,000 – $75,000', desc: 'High-leverage addition to an existing client relationship.' },
                { deals: '3 Client Projects', range: '$75,000 – $225,000', desc: 'Meaningful new service line revenue.' },
                { deals: '5 Client Projects', range: '$125,000 – $375,000', desc: 'Established AI delivery practice.' }
              ].map((proj, idx) => (
                 <div key={idx} className="glass-panel" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: idx === 1 ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)' }}></div>
                    <div className="text-secondary" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem' }}>{proj.deals}</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>{proj.range}</div>
                    <p className="text-muted" style={{ fontSize: '0.95rem' }}>{proj.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>
    </>
  );
}
