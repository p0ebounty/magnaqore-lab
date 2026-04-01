import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const aura = useRef({ x: 0, y: 0 });
  const clickStart = useRef<number>(0);
  const isCharging = useRef<boolean>(false);
  
  // Spring physics states for scaling
  const currentScale = useRef({ aura: 1, cursor: 1 });
  const scaleVelocity = useRef({ aura: 0, cursor: 0 });

  const [ripples, setRipples] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  const rippleCount = useRef(0);

  useEffect(() => {
    // We only want the custom cursor on desktop (touch screens don't need it)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animationFrameId: number;

    const getTargetScales = () => {
      if (!isCharging.current) return { aura: 1, cursor: 1 };
      const duration = Date.now() - clickStart.current;
      const progress = Math.min(duration / 1500, 1); // 0 to 1 over 1.5s
      
      return { 
        aura: 1 - (progress * 0.8), // shrinks down to 20% size
        cursor: 1 - (progress * 0.5) // shrinks down to 50% size
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Move the small dot instantly with its current spring scale
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(${currentScale.current.cursor})`;
        cursorRef.current.style.opacity = '1'; // Ensure visible when moving
      }
      if (auraRef.current) {
        auraRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeaveWindow = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (auraRef.current) auraRef.current.style.opacity = '0';
    };

    const handleMouseEnterWindow = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
      if (auraRef.current) auraRef.current.style.opacity = '1';
    };

    const handleMouseDown = () => {
      clickStart.current = Date.now();
      isCharging.current = true;
    };

    const handleMouseUp = () => {
      isCharging.current = false;
      
      // Calculate charge duration and spawn ripple
      const chargeDuration = Date.now() - clickStart.current;
      const clampedDuration = Math.min(Math.max(chargeDuration, 0), 1500); // max 1.5 seconds charge
      
      // Base size 60px, max additional size 300px
      const calculatedSize = 60 + (clampedDuration / 1500) * 300;
      
      const newRipple = {
        id: rippleCount.current++,
        x: mouse.current.x,
        y: mouse.current.y,
        size: calculatedSize
      };

      setRipples(prev => [...prev, newRipple]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };

    const moveAura = () => {
      // Lerp (linear interpolation) for smooth following
      aura.current.x += (mouse.current.x - aura.current.x) * 0.1;
      aura.current.y += (mouse.current.y - aura.current.y) * 0.1;

      // Spring physics for "jelly" scaling effect
      const targetScales = getTargetScales();
      
      const spring = 0.15;
      const friction = 0.65;
      
      // Aura scale physics
      scaleVelocity.current.aura += (targetScales.aura - currentScale.current.aura) * spring;
      scaleVelocity.current.aura *= friction;
      currentScale.current.aura += scaleVelocity.current.aura;

      // Cursor scale physics
      scaleVelocity.current.cursor += (targetScales.cursor - currentScale.current.cursor) * spring;
      scaleVelocity.current.cursor *= friction;
      currentScale.current.cursor += scaleVelocity.current.cursor;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${aura.current.x}px, ${aura.current.y}px, 0) scale(${currentScale.current.aura})`;
      }
      
      // Always continuously applying scale to cursor via requestAnimationFrame ensures jelly bounce completes
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) scale(${currentScale.current.cursor})`;
      }

      animationFrameId = requestAnimationFrame(moveAura);
    };

    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    moveAura();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Global styles to hide default cursor where we want our custom one */}
      <style>{`
        @media (pointer: fine) {
          body * {
            cursor: none !important;
          }
        }
        @keyframes shockwave {
          0% { transform: scale(0.1); opacity: 0.8; border-width: 3px; }
          100% { transform: scale(1); opacity: 0; border-width: 0px; }
        }
      `}</style>
      
      {/* Shockwave Ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="hidden md:block pointer-events-none"
          style={{
            position: 'fixed',
            top: `${ripple.y}px`,
            left: `${ripple.x}px`,
            zIndex: 9998,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            marginLeft: `-${ripple.size / 2}px`,
            marginTop: `-${ripple.size / 2}px`,
            border: 'solid var(--accent-gold)',
            borderRadius: '50%',
            animation: 'shockwave 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards',
            boxShadow: '0 0 15px rgba(235, 177, 52, 0.4) inset, 0 0 10px rgba(235, 177, 52, 0.4)'
          }}
        />
      ))}

      {/* The large trailing glowing wave aura */}
      <div 
        ref={auraRef}
        className="hidden md:block"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          width: '400px',
          height: '400px',
          marginLeft: '-200px',
          marginTop: '-200px',
          opacity: 0,
          transition: 'opacity 0.3s ease-out',
          willChange: 'transform, opacity',
        }}
      >
        <div 
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(235, 177, 52, 0.15) 0%, rgba(235, 177, 52, 0.05) 40%, transparent 70%)',
            animation: 'pulseGold 4s infinite alternate',
            filter: 'blur(30px)'
          }}
        />
      </div>

      {/* The sharp inner dot */}
      <div 
        ref={cursorRef}
        className="hidden md:block"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10000,
          pointerEvents: 'none',
          width: '8px',
          height: '8px',
          marginLeft: '-4px',
          marginTop: '-4px',
          backgroundColor: 'var(--accent-gold)',
          borderRadius: '50%',
          opacity: 0,
          transition: 'opacity 0.2s ease-out',
          willChange: 'transform, opacity',
          boxShadow: '0 0 10px 2px rgba(235, 177, 52, 0.6)'
        }}
      />
    </>
  );
}
