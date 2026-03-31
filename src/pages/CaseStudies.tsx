import { useEffect, useRef } from 'react';
import { GraduationCap, Mic } from 'lucide-react';
import styles from './LandingPage.module.css';
import { caseStudies } from '../data/content';

export default function CaseStudies() {
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

  const flagship = caseStudies.find(c => c.id === 'dhl');
  const others = caseStudies.filter(c => c.id !== 'dhl');

  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh', paddingBottom: '4rem' }}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="animate-slide-up">
            Projects & <span className="text-gold">Delivery</span> Experience
          </h1>
          <p className={`animate-slide-up ${styles.heroBody} delay-200`}>
             Real engagements. Measurable results. Repeatable frameworks.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          
          {/* Flagship Case Study */}
          {flagship && (
            <div className="glass-panel reveal" ref={reveal} style={{ padding: '3rem', marginBottom: '4rem', borderTop: '4px solid var(--accent-gold)' }}>
              <span className="badge">{flagship.tag}</span>
              <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>{flagship.title}</h2>
              <p className="text-gold" style={{ letterSpacing: '2px', marginBottom: '2rem' }}>
                {flagship.sector} · {flagship.geography}
              </p>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
                {flagship.description}
              </p>
            </div>
          )}

          {/* Grid of other case studies */}
          <div className="grid md:grid-cols-2 gap-8">
            {others.map((cs) => (
               <div key={cs.id} className="glass-panel reveal" ref={reveal} style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                 <p className="text-gold" style={{ fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                    {cs.sector} · {cs.geography}
                 </p>
                 <h3 style={{ marginBottom: '1rem' }}>{cs.title}</h3>
                 <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Client: <span className="text-secondary">{cs.client}</span></p>
                 <p className="text-secondary" style={{ flex: 1 }}>{cs.description}</p>
               </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: CREDIBILITY HIGHLIGHTS */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container text-center reveal" ref={reveal} style={{ marginBottom: '4rem' }}>
          <span className="badge">EXPERTS & LEADERS</span>
          <h2>Credibility Highlights</h2>
          <p className="text-secondary" style={{ fontStyle: 'italic', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Recognized industry authorities in AI implementation and education.
          </p>
        </div>

        <div className="container grid md:grid-cols-2 gap-12">
          
          {/* Ina's Highlights */}
          <div className="glass-panel reveal" ref={reveal} style={{ padding: '3rem', borderLeft: '4px solid var(--accent-gold)' }}>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
                <Mic className="text-gold" size={32} />
                <h3 style={{ margin: 0, fontSize: '2rem' }}>Ina Nistoras</h3>
             </div>
             <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">AI Expert at European Commission & EIC event (with Deloitte, EWA, EISMEA)</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">AI Trainer for Boardroom Directors — DHL Qatar</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">AI Panel Discussion in Qatar & AI Expert Panelist in gaming industry</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">Moderator at Women in Tech event & Mentor at Hackathons (Qatar Development Bank and M7)</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">Kids Summer AI Camp — DHL corporate families</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">Guest Speaker at Business Podcasts (e.g., I WANNA GROW PODCAST)</span>
                </li>
             </ul>
          </div>

          {/* Maryia's Highlights */}
          <div className="glass-panel reveal" ref={reveal} style={{ padding: '3rem', borderRight: '4px solid var(--accent-gold)' }}>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
                <GraduationCap className="text-gold" size={32} />
                <h3 style={{ margin: 0, fontSize: '2rem' }}>Maryia Sakavets</h3>
             </div>
             <p className="text-muted" style={{ marginBottom: '1.5rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
                Programs and materials created and developed by Maryia:
             </p>
             <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">Mini-Course Program Accredited by Ministry of Education (Yekaterinburg, Russia)</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">Program for Russian Venture Forum and Skolkovo (Moscow, Russia)</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">Professional Development Program for Board of Directors of DHL (Doha, Qatar)</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">AI Consultant Avatars for Learning Gamification & Internship Program (Qatar University)</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">Training Programs for BSU Web Development, Ulster University, & QDB Startup Hub M7 (Doha)</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <span className="text-gold" style={{ marginTop: '4px' }}>•</span>
                   <span className="text-secondary">Charitable Training Program to Support Women (Moldova, Romania)</span>
                </li>
             </ul>
          </div>

        </div>
      </section>
    </>
  );
}
