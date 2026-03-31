import { useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

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
  const reveal = useReveal();

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge">CORE CAPABILITY</span>
          <h1 className="animate-slide-up">
            What Is an <span className="text-gold">AI Operating System</span>?
          </h1>
          <h2 className={`animate-slide-up ${styles.heroSubtitle} delay-200`}>
            Not a single tool. Not a software platform.
          </h2>
          <p className={`animate-slide-up ${styles.heroBody} delay-300`}>
            An AI Operating System is the structured framework that enables AI to function coherently across a business.
          </p>
        </div>
        <div className={styles.heroBgGlow}></div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h3 className="text-gold">Operating Model Design</h3>
               <p className="text-secondary">Strategic framework for how AI is governed, deployed, and scaled within the organization.</p>
            </div>
            
            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h3 className="text-gold">Department Integration</h3>
               <p className="text-secondary">AI embedded into workflows per business unit — not as an add-on, but as operational infrastructure.</p>
            </div>

            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h3 className="text-gold">Workflow Architecture</h3>
               <p className="text-secondary">Automation logic designed around actual business processes, not generic templates.</p>
            </div>

            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h3 className="text-gold">Governance Logic</h3>
               <p className="text-secondary">Policies, oversight, and accountability structures for responsible, scalable AI usage.</p>
            </div>

            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h3 className="text-gold">Use-Case Prioritization</h3>
               <p className="text-secondary">Evidence-based selection of highest-impact AI applications/initiatives for each organization.</p>
            </div>

            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h3 className="text-gold">Team Enablement</h3>
               <p className="text-secondary">Capability-building programs that create internal AI literacy and operational competence.</p>
            </div>

            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h3 className="text-gold">Process Redesign</h3>
               <p className="text-secondary">Re-engineer workflows to unlock AI-native efficiency, not just bolt-on automation.</p>
            </div>

            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h3 className="text-gold">Implementation Roadmaps</h3>
               <p className="text-secondary">Phased deployment plans with clear milestones, KPIs, and scaling criteria.</p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 3: SERVICE PORTFOLIO */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
           <span className="badge">SERVICE PORTFOLIO EXPANSION</span>
           <h2>What You Can Offer Your Clients Through This Partnership</h2>
           <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
             Position your firm as a strategic AI transformation partner — not just an IT or consulting provider.
           </p>
           
           <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem', display: 'inline-block', border: '1px solid var(--accent-gold)' }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', margin: 0 }}>
                Your clients see you as: <span className="text-gold" style={{ fontWeight: 600 }}>AI Transformation Partner</span> · <span className="text-gold" style={{ fontWeight: 600 }}>AI Systems Architect</span> · <span className="text-gold" style={{ fontWeight: 600 }}>AI Capability Builder</span>
              </p>
           </div>
        </div>

        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { num: '1', title: 'AI Operating Model Design', desc: 'Help clients architect the internal system that makes AI operationally coherent across their business.' },
             { num: '2', title: 'AI Governance & Compliance', desc: 'Deploy structured oversight frameworks that enable responsible, auditable AI usage at enterprise scale.' },
             { num: '3', title: 'Department-Level AI Integration', desc: 'Move beyond pilots — Embed AI into operational workflows across sales, operations, HR, finance, and marketing.' },
             { num: '4', title: 'AI Capability Building', desc: 'Develop internal AI literacy from board level to operational teams — enabling sustainable internal ownership.' },
             { num: '5', title: 'Process Redesign for AI', desc: 'Re-engineer workflows to be AI-native, unlocking automation, efficiency, and performance at their core.' },
             { num: '6', title: 'AI Implementation Roadmaps', desc: 'Provide clients with phased, milestone-driven deployment plans aligned to business priorities and maturity levels.' }
           ].map((item, idx) => (
              <div key={idx} className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                 <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-amber)', opacity: 0.3, lineHeight: 1, marginBottom: '1rem' }}>0{item.num}</div>
                 <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                 <p className="text-secondary flex-1">{item.desc}</p>
              </div>
           ))}
        </div>
      </section>

      {/* SECTION 4: DELIVERY MODEL */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
             <span className="badge">DELIVERY MODEL</span>
             <h2 className="reveal" ref={reveal}>A Repeatable Enterprise Implementation Model</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { id: '01', title: 'Opportunity Identification', desc: 'Partner identifies or opens a relevant client opportunity within their existing account base.' },
               { id: '02', title: 'Joint Discovery', desc: 'Joint qualification conversation — evaluating AI readiness, business context, and transformation potential.' },
               { id: '03', title: 'Business Diagnosis', desc: 'Structured AI opportunity mapping: gaps, priorities, department readiness, and implementation complexity.' },
               { id: '04', title: 'Tailored Proposal', desc: 'Custom scope and transformation proposal developed. Separate project agreement signed for that engagement.' },
               { id: '05', title: 'AI OS Design & Implementation', desc: 'AI Operating System architecture, workflow design, governance logic, and rollout — delivered by MagnaQore.' },
               { id: '06', title: 'Enablement & Optimization', desc: 'Team training, adoption support, and ongoing optimization to ensure sustainable internal ownership.' }
             ].map((step, idx) => (
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

      {/* SECTION 5: OUR ADVANTAGE */}
      <section className="section bg-card" style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
           <div className="text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
              <span className="badge">THE MAGNAQORE DIFFERENCE</span>
              <h2>Why the Systems Approach Wins</h2>
              <p className="text-secondary" style={{ fontSize: '1.2rem' }}>
                Moving beyond fragmented tooling prevents scaling failures and creates lasting enterprise value.
              </p>
           </div>

           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal" ref={reveal}>
                 <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[
                      'Systemic Approach vs Single Tools',
                      'Methodology-Driven Implementation',
                      'Real-World Laboratory Tested',
                      'Built for Organizational Scale',
                      'Immediate Speed to Market'
                    ].map((adv, idx) => (
                       <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <CheckCircle2 className="text-gold" size={28} />
                          <span style={{ fontSize: '1.3rem', fontWeight: 500 }}>{adv}</span>
                       </li>
                    ))}
                 </ul>
              </div>

              {/* Abstract Chart / Visualization */}
              <div className="glass-panel reveal" ref={reveal} style={{ padding: '3rem', position: 'relative' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    
                    <div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span className="text-secondary">Point Tools (Fragmented)</span>
                          <span className="text-muted">Low Impact</span>
                       </div>
                       <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                          <div style={{ height: '100%', width: '30%', background: 'var(--text-muted)', borderRadius: '4px' }}></div>
                       </div>
                    </div>

                    <div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span className="text-secondary">Custom Build (Expensive/Slow)</span>
                          <span className="text-muted">High Risk</span>
                       </div>
                       <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                          <div style={{ height: '100%', width: '50%', background: 'var(--text-secondary)', borderRadius: '4px' }}></div>
                       </div>
                    </div>

                    <div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span className="text-gold" style={{ fontWeight: 600 }}>AI Operating System</span>
                          <span className="text-gold" style={{ fontWeight: 600 }}>Maximized ROI</span>
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

      {/* READ NEXT */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: '6rem 0' }}>
         <div className="container text-center reveal" ref={reveal}>
            <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>Read Next</p>
            <Link to="/partnership" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover:text-gold">
               Partnership Framework <ArrowRight size={36} className="text-gold" />
            </Link>
         </div>
      </section>
    </>
  );
}
