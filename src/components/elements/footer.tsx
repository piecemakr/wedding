'use client'

import React from 'react'

import { TransitionLink } from "~/components/utils/transition-link"

export default function footer() {
  return (
    <footer className="relative w-full text-xs text-left py-[3rem]">
      <div className="container flex flex-col gap-6 max-w-[1440px] mx-auto">
        <div>
          <TransitionLink href="/" route="Home" className="flex flex-row items-center gap-4 text-3xl font-bold w-max">
            <p className="uppercase">Rosie & Troy</p>
            <p className="hidden sm:block font-sans font-medium text-lg pl-4 border-l-2">MAY 17, 2025</p>
          </TransitionLink>

        </div>
        
        <p className="font-sans text-gray-400">
          ©&nbsp;{new Date().getFullYear()}&nbsp;Made With ♡ by Rosie and Troy
        </p>
      </div>  
    </footer>
  )
}
