import { useEffect, useRef } from 'react';

export default function KeySuccessFactorsDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = containerRef.current?.querySelectorAll('.reveal-diagram') || [];
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full relative py-8 md:py-16 overflow-hidden" ref={containerRef}>
      
      {/* Mobile view - Cards */}
      <div className="grid md:hidden gap-6 px-4">
         <div className="glass-panel p-6 shadow-lg reveal-diagram opacity-0 transition-opacity duration-700">
            <h4 className="text-white text-lg font-semibold mb-3">Economic Pressure</h4>
            <p className="text-sm text-gray-400">Cost reduction and operational efficiency are board-level mandates. AI is the lever.</p>
         </div>
         <div className="glass-panel p-6 shadow-lg reveal-diagram opacity-0 transition-opacity duration-700 delay-100">
            <h4 className="text-white text-lg font-semibold mb-3">Competitive Reality</h4>
            <p className="text-sm text-gray-400">AI-enabled competitors are gaining speed. Firms that delay risk structural disadvantage.</p>
         </div>
         <div className="glass-panel p-6 shadow-lg reveal-diagram opacity-0 transition-opacity duration-700 delay-200">
            <h4 className="text-white text-lg font-semibold mb-3">Operational Urgency</h4>
            <p className="text-sm text-gray-400">Organizations need to do more with existing teams. AI-native operations multiply capacity.</p>
         </div>
         <div className="glass-panel p-6 shadow-lg reveal-diagram opacity-0 transition-opacity duration-700 delay-300">
            <h4 className="text-white text-lg font-semibold mb-3">Workflow Modernization &amp; Internal Resilience</h4>
            <p className="text-sm text-gray-400">Enterprise workflows are overdue for redesign. AI provides the architecture for the next era.<br/><br/>They are reducing external dependencies and building internal operational capability.</p>
         </div>
      </div>

      {/* Desktop view - SVG Orbit Diagram */}
      <div className="hidden md:block w-full max-w-[1200px] mx-auto min-h-[600px] relative reveal-diagram" style={{ opacity: 0, transition: 'opacity 1s ease-in-out' }}>
         <style>{`
           .reveal-diagram.active {
             opacity: 1 !important;
           }
           .diagram-line {
             stroke-dasharray: 1000;
             stroke-dashoffset: 1000;
           }
           .reveal-diagram.active .diagram-line {
             animation: drawLine 1.5s ease-out forwards;
           }
           .reveal-diagram.active .diagram-delay-1 { animation-delay: 0.2s; }
           .reveal-diagram.active .diagram-delay-2 { animation-delay: 0.4s; }
           .reveal-diagram.active .diagram-delay-3 { animation-delay: 0.6s; }
           .reveal-diagram.active .diagram-delay-4 { animation-delay: 0.8s; }
           
           @keyframes drawLine {
             to { stroke-dashoffset: 0; }
           }
           @keyframes spinOrb {
             from { transform: rotate(0deg); transform-origin: 550px 300px; }
             to { transform: rotate(360deg); transform-origin: 550px 300px; }
           }
           @keyframes spinOrbReverse {
             from { transform: rotate(360deg); transform-origin: 550px 300px; }
             to { transform: rotate(0deg); transform-origin: 550px 300px; }
           }
           @keyframes centerGlow {
             0% { filter: drop-shadow(0 0 10px rgba(235, 177, 52, 0.3)); }
             50% { filter: drop-shadow(0 0 40px rgba(235, 177, 52, 0.9)); }
             100% { filter: drop-shadow(0 0 10px rgba(235, 177, 52, 0.3)); }
           }
           @keyframes dotPulse {
             0% { r: 10px; filter: drop-shadow(0 0 5px rgba(235, 177, 52, 0.4)); opacity: 0.8; }
             100% { r: 13px; filter: drop-shadow(0 0 20px rgba(235, 177, 52, 1)); opacity: 1; }
           }
           .animated-dot {
             animation: dotPulse 2s ease-in-out infinite alternate;
           }
         `}</style>
         <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 1100 600" preserveAspectRatio="xMidYMid meet">
            {/* Center: 550, 300 */}

            {/* Orbit Rings */}
            <circle cx="550" cy="300" r="210" fill="none" stroke="rgba(223, 172, 94, 0.2)" strokeWidth="2" strokeDasharray="4 12" style={{ animation: 'spinOrb 100s linear infinite' }} />
            <circle cx="550" cy="300" r="145" fill="none" stroke="rgba(223, 172, 94, 0.4)" strokeWidth="2" strokeDasharray="15 25" style={{ animation: 'spinOrbReverse 75s linear infinite' }} />
            <circle cx="550" cy="300" r="90" fill="none" stroke="rgba(223, 172, 94, 0.6)" strokeWidth="3" strokeDasharray="30 15" style={{ animation: 'spinOrb 50s linear infinite' }} />

            {/* Center Circle */}
            <circle cx="550" cy="300" r="65" fill="var(--accent-gold)" style={{ animation: 'centerGlow 4s ease-in-out infinite' }} />
            <text x="550" y="295" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111827" letterSpacing="0.05em">Key Success</text>
            <text x="550" y="315" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111827" letterSpacing="0.05em">Factors</text>

            {/* Connecting Lines */}
            {/* Line 1 (Economic Pressure) -> 145 ring */}
            {/* deltay=115. sqrt(145^2 - 115^2) = sqrt(21025 - 13225) = sqrt(7800) = 88.3 */}
            {/* x = 550 - 88.3 = 461.7 */}
            <path d="M 50 185 L 461.7 185" stroke="var(--accent-gold)" strokeWidth="2" className="diagram-line diagram-delay-1" />
            <rect x="50" y="183" width="40" height="4" fill="var(--accent-gold)" />
            <circle cx="461.7" cy="185" r="12" fill="var(--accent-gold)" className="animated-dot" style={{ animationDelay: '0s' }} />

            {/* Line 2 (Operational Urgency) -> 210 ring */}
            {/* deltay=125. sqrt(210^2 - 125^2) = sqrt(44100 - 15625) = sqrt(28475) = 168.7 */}
            {/* x = 550 - 168.7 = 381.3 */}
            <path d="M 50 425 L 381.3 425" stroke="var(--accent-gold)" strokeWidth="2" className="diagram-line diagram-delay-2" />
            <rect x="50" y="423" width="40" height="4" fill="var(--accent-gold)" />
            <circle cx="381.3" cy="425" r="12" fill="var(--accent-gold)" className="animated-dot" style={{ animationDelay: '0.4s' }} />

            {/* Line 3 (Competitive Reality) -> 210 ring */}
            {/* deltay=95. sqrt(44100 - 9025) = sqrt(35075) = 187.3 */}
            {/* x = 550 + 187.3 = 737.3 */}
            <path d="M 737.3 205 L 1050 205" stroke="var(--accent-gold)" strokeWidth="2" className="diagram-line diagram-delay-3" />
            <rect x="750" y="203" width="40" height="4" fill="var(--accent-gold)" />
            <circle cx="737.3" cy="205" r="12" fill="var(--accent-gold)" className="animated-dot" style={{ animationDelay: '0.8s' }} />

            {/* Line 4 (Workflow Modernization) -> 90 ring */}
            {/* deltay=75. sqrt(8100 - 5625) = sqrt(2475) = 49.7 */}
            {/* x = 550 + 49.7 = 599.7 */}
            <path d="M 599.7 375 L 1050 375" stroke="var(--accent-gold)" strokeWidth="2" className="diagram-line diagram-delay-4" />
            <rect x="750" y="373" width="40" height="4" fill="var(--accent-gold)" />
            <circle cx="599.7" cy="375" r="12" fill="#000e4d" stroke="var(--accent-gold)" strokeWidth="3" className="animated-dot" style={{ animationDelay: '1.2s' }} />

            {/* Foreign Objects for HTML Text */}
            <foreignObject x="50" y="205" width="280" height="150" className="opacity-0 reveal-diagram" style={{ transitionDelay: '0.4s' }}>
              <div className="text-left py-2">
                <h4 className="text-white text-lg font-semibold mb-2 tracking-wide">Economic Pressure</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">Cost reduction and operational efficiency are board-level mandates. AI is the lever.</p>
              </div>
            </foreignObject>

            <foreignObject x="50" y="445" width="280" height="150" className="opacity-0 reveal-diagram" style={{ transitionDelay: '0.6s' }}>
              <div className="text-left py-2">
                <h4 className="text-white text-lg font-semibold mb-2 tracking-wide">Operational Urgency</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">Organizations need to do more with existing teams. AI-native operations multiply capacity.</p>
              </div>
            </foreignObject>

            <foreignObject x="750" y="225" width="300" height="150" className="opacity-0 reveal-diagram" style={{ transitionDelay: '0.8s' }}>
              <div className="text-left py-2">
                <h4 className="text-white text-lg font-semibold mb-2 tracking-wide">Competitive Reality</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">AI-enabled competitors are gaining speed. Firms that delay risk structural disadvantage.</p>
              </div>
            </foreignObject>

            <foreignObject x="750" y="395" width="300" height="180" className="opacity-0 reveal-diagram" style={{ transitionDelay: '1.0s' }}>
              <div className="text-left py-2">
                <h4 className="text-white text-lg font-semibold mb-2 tracking-wide leading-tight">Workflow Modernization &amp;<br/>Internal Resilience</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">Enterprise workflows are overdue for redesign. AI provides the architecture for the next era.</p>
                <p className="text-sm text-gray-300 leading-relaxed font-light mt-3">They are reducing external dependencies and building internal operational capability.</p>
              </div>
            </foreignObject>
         </svg>
      </div>
    </div>
  );
}
