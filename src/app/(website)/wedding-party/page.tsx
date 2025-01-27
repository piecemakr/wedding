'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Page() {
  
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <main className="min-h-screen flex flex-col">
        <div className="relative w-full h-[35vh] md:h-[50vh] overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0 h-[120%]">
            <Image
              src="/hero.png"
              alt="Rosie and Troy"
              layout="fill"
              objectFit="cover"
              priority
              className="hidden md:block"
            />
            <Image
              src="/hero2.png"
              alt="Rosie and Troy"
              layout="fill"
              objectFit="cover"
              priority
              className="md:hidden"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute -bottom-[8px] md:-bottom-[12px] lg:-bottom-[18px] left-4 right-4 md:left-8 md:right-8 text-white text-5xl md:text-7xl lg:text-9xl font-semibold tracking-[4px]">
            <p className="relative container max-w-[1440px] mx-auto uppercase">
              Party
            </p>
          </div>
        </div>

        <section className="flex-grow w-full flex flex-col justify-top px-4 md:px-8 pb-12">
          <div className="container max-w-[1440px] mx-auto w-full mt-12 space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
            
        
          </div>
        </section>
      </main>
    </>
  );
}

