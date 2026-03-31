import { useEffect, useRef } from 'react';
import { TrendingUp, FileText, Building2, Rocket, CircleDollarSign, Building, Zap } from 'lucide-react';

// Custom hook to trigger reveal animations on scroll
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
  const reveal = useLocalReveal();

  return (
    <>
      {/* SECTION 5: WHY THIS IS YOUR NEXT HIGH-VALUE SERVICE LINE */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">STRATEGIC OPPORTUNITY</span>
          <h2>Why This Is Your Next High-Value Service Line</h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Your clients already need this. The question is whether you're the one who offers it — or your competitor.
          </p>
        </div>
        
        <div className="container grid md:grid-cols-3 gap-8">
          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem', transitionDelay: '100ms' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>Immediate Market Demand</h3>
            <p className="text-secondary">
              Every enterprise you serve is already allocating budget toward AI. Most are doing it without structure. You can be the partner who brings order to that chaos.
            </p>
          </div>
          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem', transitionDelay: '200ms' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>Account Expansion Engine</h3>
            <p className="text-secondary">
              This service creates new revenue inside your existing client base — without requiring new business development. Every current account is a potential engagement.
            </p>
          </div>
          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2rem', transitionDelay: '300ms' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>First-Mover Advantage</h3>
            <p className="text-secondary">
              Most competitors are still selling point AI solutions. By offering a full AI Operating System capability, you position ahead of slower-moving firms.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: NEW ENTERPRISE SERVICE CATEGORY */}
      <section className="section" style={{ background: 'var(--bg-card)', position: 'relative' }}>
        <div className="container reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">STRATEGIC OPPORTUNITY</span>
          <h2>A New Enterprise Service Category — Ready for Your Clients</h2>
        </div>
        
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', borderTop: '2px solid var(--accent-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.75rem' }}>
              <TrendingUp className="text-gold" size={24} />
              <h3 style={{ margin: 0 }}>Growing Demand</h3>
            </div>
            <p className="text-secondary">
              Enterprise demand for operational AI infrastructure is accelerating. The window to lead this category is open — and narrowing.
            </p>
          </div>

          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', borderTop: '2px solid var(--accent-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.75rem' }}>
              <FileText className="text-gold" size={24} />
              <h3 style={{ margin: 0 }}>High-Value Projects</h3>
            </div>
            <p className="text-secondary">
              Typical client engagements run $100K–$150K. This is a premium transformation offer, not a commodity service.
            </p>
          </div>

          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', borderTop: '2px solid var(--accent-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.75rem' }}>
              <Building2 className="text-gold" size={24} />
              <h3 style={{ margin: 0 }}>Inside Your Accounts</h3>
            </div>
            <p className="text-secondary">
              Your existing clients already need this. This service line expands wallet share within relationships you already hold.
            </p>
          </div>

          <div className="glass-panel reveal" ref={reveal} style={{ padding: '2.5rem', borderTop: '2px solid var(--accent-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.75rem' }}>
              <Rocket className="text-gold" size={24} />
              <h3 style={{ margin: 0 }}>No Build Required</h3>
            </div>
            <p className="text-secondary">
              You bring client access and commercial positioning. We deliver the methodology, systems architecture, and implementation.
            </p>
          </div>
        </div>

        <div className="container text-center reveal" ref={reveal} style={{ marginTop: '4rem' }}>
          <p style={{ fontStyle: 'italic', color: 'var(--accent-gold)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            This is how you enter the AI transformation market — with a proven partner, a structured methodology, and immediate commercial upside.
          </p>
        </div>
      </section>

      {/* SECTION 7: PARTNER VALUE PROPOSITION */}
      <section className="section">
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">PARTNER VALUE PROPOSITION</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>New Revenue. No Build Cost.<br/><span className="text-gold">Immediate Market Entry.</span></h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Launch a premium AI transformation practice without building an internal team from scratch.
          </p>
        </div>
        
        <div className="container grid md:grid-cols-3 gap-8 text-center">
          <div className="reveal" ref={reveal} style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
               <CircleDollarSign size={48} className="text-gold" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>New Revenue</h3>
            <p className="text-muted">Launch a premium AI practice that creates a new growth line for your firm.</p>
          </div>
          <div className="reveal" ref={reveal} style={{ padding: '2rem', transitionDelay: '150ms' }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
               <Building size={48} className="text-gold" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>No Build Cost</h3>
            <p className="text-muted">Offer the capability without hiring, staffing, or assembling a team internally.</p>
          </div>
          <div className="reveal" ref={reveal} style={{ padding: '2rem', transitionDelay: '300ms' }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
               <Zap size={48} className="text-gold" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Immediate Market Entry</h3>
            <p className="text-muted">Move quickly with a ready-to-deploy service that gets you into the market faster.</p>
          </div>
        </div>
      </section>
    </>
  );
}
