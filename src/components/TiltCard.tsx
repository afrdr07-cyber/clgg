import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
  depth?: boolean;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 6,
  scale = 1.02,
  glare = true,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device supports hover with fine pointer
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
      setIsTouchDevice(!mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => {
        setIsTouchDevice(!e.matches);
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
      }
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 220, mass: 0.5 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], isTouchDevice ? [0, 0] : [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], isTouchDevice ? [0, 0] : [-maxTilt, maxTilt]);

  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normalizedX = clientX / width - 0.5;
    const normalizedY = clientY / height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="h-full w-full flex flex-col"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={
          !isTouchDevice
            ? {
              scale,
              boxShadow: '0 24px 48px -10px rgba(102, 79, 24, 0.18), 0 8px 24px -4px rgba(180, 154, 89, 0.15)',
            }
            : undefined
        }
        transition={{ duration: 0.25 }}
        className={`relative overflow-hidden transition-all duration-300 h-full w-full flex flex-col justify-between ${className}`}
      >
        {/* Subtle Dynamic Specular Glare Overlay on fine-pointer devices */}
        {glare && isHovered && !isTouchDevice && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 65%)`,
            }}
          />
        )}

        {/* Card Content with 3D Depth rendering & full height flex column */}
        <div style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }} className="h-full w-full flex flex-col justify-between flex-1">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
