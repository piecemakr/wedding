'use client';

import { ReactLenis } from 'lenis/react'

function Lenis({ children }: { children: React.ReactNode }) {

  return (
    <ReactLenis root options={{ lerp: 0.2, duration: 0.5 }}>
      {children}
    </ReactLenis>
  );
}

export default Lenis;