'use client'

import React from 'react'

export default function footer() {
  return (
    <footer className="relative w-full text-xs text-left font-sans text-gray-400">
      <p className="container max-w-[1440px] mx-auto">
        ©&nbsp;{new Date().getFullYear()}&nbsp;Made With ♡ by Rosie and Troy
      </p>
    </footer>
  )
}
