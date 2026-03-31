import { useEffect, useRef } from 'react';
import { ArrowRight, Settings, Users, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import partnerHeroImg from '../assets/future_interface_partner.png';

import { teamMembers } from '../data/content';
import ValueProposition from '../components/landing/ValueProposition';
import AiSystemPreview from '../components/landing/AiSystemPreview';
import AboutAndProof from '../components/landing/AboutAndProof';
import IcebergDiagram from '../components/landing/IcebergDiagram';

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

export default function LandingPage() {
  const reveal = useReveal();

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className={styles.hero} style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col text-left">
            <span className={`badge ${styles.fadeDelay1}`} style={{ width: 'fit-content' }}>
              PRESENTED BY MagnaQore | AI Implementation & Transformation Company
            </span>
            <h1 className={`animate-slide-up ${styles.heroTitle}`} style={{ textAlign: 'left', margin: '0 0 1rem 0' }}>
              Strategic <span className="text-gold">Partnership</span> Opportunity
            </h1>
            <h2 className={`animate-slide-up ${styles.fadeDelay2} ${styles.heroSubtitle}`} style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
              AI Operating System Design & Implementation
            </h2>
            <p className={`animate-slide-up ${styles.fadeDelay3} ${styles.heroBody}`} style={{ textAlign: 'left', margin: '0 0 3rem 0', maxWidth: '100%' }}>
              A high-value enterprise service line for strategic partners ready to lead the next wave of organizational transformation.
            </p>
            <div className={`animate-fade-in ${styles.fadeDelay4}`}>
              <a href="#market-shift" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center' }}>
                Explore the Opportunity
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </a>
              <p className={styles.confidentialText} style={{ textAlign: 'left', marginTop: '1.5rem' }}>Confidential — For Partner Evaluation Only</p>
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
                <img src={partnerHeroImg} alt="Strategic Partnership Implementation" style={{ width: '100%', display: 'block' }} />
                {/* Subtle gradient overlay to blend perfectly into dark mode */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(270deg, transparent 70%, var(--background) 100%)' }}></div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, var(--background) 0%, transparent 20%)' }}></div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--background) 0%, transparent 20%)' }}></div>
             </div>
          </div>
          
        </div>
        <div className={styles.heroBgGlow}></div>
      </section>

      {/* SECTION 2: THE MARKET SHIFT */}
      <section id="market-shift" className="section" style={{ position: 'relative' }}>
        <div className={`container grid md:grid-cols-2 gap-12 items-center`}>
          <div className="reveal" ref={reveal}>
            <span className="badge">MARKET INTELLIGENCE</span>
            <h2>The Market Is Shifting</h2>
            <h3 className="text-secondary" style={{ marginBottom: '1.5rem', fontWeight: 400 }}>
              From Tool Adoption to AI-Native Operations
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              The enterprise landscape is undergoing a fundamental transition — and most service providers haven't repositioned yet.
            </p>
          </div>
          <div className={`reveal ${styles.shiftDiagram}`} ref={reveal}>
            {/* Market Shift Code Component / Animation */}
            <div className={styles.diagramNodes}>
              <div className={`${styles.node} ${styles.nodeFragmented}`}>Tools</div>
              <div className={styles.diagramArrow}>→</div>
              <div className={`${styles.node} ${styles.nodeSystem}`}>AI-Native Systems</div>
            </div>
            <div className={styles.diagramGlow}></div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM */}
      <section className={`section ${styles.problemSection}`}>
        <div className="container text-center reveal" ref={reveal}>
          <span className="badge">YESTERDAY'S MODEL & THE PROBLEM</span>
          <h2>Fragmented AI Adoption Is a Structural Risk</h2>
          <p className={styles.subtitleItalic}>
            Most enterprises are experimenting with AI — but without a system to support it.
          </p>
          
          <div style={{ marginTop: '4rem', background: 'var(--surface-color)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            {/* Gold Top Bar */}
            <div style={{ height: '4px', background: 'var(--accent-gold)', width: '100%' }}></div>
            
            {/* 3 Columns */}
            <div className="grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2" style={{ borderColor: 'var(--border-light)' }}>
              
              <div style={{ padding: '3rem 2.5rem', textAlign: 'left' }} className="flex flex-col">
                <Settings className="text-gold" size={40} style={{ marginBottom: '2rem' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Tool Fragmentation</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1rem' }}>
                  Multiple disconnected AI tools operating in silos — chatbots, automations, content systems — with no unifying architecture or governance layer.
                </p>
              </div>

              <div style={{ padding: '3rem 2.5rem', textAlign: 'left' }} className="flex flex-col">
                <Users className="text-gold" size={40} style={{ marginBottom: '2rem' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Weak Internal Adoption</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1rem' }}>
                  Without structured enablement and workflow integration, AI tools are used inconsistently or abandoned. Technology investment fails to generate return.
                </p>
              </div>

              <div style={{ padding: '3rem 2.5rem', textAlign: 'left' }} className="flex flex-col">
                <Scale className="text-gold" size={40} style={{ marginBottom: '2rem' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>No Operating Foundation</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1rem' }}>
                  No internal AI ownership, no prioritization framework, no compliance logic. Every new AI initiative starts from scratch.
                </p>
              </div>

            </div>

            {/* Bottom Consequence Bar */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              borderTop: '1px solid var(--border-light)', 
              padding: '1.5rem 2rem', 
              textAlign: 'center' 
            }}>
              <p style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1rem', fontWeight: 500 }}>
                The result: multiple vendors, overlapping tools, duplicated costs, and an organization that is no closer to AI-native operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE SOLUTION */}
      <section className={`section ${styles.lightBg}`}>
        <div className="container reveal" ref={reveal}>
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="badge">TOMORROW'S STANDARD</span>
            <h2>AI-Enabled Operating Infrastructure</h2>
            <p className="text-secondary" style={{ fontSize: '1.2rem' }}>
              From isolated tools to a unified, enterprise-wide AI foundation.
            </p>
          </div>
          
          <IcebergDiagram />
        </div>
      </section>

      <ValueProposition />
      <AiSystemPreview />
      <AboutAndProof />
      
      {/* SECTION 13: THE TEAM */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">EXPERTISE & LEADERSHIP</span>
          <h2>The MagnaQore Team</h2>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Architects of intelligent transformation.
          </p>
        </div>
        
        <div className={`container grid md:grid-cols-3 gap-8 ${styles.teamGrid}`}>
          {teamMembers.map((member, idx) => (
            <div key={member.id} className={`glass-panel reveal ${styles.teamCard}`} ref={reveal} style={{ transitionDelay: `${idx * 150}ms`, overflow: 'hidden' }}>
              <div className={styles.teamPhotoWrapper}>
                <img src={member.photoUrl} alt={member.name} className={styles.teamPhoto} />
                <div className={styles.teamPhotoOverlay}></div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '0.25rem' }}>{member.name}</h3>
                <p className="text-gold" style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>{member.title.toUpperCase()}</p>
                <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>{member.tags}</p>
                
                {member.trustLine && <p style={{ fontSize: '0.85rem', marginBottom: '1rem', padding: '0.5rem', background: 'var(--surface-color)', borderRadius: '4px' }}>{member.trustLine}</p>}
                {member.statLine && <p style={{ fontSize: '0.85rem', marginBottom: '1rem', padding: '0.5rem', background: 'var(--surface-color)', borderRadius: '4px' }}>{member.statLine}</p>}
                {member.roleDescription && <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{member.roleDescription}</p>}
                
                <div className={styles.teamHighlights}>
                  {member.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} style={{ marginBottom: '1rem' }}>
                      <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{highlight.title}</strong>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {highlight.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} style={{ fontSize: '0.9rem', marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem', color: 'var(--text-secondary)' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)' }}>•</span>
                            {bullet.url ? (
                              <a href={bullet.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textDecorationColor: 'var(--border-light)' }} className="hover:text-gold transition-colors">
                                {bullet.text}
                              </a>
                            ) : (
                              <span>{bullet.text}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 14: CTA CLOSING */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container text-center reveal" ref={reveal}>
           <h2>Ready to Lead the Next Wave?</h2>
           <p className="text-secondary" style={{ fontSize: '1.2rem', margin: '1rem auto 3rem', maxWidth: '600px' }}>
             Let's discuss how this partnership creates value for your firm and your clients.
           </p>
           <a href="mailto:contact@magnaqore.com" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
              Schedule a Conversation
           </a>
        </div>
      </section>

      {/* READ NEXT */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: '6rem 0' }}>
         <div className="container text-center reveal" ref={reveal}>
            <p className="text-muted" style={{ textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>Read Next</p>
            <Link to="/ai-operating-system" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover:text-gold">
               AI Operating System <ArrowRight size={36} className="text-gold" />
            </Link>
         </div>
      </section>
    </>
  );
}
