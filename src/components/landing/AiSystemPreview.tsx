import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Settings, Network, Shield, Users, Target, Key } from 'lucide-react';

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
  const reveal = useLocalReveal();

  return (
    <>
      {/* SECTION 8: WHAT IS AN AI OPERATING SYSTEM — PREVIEW */}
      <section className="section" style={{ background: 'var(--bg-glass)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal" ref={reveal}>
            <span className="badge">CORE CAPABILITY</span>
            <h2 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>WHAT IS AN AI OPERATING SYSTEM?</h2>
            <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '3rem' }}>
              The internal operating layer that governs how AI functions across your entire organization.
            </p>
            
            {/* Animated Brain Component representation */}
            <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <BrainCircuit size={120} className="text-gold" style={{ animation: 'pulseGold 4s infinite' }} />
               <div style={{ position: 'absolute', inset: 0, border: '1px dashed var(--accent-gold)', borderRadius: '50%', animation: 'spin 20s linear infinite' }}></div>
               <div style={{ position: 'absolute', inset: -20, border: '1px dashed rgba(235, 177, 52, 0.2)', borderRadius: '50%', animation: 'spin-reverse 15s linear infinite' }}></div>
            </div>
            
          </div>

          <div className="reveal flex flex-col gap-6" ref={reveal}>
            <div>
              <p className="text-gold" style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Not a single tool. Not a software platform.</p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>An AI Operating System is the structured framework that enables AI to function coherently across a business.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                 <Settings size={20} className="text-gold" style={{ marginBottom: '0.5rem' }} />
                 <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Operating Model Design</h4>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                 <Network size={20} className="text-gold" style={{ marginBottom: '0.5rem' }} />
                 <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Workflow Automation</h4>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                 <Shield size={20} className="text-gold" style={{ marginBottom: '0.5rem' }} />
                 <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Governance & Compliance</h4>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                 <Users size={20} className="text-gold" style={{ marginBottom: '0.5rem' }} />
                 <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Team Enablement</h4>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                 <Target size={20} className="text-gold" style={{ marginBottom: '0.5rem' }} />
                 <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Use-Case Prioritization</h4>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                 <Key size={20} className="text-gold" style={{ marginBottom: '0.5rem' }} />
                 <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Scalable Ownership</h4>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Link to="/ai-operating-system" className="text-gold" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                 Learn more about AI OS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: MARKET TIMING */}
      <section className="section">
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">MARKET TIMING</span>
          <h2>Why This Opportunity Exists Now</h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            The Market Window Is Open — and Competitive Pressure Is Intensifying
          </p>
        </div>

        <div className="container" style={{ maxWidth: '1000px' }}>
          <h3 className="text-gold" style={{ textAlign: 'center', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1rem' }}>Key Success Factors</h3>
          <div className="grid md:grid-cols-2 gap-6" style={{ marginBottom: '4rem' }}>
            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Economic Pressure</h4>
               <p className="text-muted" style={{ fontSize: '0.95rem' }}>Cost reduction and operational efficiency are board-level mandates. AI is the lever.</p>
            </div>
            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Competitive Reality</h4>
               <p className="text-muted" style={{ fontSize: '0.95rem' }}>AI-enabled competitors are gaining speed. Firms that delay risk structural disadvantage.</p>
            </div>
            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Operational Urgency</h4>
               <p className="text-muted" style={{ fontSize: '0.95rem' }}>Organizations need to do more with existing teams. AI-native operations multiply capacity.</p>
            </div>
            <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem' }}>
               <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Workflow Modernization & Internal Resilience</h4>
               <p className="text-muted" style={{ fontSize: '0.95rem' }}>Enterprise workflows are overdue for redesign. AI provides the architecture for the next era. They are reducing external dependencies and building internal operational capability.</p>
            </div>
          </div>
          
          <div className="glass-panel reveal" ref={reveal} style={{ padding: '3rem', textAlign: 'center', borderLeft: '4px solid var(--accent-gold)', borderRadius: 'var(--radius-md)' }}>
             <p style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--text-primary)' }}>
               "The window between early adopter advantage and market expectation is closing. Partners who move now define the category. This convergence of pressures is generating the strongest market pull for AI transformation in history."
             </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: PARTNERSHIP FRAMEWORK PREVIEW */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">PARTNERSHIP FRAMEWORK</span>
        </div>
        
        <div className="container text-center reveal" ref={reveal}>
           <p style={{ fontSize: '1.5rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 4rem', color: 'var(--text-primary)' }}>
             We operate as your specialized execution partner — enabling you to launch a new AI transformation service line without building an internal delivery team from scratch.
           </p>

           {/* Simple abstract partnership diagram block */}
           <div className="glass-panel flex flex-col md:flex-row" style={{ gap: '2rem', padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto 3rem', alignItems: 'center', justifyContent: 'space-around', position: 'relative' }}>
              <div style={{ flex: 1, zIndex: 2 }}>
                 <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Firm</h3>
                 <p className="text-muted">Client Access<br/>Positioning<br/>Account Ownership</p>
              </div>

              {/* Connecting arrows */}
              <div className="hidden md:flex flex-col gap-4 items-center z-10" style={{ position: 'relative' }}>
                <div style={{ width: '150px', height: '2px', background: 'var(--accent-gold)', position: 'relative' }}>
                   <div style={{ position: 'absolute', right: 0, top: '-4px', width: '10px', height: '10px', borderTop: '2px solid var(--accent-gold)', borderRight: '2px solid var(--accent-gold)', transform: 'rotate(45deg)' }}></div>
                </div>
                <div style={{ width: '150px', height: '2px', background: 'var(--text-muted)', position: 'relative', opacity: 0.5 }}>
                   <div style={{ position: 'absolute', left: 0, top: '-4px', width: '10px', height: '10px', borderBottom: '2px solid var(--text-muted)', borderLeft: '2px solid var(--text-muted)', transform: 'rotate(45deg)' }}></div>
                </div>
              </div>

              <div style={{ flex: 1, zIndex: 2 }}>
                 <h3 className="text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>MagnaQore</h3>
                 <p className="text-muted">Methodology<br/>System Architecture<br/>Implementation</p>
              </div>
           </div>

           <Link to="/partnership" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              See the full partnership model →
           </Link>
        </div>
      </section>
    </>
  );
}
