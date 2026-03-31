import { useEffect, useRef } from 'react';
import { ArrowRightLeft, ShieldCheck, Diamond, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
                       <li>Client access</li>
                       <li>Commercial positioning</li>
                       <li>Account ownership</li>
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
                       <li>Methodology</li>
                       <li>Systems architecture</li>
                       <li>Implementation</li>
                       <li>Delivery team</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2: COMMERCIAL FRAMEWORK — REVENUE MODEL */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container text-center reveal" ref={reveal}>
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="badge">COMMERCIAL FRAMEWORK</span>
            <h2>Strategic Revenue Participation Model</h2>
            <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              A premium, high-value commercial structure designed for enterprise partnerships.
            </p>
          </div>

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
                 <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{width: 8, height: 8, background: 'var(--accent-gold)', borderRadius: '50%'}}></div>
                    Scalable — repeatable across your client base
                 </li>
               </ul>
            </div>
          </div>
          <p className="reveal" ref={reveal} style={{ marginTop: '4rem', fontStyle: 'italic', color: 'var(--accent-gold)', fontSize: '1.2rem' }}>
             "One closed project generates $25K–$75K in partner revenue. Two to three engagements per year represents a meaningful new consulting income stream."
          </p>
        </div>
      </section>

      {/* SECTION 3: WHY THIS WINS FOR YOU */}
      <section className="section" style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
           <div className="text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
              <span className="badge">WHY THIS WINS FOR YOU</span>
              <h2>Partnership Benefits Summary</h2>
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

      {/* SECTION 4: REVENUE UPSIDE (PROJECTIONS) */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container reveal" ref={reveal}>
           <div className="text-center" style={{ marginBottom: '4rem' }}>
              <span className="badge">REVENUE UPSIDE</span>
              <h2>Revenue Projection (Annualized)</h2>
              <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                Modeled on average enterprise engagement values and typical partner participation rates.
              </p>
           </div>
           
           <div className="glass-panel" style={{ overflow: 'hidden' }}>
              {/* Table Header */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 p-6" style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-light)', fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                 <div>Volume</div>
                 <div>Total Deal Value (Est.)</div>
                 <div>Partner Share (25% - 30%)</div>
              </div>
              
              {/* Rows */}
              {[
                { deals: '1 Client Project', context: 'High-leverage addition to an existing client relationship.', value: '$100K – $250K', share: '$25,000 – $75,000', featured: false },
                { deals: '3 Client Projects', context: 'Meaningful new service line revenue.', value: '$300K – $750K', share: '$75,000 – $225,000', featured: true },
                { deals: '5 Client Projects', context: 'Established AI delivery practice.', value: '$500K – $1.25M', share: '$125,000 – $375,000', featured: false }
              ].map((row, idx) => (
                <div key={idx} className="grid md:grid-cols-3 gap-6 p-6 items-center" style={{ borderBottom: idx < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: row.featured ? 'rgba(223, 172, 94, 0.05)' : 'transparent', position: 'relative' }}>
                   {row.featured && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--accent-gold)' }}></div>}
                   
                   <div>
                      <div className="md:hidden" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Partner Volume</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{row.deals}</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{row.context}</div>
                   </div>
                   
                   <div>
                      <div className="md:hidden" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Total Deal Value (Est.)</div>
                      <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{row.value}</div>
                   </div>
                   
                   <div>
                      <div className="md:hidden" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Partner Share (25% - 30%)</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: row.featured ? 'var(--accent-gold)' : 'var(--text-primary)' }}>{row.share}</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* READ NEXT */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: '6rem 0' }}>
         <div className="container text-center reveal" ref={reveal}>
            <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>Read Next</p>
            <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover:text-gold">
               Projects & Delivery Experience <ArrowRight size={36} className="text-gold" />
            </Link>
         </div>
      </section>
    </>
  );
}
