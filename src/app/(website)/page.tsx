'use client'

import Image from 'next/image'
import PageLoader from '~/components/elements/page-loader'
import { Parallax } from '~/components/utils/parallax'

export default function Page() {
  return (
    <>
      <PageLoader />

      <main className="min-h-screen flex flex-col">
        <div className="relative w-full h-[100vh] overflow-hidden">
          <Parallax speed={0.5}>
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
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </main>
    </>
  )
}
