import { useState } from 'react';
import { Link2, Building, ShieldCheck, Activity, Users } from 'lucide-react';

const pillars = [
  { icon: Link2, title: 'Integrated Operating Layer' },
  { icon: Building, title: 'Cross-Department AI Coherence' },
  { icon: ShieldCheck, title: 'Internal AI Governance' },
  { icon: Activity, title: 'Scalable Implementation Model' },
  { icon: Users, title: 'Organizational AI Sovereignty' },
];

const colors = [
  '#8A6615',
  '#AD831D',
  '#D0A124',
  '#E6BA39',
  '#F8D86B',
];

export default function IcebergDiagram() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div style={{ 
        display: 'flex', 
        alignItems: 'stretch', 
        maxWidth: '900px', 
        margin: '2rem auto 4rem', 
        gap: '0',
        padding: '0 2rem'
    }} className="flex-col md:flex-row">
      
      {/* Iceberg */}
      <div 
        className="hidden md:flex" 
        style={{ 
            width: '280px', 
            height: '450px', 
            filter: 'drop-shadow(0 0 10px rgba(197, 155, 39, 0.2)) drop-shadow(0 4px 6px rgba(0,0,0,0.5))',
            marginRight: '-10px',
            zIndex: 2
        }}
      >
        <div style={{ 
          width: '100%', 
          height: '100%', 
          // An elegant, jagged iceberg polygon
          clipPath: 'polygon(45% 0%, 55% 15%, 48% 25%, 85% 40%, 75% 70%, 55% 100%, 35% 85%, 20% 50%, 28% 30%, 35% 15%)', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2px', // Thin separator lines
          background: 'var(--surface-color)' // The color of the "lines" between layers
        }}>
          {pillars.map((_, i) => (
            <div 
              key={`iceberg-layer-${i}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{ 
                 flex: 1, 
                 background: colors[i],
                 transition: 'all 0.3s ease',
                 cursor: 'pointer',
                 filter: hoveredIdx === i ? 'brightness(1.2)' : (hoveredIdx !== null ? 'brightness(0.7)' : 'brightness(1)'),
                 transform: hoveredIdx === i ? 'scale(1.02)' : 'scale(1)',
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Lines (Desktop Only) */}
      <div className="hidden md:flex" style={{ width: '80px', flexDirection: 'column', zIndex: 1 }}>
        {pillars.map((_, i) => (
          <div key={`line-${i}`} style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              height: '2px', 
              width: '100%', 
              background: hoveredIdx === i ? 'var(--accent-gold)' : 'var(--border-light)',
              transition: 'all 0.3s ease',
              boxShadow: hoveredIdx === i ? '0 0 8px var(--accent-gold)' : 'none',
              opacity: hoveredIdx !== null && hoveredIdx !== i ? 0.3 : 1
            }}></div>
          </div>
        ))}
      </div>

      {/* Labels */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }} className="mt-8 md:mt-0 md:pl-8">
        {pillars.map((item, i) => (
          <div 
            key={`label-${i}`} 
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              transform: hoveredIdx === i ? 'translateX(10px)' : 'translateX(0)',
              opacity: hoveredIdx !== null && hoveredIdx !== i ? 0.5 : 1
            }}
          >
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              background: hoveredIdx === i ? 'rgba(197, 155, 39, 0.2)' : 'rgba(197, 155, 39, 0.05)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: `1px solid ${hoveredIdx === i ? 'var(--accent-gold)' : 'rgba(197, 155, 39, 0.3)'}`,
              transition: 'all 0.3s ease',
              boxShadow: hoveredIdx === i ? '0 0 15px rgba(197, 155, 39, 0.3)' : 'none',
              flexShrink: 0
            }}>
              <item.icon className="text-gold" size={28} style={{ filter: hoveredIdx === i ? 'drop-shadow(0 0 5px rgba(197, 155, 39, 0.5))' : 'none' }} />
            </div>
            <h3 style={{ 
              margin: 0, 
              fontSize: '1.2rem', 
              color: hoveredIdx === i ? '#fff' : 'var(--text-secondary)',
              transition: 'color 0.3s ease',
              fontWeight: hoveredIdx === i ? 600 : 500
            }}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
