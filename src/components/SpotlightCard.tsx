import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spotlightColor?: string;
  className?: string;
}

const SpotlightCard = forwardRef<HTMLDivElement, SpotlightCardProps>(({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(235, 177, 52, 0.25)', // Brighter gold glow
  style,
  ...props 
}, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // Expose the internal target DOM element to parent refs
  useImperativeHandle(ref, () => internalRef.current as HTMLDivElement, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!internalRef.current) return;
    const rect = internalRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };
  
  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={internalRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
      {...props}
    >
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          left: '-1px',
          right: '-1px',
          bottom: '-1px',
          pointerEvents: 'none',
          transition: 'opacity 0.5s ease-in-out',
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          zIndex: 0,
          mixBlendMode: 'plus-lighter',
        }}
      />
      <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
});

export default SpotlightCard;
