'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Registry {
  name: string;
  domain: string;
  icon: RegistryIcon;
}

interface RegistryIcon {
  src: string;
  alt: string;
}

const registry: Registry[] = [
  {
    name: "Amazon",
    domain: "https://www.amazon.com/wedding/registry/OED491BZU28M",
    icon: {
      src: "/amazon.png",
      alt: "Amazon Logo",
    }
  },
  {
    name: "Anthropologie",
    domain: "https://www.target.com/gift-registry/wedding-registry",
    icon: {
      src: "/anthropologie.png",
      alt: "Anthropologie Logo",
    }
  },
  {
    name: "Crate & Barrel",
    domain: "https://www.thewedding.com/wedding-registry",
    icon: {
      src: "/crate-and-barrel.png",
      alt: "Crate & Barrel Logo",
    }
  },
  {
    name: "Pottery Barn",
    domain: "https://www.thewedding.com/wedding-registry",
    icon: {
      src: "/pottery-barn.svg",
      alt: "The Wedding Logo",
    }
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [dateAnimationStarted, setDateAnimationStarted] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 50);

    const dateTimer = setTimeout(() => {
      setDateAnimationStarted(true);
    }, 300);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      clearTimeout(dateTimer);
      clearTimeout(loadingTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ease-in-out shadow-2xl flex items-center justify-center ${
          loading ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="text-4xl font-bold relative mb-2">
            {['R', 'O', 'S', 'I', 'E', '\u00A0', '&', '\u00A0', 'T', 'R', 'O', 'Y'].map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-500 ${
                  animationStarted ? 'opacity-100 blur-none translate-y-0' : 'opacity-0 blur-sm translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                {letter}
              </span>
            ))}
          </div>
          <div 
            className={`text-md transition-all duration-500 font-sans font-bold tracking-[6px] ${
              dateAnimationStarted ? 'opacity-100 blur-none translate-y-0' : 'opacity-0 blur-sm translate-y-3'
            }`}
          >
            MAY 17, 2025
          </div>
        </div>
      </div>

      <main className="min-h-screen flex flex-col">
        <div className="relative w-full h-[35vh] overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0 h-[120%]">
            <Image
              src="/hero.jpg"
              alt="Rosie and Troy"
              layout="fill"
              objectFit="cover"
              priority
              className="hidden md:flex"
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
          <div className="absolute -bottom-[6.5px] left-4 right-4 text-white text-5xl font-semibold tracking-[4px]">
            REGISTRY
          </div>
        </div>

        <section className="flex-grow w-full flex flex-col justify-top px-4 py-12">
          
          <h2 className="text-md font-sans font-regular ">
            Welcome to our registry!
          </h2>
          <div className="w-full mt-12 space-y-2">
            {registry.map((item, index) => (
              <Link 
                key={index} 
                href={item.domain}
                className="flex flex-col items-left p-4 bg-gray-100 hover:bg-gray-50 transition-colors w-full"
              >
                <div className="relative size-12 mb-8 flex items-center justify-center filter grayscale">
                  <Image 
                    src={item.icon.src} 
                    alt={item.icon.alt} 
                    objectFit="contain"
                    layout="fill"
                    className="bg-gray-200 mb-8 p-2"
                  />
                </div>
                <div className="flex flex-col justify-between w-full align-center">
                  <p className="text-xl font-sans font-bold">{item.name}</p>
                  <p className="text-sm font-sans font-regular pt-1">View Registry Online</p> 
                </div>
              </Link>
            ))}
            <Link 
                href="https://www.google.com/maps/place/2+King+St+N,+Cookstown,+ON+L0L+1L0,+Canada/data=!4m2!3m1!1s0x882ac1af22c4de9b:0x11d8aa1ed10aa720?sa=X&ved=1t:242&ictx=111"
                className="flex flex-col items-left p-4 bg-gray-100 border-gray-100 hover:bg-gray-50 transition-colors w-full"
              >
                <div className="relative size-12 mb-8 flex items-center justify-center filter grayscale">
                  <Image 
                    src="/halliday-house.png"
                    alt="Halliday House Logo"
                    objectFit="contain"
                    layout="fill"
                    className="bg-gray-200 mb-8 p-2"
                  />
                </div>
                <div className="flex flex-col justify-between w-full align-center">
                  <p className="text-xl font-sans font-bold">Halliday House</p>
                  <p className="text-sm font-sans font-regular pt-1">2 King Street North, Cookstown, Ontario</p>
                </div>
              </Link>
          </div>
        </section>

        <footer className="w-full py-4 text-xs text-left font-sans px-4 pb-6 text-gray-400">
          <p>
            ©&nbsp;{new Date().getFullYear()}&nbsp;Troy & Rosie, May 17, 2025 ♡
          </p>
        </footer>
      </main>
    </>
  );
}

