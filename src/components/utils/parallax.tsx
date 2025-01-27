'use client'

import { useEffect, useRef } from 'react'

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
}

export const Parallax = ({ children, speed = 0.5 }: ParallaxProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={parallaxRef} className="absolute inset-0 h-[120%]">
      {children}
    </div>
  );
};
