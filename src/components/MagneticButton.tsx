import { useRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

interface MagneticButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function MagneticButton({ 
  children, 
  strength = 0.3, 
  className = '', 
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only apply on desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const boundingRect = ref.current.getBoundingClientRect();
    const centerX = boundingRect.left + boundingRect.width / 2;
    const centerY = boundingRect.top + boundingRect.height / 2;
    
    // Magnetic pull math
    const maxOffset = 12; // Maximum distance to shift
    const deltaX = (clientX - centerX) * strength * 0.6; // Weaker pull force
    const deltaY = (clientY - centerY) * strength * 0.6;
    
    const moveX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
    const moveY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));

    ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate3d(0px, 0px, 0)';
    // Smooth, bouncy but slower snap-back transition
    ref.current.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
  };

  const handleMouseEnter = () => {
    if (!ref.current) return;
    // Slower, smoother trailing transition so it feels "heavy"
    ref.current.style.transition = 'transform 0.3s ease-out';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={className}
      style={{ display: 'inline-block', willChange: 'transform' }}
      {...props}
    >
      {children}
    </div>
  );
}
